// import styles from "./Hero.module.css";
import styles from "./heroTexto.module.css";

const Hero4 = () => {
  return (
    <section className={styles.hero_container}>
        
      <div className={styles.hero}>
        <h2>Querés<span className={styles.title}> saber mas?</span></h2>
        <p>
        Sumáte a nuestra Waitlist y se de las primeras personas en probar esta experiencia única.
        </p>
        
      </div>
    </section>
  );
};

export default Hero4;
