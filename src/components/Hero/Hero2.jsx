
import robot from "../../img/robot";
import styles from "./hero.module.css";
import { useTranslation } from "react-i18next";

const Hero2 = () => {

  const {t, i18n } = useTranslation();

  return (
    <section className={`${styles.hero_container} ${styles.heroMiddle}`}>
      <div className={styles.hero}>
        <h2>
          {t("hero2.h2")}
          <span className={styles.title}>{t("hero2.span")}</span>
        </h2>
        <p className={styles.heroPMiddle}>{t("hero2.p")}</p>
      </div>
      <div className={styles.hero_img}>
        <img
          className={styles.imgParado}
          src={robot.rob02}
          alt="Robot parado"
        />
      </div>
    </section>
  );
};

export default Hero2;
