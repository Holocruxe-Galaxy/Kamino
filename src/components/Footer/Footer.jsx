import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <img src="./holocruxe.png" />
      </div>

      <div className={styles.footerCenter}>
        <p className={styles.footerLinks}>
          <NavLink className={`${styles.link1} ${styles.navlink}`} to="/">
            Home
          </NavLink>

          <NavLink to="/faqs" className={styles.navlink}>
            FAQ
          </NavLink>
        </p>
        <p className={styles.copy}>Holocruxe &copy; 2023</p>
      </div>

      <div className={styles.footerRight}>
        <a
          href="https://www.instagram.com/holocruxe/"
          className={styles.navlink}
          target="_blank"
          rel="noreferrer"
        >
          <img src="../../../public/img/Instagram1.png" alt="Instagram" />
        </a>
        <a href="#" className={styles.navlink} target="_blank">
          <img src="../../../public/img/Facebook1.png" alt="Facebook" />
        </a>
        <a
          href="https://www.linkedin.com/company/holocruxe/"
          className={styles.navlink}
          target="_blank"
          rel="noreferrer"
        >
          <img src="../../../public/img/LinkedIn1.png" alt="LinkedIn" />
        </a>
      </div>
      <p className={styles.copyMobile}>Holocruxe &copy; 2023</p>
    </footer>
  );
};

export default Footer;
