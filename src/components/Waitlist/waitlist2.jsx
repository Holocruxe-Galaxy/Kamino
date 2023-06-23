import React from "react";
import Stars from "../Stars/stars";
import { Canvas } from "@react-three/fiber";
import styles from "./waitlist.module.css";

const Waitlist = () => {
  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.stars_background}>       
      </div>
      <form className={styles.join_waitlist}>
        <h2>WAITLIST</h2>
        <p>
          Join us on this exciting journey as we transform the way we capture
          and celebrate the beauty of life.
        </p>
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
    </section>
  );
};

export default Waitlist;
