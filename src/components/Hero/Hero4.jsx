import styles from "./heroTexto.module.css";

const Hero4 = () => {
  return (
    <section className={styles.hero_container}>
        
      <div className={styles.hero}>
        <h2>Do you want<span className={styles.title}> to know more?</span></h2>
        <p>
        Join our waiting list and be one of the first people to try this unique experience.
        </p>
        
      </div>
    </section>
  );
};

export default Hero4;
