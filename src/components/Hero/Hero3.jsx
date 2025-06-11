import styles from "./hero3.module.css";
import { useTranslation } from "react-i18next";

const Hero3 = () => {
  const { t } = useTranslation();

  // Desglosamos el título superior
  const topTitleWords = t("hero3.top")?.trim().split(" ") || [];
  const bottomTitleWords = t("hero3.bottomTitle")?.trim().split(" ") || [];

  return (
    <section className={`${styles.heroSection} ${styles.hero3Section}`}>
      <div className={styles.textContent}>
        {/* Título superior en dos líneas */}
        <h2 className={styles.topTitle}>
          <span>
            {topTitleWords.slice(0, topTitleWords.length - 3).join(" ")}
          </span>
          <br />
          <span>
            {topTitleWords.slice(-3).join(" ")}
          </span>
        </h2>

        {/* Caja de descripción */}
        <p className={styles.descriptionBox}>
          {t("hero3.box")}
        </p>

        {/* Título principal inferior dividido */}
        <h1 className={styles.mainTitle}>
          <span className={styles.white}>
            {bottomTitleWords.slice(0, -1).join(" ")}
          </span>{" "}
          <span className={styles.gradientWord}>
            {bottomTitleWords.slice(-1)}
          </span>
        </h1>


        {/* Botón CTA */}
        <button
          className={styles.ctaButton}
          onClick={() => window.open("https://cruxie.holocruxe.com/", "_blank", "noopener,noreferrer")}
        >
          {t("hero3.cta")}
        </button>

      </div>
    </section>
  );
};

export default Hero3;
