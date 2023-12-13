import robot from '../../img/robot';
import styles from "./hero.module.css";
import { useTranslation } from 'react-i18next';


const Hero = () => {
    const {t, i18n} = useTranslation();

  return (
    <section className={`${styles.hero_container} ${styles.heroTop}`}>
      <div className={styles.hero_img}>
        <img src={robot.rob01} alt="Robot asomandose" />
      </div>
      <div className={styles.hero}>
        <h2>
         {t("landing.hero")}
          <span className={styles.title}>
            {t("landing.hero-a")}
          </span>
        </h2>
        <p>
          {t("landing.hero-b")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
