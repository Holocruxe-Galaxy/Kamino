
import robot from '../../img/robot';
import styles from "./hero.module.css";
import { useTranslation } from "react-i18next";

const Hero3 = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`${styles.hero_container} ${styles.heroBottom}`}>
      <div className={`${styles.hero_img} ${styles.Hero_imgBottom}`}>
        <img
          className={styles.imgAcostado}
          src={robot.rob03}
          alt="Robot acostado"
        />
      </div>
      <div className={styles.hero}>
        <h2>
          {t("hero3.h2")}
          <span className={styles.title}>{t("hero3.span")}</span>
        </h2>
        <p className={styles.heroPBottom}>{t("hero3.p")}</p>
      </div>
    </section>
  );
};

export default Hero3;
