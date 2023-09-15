import robot from '../../img/robot';
import styles from "./heroC.module.css";

const Hero3 = () => {
  return (
    <section className={styles.hero_container}>
        <div className={styles.hero_img}>
          <img src={robot.rob03} alt="Robot parado" />
        </div>
      <div className={styles.hero}>
        <h2>All in <span className={styles.title}> one place</span></h2>
        <p>
        Imagine never again losing an important memory or wasting time searching for information scattered across different platforms. Our Holocruxe manages your data efficiently and securely, allowing you to relive moments and access crucial information with ease.
        </p>
        
      </div>
    </section>
  );
};

export default Hero3;
