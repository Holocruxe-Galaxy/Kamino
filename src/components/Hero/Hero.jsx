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
          Travel through your memories. Relive your past, reinvent your future
          by combining magic and artificial intelligence. Connect with your
          memories in a different way. <br />
          <strong>Welcome to HOLOCRUXE!</strong>
        </p>
        {/* <button>Know more</button>
        <button className={styles.cta}>Let the magic begin!</button> */}
      </div>
    </section>
  );
};

export default Hero;
