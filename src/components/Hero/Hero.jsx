import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero}>
        <h2>A trip to<span className={styles.title}> your experience</span></h2>
        <p>
        Holocruxe is a revolutionary platform powered by artificial intelligence that allows you to preserve your most precious memories in a secure and organized way. Can you imagine having instant access to all your data in one place? With Holocruxe, it's possible.
        </p>
      </div>
    </section>
  );
};

export default Hero;
