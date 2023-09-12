// import styles from "./Hero.module.css";
import styles from "./heroA.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_img}>
        <img src="../../../public/img/rob01.png" alt="Robot asomandose" />
      </div>
      <div className={styles.hero}>
        <h2>Un viaje<span className={styles.title}> a tus vivencias</span></h2>
        <p>
        Te imaginas Una app que atrape todos tus recuerdos, se vincule con todas tus redes sociales y genere un diario para recrear su vida con inteligencia artificial ?
        </p>
        {/* <button>Know more</button>
        <button className={styles.cta}>Let the magic begin!</button> */}
      </div>
    </section>
  );
};

export default Hero;
