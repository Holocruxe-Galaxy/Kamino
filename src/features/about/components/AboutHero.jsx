import { useTranslation } from "react-i18next";
import styles from "./AboutHero.module.css";
import Timeline from "./Timeline";

export const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutHero} aria-label="Sobre Holocruxe">
      <div className={styles.wrap}>
        <div className={styles.editorialGrid}>
          {/* Columna Izquierda: Narrativa completa */}
          <div className={styles.narrative}>
            <h1 className={styles.mainTitle}>
              {t("aboutPage.hero.title", "Un equipo chico que construye en serio.")}
            </h1>
            <p className={styles.intro}>
              {t("aboutPage.hero.intro")}
            </p>

            <div className={styles.storyText}>
              <p>{t("aboutPage.story.p1")}</p>
              <p>{t("aboutPage.story.p2")}</p>
              <p>{t("aboutPage.story.p3")}</p>
            </div>
          </div>

          {/* Columna Derecha: Timeline / Hitos */}
          <div className={styles.timelineCol}>
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
