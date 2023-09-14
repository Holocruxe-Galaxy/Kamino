import styles from './navBarMobile.module.css';
import { NavLink } from 'react-router-dom';
import vector from '../../img/vector';

export default function Mobile() {
  return (
    <div className={styles.mobilContainer}>
      <nav className={styles.navMobile}>
        <NavLink to="/" className={styles.linkM}>
          Home
        </NavLink>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#7A6CB5" />
        </svg>

        <NavLink to="/about" className={styles.linkM}>
          About Us
        </NavLink>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#7A6CB5" />
        </svg>

        <NavLink to="waitlist" className={styles.linkM}>
          Waitlist
        </NavLink>
      </nav>
      <div className={styles.ligths}>
        <img src={vector.vector18} alt="" />
        <img src={vector.vector09} alt="" />
        <img src={vector.vector12} alt="" />
        <img src={vector.vector13} alt="" />
        <img src={vector.vector14} alt="" />
        <img src={vector.vector15} alt="" />
        <img src={vector.vector16} alt="" />
        <img src={vector.vector20} alt="" />
        <img src={vector.vector19} alt="" />
      </div>
    </div>
  );
}
