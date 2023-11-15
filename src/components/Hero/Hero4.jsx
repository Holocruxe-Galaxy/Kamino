import styles from "./hero.module.css";

const Hero4 = () => {
  return (
    <section className={`${styles.hero_container} ${styles.heroText}`}>
      <div className={`${styles.hero} ${styles.heroP}`}>
        <h2>Do you want<span className={styles.title}> to know more?</span></h2>
        <p>
        Join our waiting list and be one of the first people to try this unique experience.
        </p>
      </div>
    </section>
  );
};

export default Hero4;
