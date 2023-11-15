import robot from '../../img/robot';
import styles from "./hero.module.css";

const Hero3 = () => {
  return (
    <section className={`${styles.hero_container} ${styles.heroBottom}`}>
        <div className={`${styles.hero_img} ${styles.Hero_imgBottom}`}>
          <img className={styles.imgAcostado} src={robot.rob03} alt="Robot acostado" />
        </div>
        <div className={styles.hero}>
        <h2>All in <span className={styles.title}> one place</span></h2>
        <p className={styles.heroPBottom}>
        Imagine never again losing an important memory or wasting time searching for information scattered across different platforms. Our Holocruxe manages your data efficiently and securely, allowing you to relive moments and access crucial information with ease.
        </p>

      </div>
    </section>
  );
};

export default Hero3;
