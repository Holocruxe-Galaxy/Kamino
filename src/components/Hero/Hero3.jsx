// import styles from "./Hero.module.css";
import styles from "./heroC.module.css";

const Hero3 = () => {
  return (
    <section className={styles.hero_container}>
        <div className={styles.hero_img}>
          <img src="../../../public/img/rob03.png" alt="Robot asomandose" />
        </div>
      <div className={styles.hero}>
        <h2>Una vida<span className={styles.title}> a tus vivencias</span></h2>
        <p>
        Holocruxe podría ayudarte a hacer un mejor uso de tu tiempo y energía para que puedas crear un legado duradero y significativo para ti y para tus seres queridos.
        </p>
        
      </div>
    </section>
  );
};

export default Hero3;
