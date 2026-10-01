import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const OUTPUT_DIR = path.resolve('docs/baseline');

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
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    for (const route of routes) {
      const url = `${BASE_URL}${route.path}`;
      console.log(`Capturing ${route.name} (${vp.label})...`);
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000); // Dar tiempo a que terminen animaciones iniciales

      const fileName = `${route.name}-${vp.label}.png`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`Saved: ${filePath}`);
    }

    await context.close();
  }

  await browser.close();
  console.log('All baseline screenshots captured successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
