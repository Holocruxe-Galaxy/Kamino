import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const BASELINE_DIR = path.resolve('docs/baseline');
const DIFF_DIR = path.resolve('docs/diff');

const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'products', path: '/products' },
  { name: 'projects', path: '/projects' },
  { name: 'faqs', path: '/faqs' },
  { name: 'blog', path: '/factory' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms-of-use' },
  { name: 'vinado-delete-account', path: '/vinado/delete-account' },
];

const viewports = [
  { label: 'desktop', width: 1280, height: 800 },
  { label: 'mobile', width: 390, height: 844 },
];

async function main() {
  if (!fs.existsSync(BASELINE_DIR)) {
    console.error('Error: docs/baseline does not exist');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const results = [];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    for (const route of routes) {
      const fileName = `${route.name}-${vp.label}.png`;
      const baselinePath = path.join(BASELINE_DIR, fileName);

      if (!fs.existsSync(baselinePath)) {
        console.warn(`Baseline not found: ${baselinePath}`);
        continue;
      }

      const url = `${BASE_URL}${route.path}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      const currentBuffer = await page.screenshot({ fullPage: true });
      const baselineBuffer = fs.readFileSync(baselinePath);

      // Compare images using browser canvas
      const compResult = await page.evaluate(
        async ({ base64Baseline, base64Current }) => {
          const loadImg = (src) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve(img);
              img.onerror = reject;
              img.src = src;
            });

          const imgA = await loadImg(base64Baseline);
          const imgB = await loadImg(base64Current);

          const width = Math.max(imgA.width, imgB.width);
          const height = Math.max(imgA.height, imgB.height);

          const canvasA = document.createElement('canvas');
          canvasA.width = width;
          canvasA.height = height;
          const ctxA = canvasA.getContext('2d');
          ctxA.drawImage(imgA, 0, 0);
          const dataA = ctxA.getImageData(0, 0, width, height).data;

          const canvasB = document.createElement('canvas');
          canvasB.width = width;
          canvasB.height = height;
          const ctxB = canvasB.getContext('2d');
          ctxB.drawImage(imgB, 0, 0);
          const dataB = ctxB.getImageData(0, 0, width, height).data;

          let diffCount = 0;
          const totalPixels = width * height;
          const threshold = 10; // Color distance tolerance per channel

          for (let i = 0; i < dataA.length; i += 4) {
            const dr = Math.abs(dataA[i] - dataB[i]);
            const dg = Math.abs(dataA[i + 1] - dataB[i + 1]);
            const db = Math.abs(dataA[i + 2] - dataB[i + 2]);
            const da = Math.abs(dataA[i + 3] - dataB[i + 3]);

            if (dr > threshold || dg > threshold || db > threshold || da > threshold) {
              diffCount++;
            }
          }

          return {
            width,
            height,
            totalPixels,
            diffCount,
            diffPercent: ((diffCount / totalPixels) * 100).toFixed(3),
            dimensionsMatch: imgA.width === imgB.width && imgA.height === imgB.height,
            sizeA: { width: imgA.width, height: imgA.height },
            sizeB: { width: imgB.width, height: imgB.height },
          };
        },
        {
          base64Baseline: `data:image/png;base64,${baselineBuffer.toString('base64')}`,
          base64Current: `data:image/png;base64,${currentBuffer.toString('base64')}`,
        }
      );

      results.push({
        name: fileName,
        route: route.name,
        viewport: vp.label,
        ...compResult,
      });

      console.log(
        `${fileName}: diff ${compResult.diffPercent}% (${compResult.diffCount} / ${compResult.totalPixels} px), dimMatch: ${compResult.dimensionsMatch}`
      );
    }

    await context.close();
  }

  await browser.close();

  console.log('\n--- RESUMEN DE COMPARACIÓN VISUAL ---');
  console.table(
    results.map((r) => ({
      Archivo: r.name,
      'Dim. Coinciden': r.dimensionsMatch ? 'SÍ' : 'NO',
      'Pixeles Diferentes': r.diffCount,
      'Total Pixeles': r.totalPixels,
      '% Diferencia': `${r.diffPercent}%`,
    }))
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
