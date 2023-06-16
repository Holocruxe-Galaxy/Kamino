import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero}>
        <h2>
          <span>Live your life </span>
          <span>create your story </span>
          
        </h2>
        <h1>Leave a legacy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          labore tenetur, sit reiciendis nesciunt fugit hic modi quam earum
          nisi.
        </p>
        <button>Know more</button>
        <button className={styles.cta}>Let the magic begin!</button>
      </div>
    </section>
  );
};

export default Hero;
