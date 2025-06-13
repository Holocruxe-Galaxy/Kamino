
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import menu from "../../img/menu";
import styles from "./navBarMobile.module.css";
import { Trans } from "react-i18next";


export default function Mobile({ menuOpen, toggleMenu }) {
  const containerClass = menuOpen
    ? `${styles.mobilContainer} ${styles.navMobileVisible}`
    : styles.mobilContainer;
  const handleLinkClick = () => {
    toggleMenu(false);
  };

  return (
    <div className={containerClass}>
      <div className={styles.mobileHeader}>
        <nav className={styles.mobile} onClick={toggleMenu}>

        </nav>
      </div>
      <nav
        className={`${styles.navMobile} ${
          menuOpen ? styles.navMobileVisible : ""
        }`}
      >
        <NavLink to="/" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.home"}>Home </Trans>
        </NavLink>
        <NavLink to="/about" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.about"}></Trans>
        </NavLink>
        <NavLink to="/faqs" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.faq"}></Trans>
        </NavLink>
        <NavLink to="/blog" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.blog"}></Trans>
        </NavLink>

        {/* Nuevo: Botón "Proba Cruxie" dentro del menú desplegable */}
        <a
          href="https://cruxie.holocruxe.com/" // Asegúrate de que esta URL sea la correcta
          target="_blank"
          rel="noopener noreferrer"
          className={styles.probaCruxieMobileButton} // Usamos una nueva clase para el estilo específico en móvil
          onClick={handleLinkClick} // Para cerrar el menú al hacer clic
        >
          <Trans i18nKey={"navbar.cruxieButton"}>Proba Cruxie </Trans>
          <span className={styles.plusSignMobile}>+</span> {/* Si tu botón tiene un '+' */}
        </a>
      </nav>
    </div>
  );
}