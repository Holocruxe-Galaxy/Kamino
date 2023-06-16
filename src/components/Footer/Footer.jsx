import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerRight}>
        <NavLink to="#" className={styles.navlink}>
          <img src="/instagram.png" alt="Instagram" />
        </NavLink>
        <NavLink to="#" className={styles.navlink}>
          <img src="/facebook.png" alt="Facebook" />
        </NavLink>
        <NavLink to="#" className={styles.navlink}>
          <img src="/twitter.png" alt="Twitter" />
        </NavLink>
        <NavLink to="#" className={styles.navlink}>
          <img src="/linkedin.png" alt="LinkedIn" />
        </NavLink>
      </div>

      <div className={styles.footerLeft}>
        <p className={styles.footerLinks}>
          <NavLink className={`${styles.link1} ${styles.navlink}`} to="/">
            Home
          </NavLink>

          <NavLink to="/about" className={styles.navlink}>
            About Us
          </NavLink>
          <NavLink to="/faqs" className={styles.navlink}>
            FAQ
          </NavLink>
          <NavLink to="#" className={styles.navlink}>
            Join the team
          </NavLink>
        </p>

        <p>Holocruxe &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
