import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import redes from '../../img/redes.js'

const Footer = () => {
  return (
    <>
    <div className={styles.separator}>
      
    </div>
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <img src="./holocruxe.png" alt='logo' />
      </div>

      <div className={styles.footerCenter}>
        <p className={styles.footerLinks}>
          
            <NavLink
          to="/"  className={`${styles.link1} ${styles.navlink} ${
            location.pathname === '/' && styles.activeLink
          }`}
        >
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
          <img src={redes.instagram} alt='instagram' />
        </a>
        <a
          href="https://www.linkedin.com/company/holocruxe/"
          className={styles.navlink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={redes.linkedin} alt="LinkedIn" />
        </a>
      </div>
      <p className={styles.copyMobile}>Holocruxe &copy; 2023</p>
    </footer>
    </>
  );
};

export default Footer;
