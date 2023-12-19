import styles from "./hero.module.css";
import { useTranslation } from "react-i18next";

const Hero4 = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`${styles.hero_container} ${styles.heroText}`}>
      <div className={`${styles.hero} ${styles.heroP}`}>
        <h2>
          {t("heroT.h2")}
          <span className={styles.title}>{t("heroT.span")}</span>
        </h2>
        <p>{t("heroT.p")}</p>
      </div>
    </section>
  );
};

export default Hero4;
