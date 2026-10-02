import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./hero.module.css";
import { EXTERNAL_LINKS } from "../../constants/externalLinks";

const Hero = () => {
  const { t } = useTranslation();

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) {
      window.dispatchEvent(new CustomEvent("open-contact-form"));
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contacto";
    }
  };

  return (
    <section className={styles.hero} aria-label="Hero principal">
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          {/* Columna Izquierda: Título, Intro, Botones */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {t(
                "homeHero.title",
                "Construimos software con IA que las empresas usan de verdad."
              )}
            </h1>

            <p className={styles.intro}>
              {t(
                "homeHero.intro",
                "Somos Holocruxe: una software factory con productos propios en producción. Nacimos en Córdoba y trabajamos con empresas de Argentina, Chile y México."
              )}
            </p>

            <div className={styles.actions}>
              <button
                type="button"
                onClick={handleContactClick}
                className={styles.btnPrimary}
              >
                {t("homeHero.talkBtn", "Hablemos de tu proyecto")}
              </button>
              <NavLink to="/projects" className={styles.btnGhost}>
                {t("homeHero.projectsBtn", "Ver proyectos")}
              </NavLink>
            </div>
          </div>

          {/* Columna Derecha: Red Viva de IA (SVG con flujos de datos continuos) */}
          <div className={styles.nodesWrapper}>
            <svg
              className={styles.nodes}
              viewBox="0 0 520 440"
              role="img"
              aria-label="Holocruxe conecta su Software Factory con cuatro productos: Cruxie, Cruxie WhatsApp, Kira y Vinado"
            >
              <defs>
                {/* Glow Filter suave para el núcleo central */}
                <filter id="core-glow-filter-app" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Gradientes de flujo de datos hacia cada producto */}
                <linearGradient id="grad-factory-app" x1="260" y1="220" x2="110" y2="78" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#349AEF" />
                  <stop offset="100%" stopColor="#0061E9" />
                </linearGradient>
                <linearGradient id="grad-kira-app" x1="260" y1="220" x2="410" y2="78" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#349AEF" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
                <linearGradient id="grad-wa-app" x1="260" y1="220" x2="450" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#349AEF" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="grad-cruxie-app" x1="260" y1="220" x2="380" y2="372" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#349AEF" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
                <linearGradient id="grad-vinado-app" x1="260" y1="220" x2="130" y2="372" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#349AEF" />
                  <stop offset="100%" stopColor="#722e37ff" />
                </linearGradient>

                {/* Clip circular para imagen central */}
                <clipPath id="centerCircleClip-app">
                  <circle cx="260" cy="220" r="32" />
                </clipPath>

                {/* Clips circulares para productos */}
                <clipPath id="factoryCircleClip-app">
                  <circle cx="110" cy="78" r="22" />
                </clipPath>
                <clipPath id="cruxieCircleClip-app">
                  <circle cx="380" cy="372" r="22" />
                </clipPath>
                <clipPath id="vinadoCircleClip-app">
                  <circle cx="130" cy="372" r="22" />
                </clipPath>
              </defs>

              {/* Capa Base de Aristas (estáticas/tenues) */}
              <path className={`${styles.edgeBase} ${styles.edgeBaseMain}`} d="M260 220 C 190 170, 150 110, 110 78" />
              <path className={styles.edgeBase} d="M260 220 C 330 170, 370 110, 410 78" />
              <path className={styles.edgeBase} d="M260 220 C 350 220, 400 230, 450 250" />
              <path className={styles.edgeBase} d="M260 220 C 320 290, 360 330, 380 372" />
              <path className={styles.edgeBase} d="M260 220 C 200 290, 160 330, 130 372" />

              {/* Capa de Flujo Continuo de Paquetes de Datos (animación infinita) */}
              <path className={`${styles.edgePulse} ${styles.pulseFactory}`} d="M260 220 C 190 170, 150 110, 110 78" />
              <path className={`${styles.edgePulse} ${styles.pulseKira}`} d="M260 220 C 330 170, 370 110, 410 78" />
              <path className={`${styles.edgePulse} ${styles.pulseWa}`} d="M260 220 C 350 220, 400 230, 450 250" />
              <path className={`${styles.edgePulse} ${styles.pulseCruxie}`} d="M260 220 C 320 290, 360 330, 380 372" />
              <path className={`${styles.edgePulse} ${styles.pulseVinado}`} d="M260 220 C 200 290, 160 330, 130 372" />

              {/* Nodo Central: Holocruxe con Imagen Recortada y Breathing Effect suave */}
              <circle
                className={styles.coreGlow}
                cx="260"
                cy="220"
                r="40"
                fill="rgba(52,154,239,0.15)"
                filter="url(#core-glow-filter-app)"
              />
              <circle
                className={styles.coreMain}
                fill="#08094a"
                cx="260"
                cy="220"
                r="34"
              />
              <image
                href="/images/H.png"
                x="228"
                y="186"
                width="68"
                height="68"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#centerCircleClip-app)"
              />
              <circle
                cx="260"
                cy="220"
                r="33"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1.5"
              />

              {/* Nodos Periféricos con Colores de Acento y Pulso Blur como H central */}
              <a
                href={EXTERNAL_LINKS.FACTORY}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.node}
              >
                <circle
                  className={`${styles.nodeGlow} ${styles.glowFactory}`}
                  cx="110"
                  cy="78"
                  r="28"
                  fill="rgba(0, 97, 233, 0.45)"
                  filter="url(#core-glow-filter-app)"
                />
                <circle
                  cx="110"
                  cy="78"
                  r="22"
                  fill="#000032"
                  stroke="rgba(0, 97, 233, 0.5)"
                  strokeWidth="1.5"
                />
                <image
                  href="/images/factory.png"
                  x="88"
                  y="56"
                  width="44"
                  height="44"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#factoryCircleClip-app)"
                  className={styles.nodeImage}
                />
                <text className={styles.nodeText} x="110" y="44" textAnchor="middle">
                  Software Factory
                </text>
                <text className={styles.nodeSub} x="110" y="116" textAnchor="middle">
                  Tu proyecto en una semana
                </text>
              </a>

              <a
                href={EXTERNAL_LINKS.KIRA}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.node}
              >
                <circle
                  className={`${styles.nodeGlow} ${styles.glowKira}`}
                  cx="410"
                  cy="78"
                  r="28"
                  fill="rgba(168, 85, 247, 0.45)"
                  filter="url(#core-glow-filter-app)"
                />
                <circle
                  cx="410"
                  cy="78"
                  r="22"
                  fill="rgba(8, 9, 74, 0.8)"
                  stroke="rgba(168, 85, 247, 0.5)"
                  strokeWidth="1.5"
                />
                <image
                  href="/images/kira.png"
                  x="386"
                  y="54"
                  width="48"
                  height="48"
                  className={styles.nodeImage}
                  preserveAspectRatio="xMidYMid meet"
                />
                <text className={styles.nodeText} x="410" y="44" textAnchor="middle">
                  Kira
                </text>
              </a>

              <a
                href="/products#cruxie_wa"
                className={styles.node}
              >
                <circle
                  className={`${styles.nodeGlow} ${styles.glowWa}`}
                  cx="450"
                  cy="250"
                  r="28"
                  fill="rgba(37, 211, 102, 0.4)"
                  filter="url(#core-glow-filter-app)"
                />
                <circle
                  cx="450"
                  cy="250"
                  r="20"
                  fill="rgba(8, 9, 74, 0.8)"
                  stroke="rgba(37, 211, 102, 0.45)"
                  strokeWidth="1.5"
                />
                <image
                  href="/images/Cruxie-Wpp.png"
                  x="426"
                  y="227"
                  width="48"
                  height="48"
                  className={styles.nodeImage}
                  preserveAspectRatio="xMidYMid meet"
                />
                <text className={styles.nodeText} x="450" y="292" textAnchor="middle">
                  Cruxie WhatsApp
                </text>
              </a>

              <a
                href={EXTERNAL_LINKS.CRUXIE}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.node}
              >
                <circle
                  className={`${styles.nodeGlow} ${styles.glowCruxie}`}
                  cx="380"
                  cy="372"
                  r="28"
                  fill="rgba(56, 189, 248, 0.45)"
                  filter="url(#core-glow-filter-app)"
                />
                <circle
                  cx="380"
                  cy="372"
                  r="22"
                  fill="#000032"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="1.5"
                />
                <image
                  href="/images/Cruxie.png"
                  x="345"
                  y="337"
                  width="70"
                  height="70"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#cruxieCircleClip-app)"
                  className={styles.nodeImage}
                />
                <text className={styles.nodeText} x="380" y="416" textAnchor="middle">
                  Cruxie
                </text>
              </a>

              <a
                href={EXTERNAL_LINKS.GOOGLE_PLAY_VINADO}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.node}
              >
                <circle
                  className={`${styles.nodeGlow} ${styles.glowVinado}`}
                  cx="130"
                  cy="372"
                  r="28"
                  fill="rgba(91, 37, 44, 0.75)"
                  filter="url(#core-glow-filter-app)"
                />
                <circle
                  cx="130"
                  cy="372"
                  r="22"
                  fill="#5c1d24"
                  stroke="rgba(91, 37, 44, 0.7)"
                  strokeWidth="1.5"
                />
                <image
                  href="/images/vinado.png"
                  x="94"
                  y="335"
                  width="72"
                  height="72"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#vinadoCircleClip-app)"
                  className={styles.nodeImage}
                />
                <text className={styles.nodeText} x="130" y="416" textAnchor="middle">
                  Vinado
                </text>
              </a>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
