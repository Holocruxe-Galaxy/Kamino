import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menu from "../../img/menu";
import styles from "./Navbar.module.css";
import Mobile from "./Mobile";
import LanguageMenu from "./LanguageMenu/LanguageMenu";
import Logo from "./Logo";
import { forceScrollTop } from "../../utils/scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const hasVisited = sessionStorage.getItem("visited");
  const isHomeFirstVisit = !hasVisited && location.pathname === "/";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleTalkClick = (e) => {
    e?.preventDefault?.();
    if (location.pathname === "/") {
      window.dispatchEvent(new CustomEvent("open-contact-form"));
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "contacto";
      }
    } else {
      window.location.href = "/#contacto";
    }
  };

  const handleNavClick = () => {
    forceScrollTop();
    requestAnimationFrame(forceScrollTop);
  };

  const getNavLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.activeLink : ""}`.trim();

  return (
    <>
      <header className={styles.container}>
        <div className={styles.navWrap}>
          <div
            id="logo"
            className={`${styles.logoContainer} ${
              isHomeFirstVisit ? styles.logoContainerAnim : ""
            }`}
          >
            <NavLink
              to="/"
              aria-label="Holocruxe, inicio"
              className={styles.logoLink}
              onClick={handleNavClick}
            >
              <Logo isHomeFirstVisit={isHomeFirstVisit} />
            </NavLink>
          </div>

          <nav
            className={`${styles.navbar} ${
              isHomeFirstVisit ? styles.navbarAnim : ""
            }`}
            aria-label="Navegación principal"
          >
            <NavLink to="/" className={getNavLinkClass} onClick={handleNavClick} end>
              {t("navbar.home")}
            </NavLink>
            <NavLink to="/products" className={getNavLinkClass} onClick={handleNavClick}>
              {t("navbar.products")}
            </NavLink>
            <NavLink to="/projects" className={getNavLinkClass} onClick={handleNavClick}>
              {t("navbar.projects")}
            </NavLink>
            <NavLink to="/about" className={getNavLinkClass} onClick={handleNavClick}>
              {t("navbar.about")}
            </NavLink>
            <a
              href="https://factory.holocruxe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.extLink}`}
            >
              {t("navbar.factory")}
            </a>
          </nav>

          <div className={styles.navRight}>
            <LanguageMenu />
            <button
              type="button"
              onClick={handleTalkClick}
              className={styles.talkBtn}
            >
              {t("navbar.let's-talk")}
            </button>
            <button
              type="button"
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <img
                src={menuOpen ? menu.x : menu.hamb}
                alt={menuOpen ? "Cerrar menú" : "Abrir menú"}
              />
            </button>
          </div>
        </div>

        <Mobile
          menuOpen={menuOpen}
          toggleMenu={setMenuOpen}
          onTalkClick={handleTalkClick}
        />
      </header>
      <div className={styles.navbarSpacer} aria-hidden="true" />
    </>
  );
};

export default Navbar;