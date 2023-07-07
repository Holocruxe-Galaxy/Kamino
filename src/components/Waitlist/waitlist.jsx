import styles from "./waitlist.module.css";
import LegacyModelCanvas from '../models/legacy'

const Waitlist = () => {
  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.stars_background}>       
      </div>
      <div className={styles.text_section} style={{ marginBottom: '100px' }}>
        <div className={styles.title} style={{ marginBottom: '100px' }}>
          <h2>WAITLIST</h2>
        </div>
        <p>
          Join us on this exciting journey as we transform the way we capture
          and celebrate the beauty of life.
        </p>
      </div>
      <div className={styles.form_and_model}>
        <form className={styles.join_waitlist}>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <button type="submit">Step inside!</button>
        </form>      
      </div>
    </section>
  );
};

export default Waitlist;
