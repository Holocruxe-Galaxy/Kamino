import robot from '../../img/robot';
import styles from './hero.module.css';

const Hero2 = () => {
  return (
    <section className={`${styles.hero_container} ${styles.heroMiddle}`}>
      <div className={styles.hero}>
        <h2>
        Our<span className={styles.title}> mission</span>
        </h2>
        <p className={styles.heroPMiddle}>
        Our mission is to transform the way people manage their personal information. With Holocruxe, you can create your own digital identity and take full control of your data in an increasingly complex virtual world. You no longer have to worry about losing information or searching for it on disparate platforms.

        </p>
        </div>
      <div className={styles.hero_img}>
        <img className={styles.imgParado} src={robot.rob02} alt="Robot parado" />
      </div>
    </section>
  );
};

export default Hero2;
