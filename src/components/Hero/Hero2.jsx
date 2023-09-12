// import styles from "./Hero.module.css";
import styles from './heroB.module.css';

const Hero2 = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero}>
        <h2>
          Nuestra<span className={styles.title}> misión</span>
        </h2>
        <p>
        En Holocruxe nuestra misión es preservar y compartir las experiencias y recuerdos más preciados de las personas, utilizando la tecnología de inteligencia artificial para crear un legado duradero y significativo para las generaciones futuras.
        </p>
        </div>
      <div className={styles.hero_img}>
        <img src="../../../public/img/rob02.png" alt="Robot asomandose" />
      </div>
    </section>
  );
};

export default Hero2;
