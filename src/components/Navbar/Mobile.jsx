import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menu from "../../img/menu";
import styles from "./navBarMobile.module.css";
import { forceScrollTop } from "../../utils/scroll";

export default function Mobile({ menuOpen, toggleMenu, onTalkClick }) {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    toggleMenu(false);
    forceScrollTop();
    requestAnimationFrame(forceScrollTop);
  };

  const handleTalk = (e) => {
    toggleMenu(false);
    if (onTalkClick) {
      onTalkClick(e);
    }
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ""}`}
        onClick={() => toggleMenu(false)}
        aria-hidden="true"
      />

      {/* Sidebar drawer */}
      <aside
        className={`${styles.sidebarContainer} ${
          menuOpen ? styles.sidebarVisible : ""
        }`}
        aria-label="Menú lateral móvil"
        aria-hidden={!menuOpen}
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarTitle}>Menú</span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => toggleMenu(false)}
            aria-label="Cerrar menú"
          >
            <img src={menu.x} alt="Cerrar menú" />
          </button>
        </div>

        <nav className={styles.mobileNav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.linkM} ${isActive ? styles.activeLinkM : ""}`
            }
            onClick={handleLinkClick}
          >
            {t("navbar.home")}
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${styles.linkM} ${isActive ? styles.activeLinkM : ""}`
            }
            onClick={handleLinkClick}
          >
            {t("navbar.products")}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${styles.linkM} ${isActive ? styles.activeLinkM : ""}`
            }
            onClick={handleLinkClick}
          >
            {t("navbar.projects")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.linkM} ${isActive ? styles.activeLinkM : ""}`
            }
            onClick={handleLinkClick}
          >
            {t("navbar.about")}
          </NavLink>
          <a
            href="https://factory.holocruxe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkM} ${styles.extLinkM}`}
            onClick={handleLinkClick}
          >
            {t("navbar.factory")}
          </a>
        </nav>

        <div className={styles.sidebarFooter}>
          <button
            type="button"
            className={styles.talkMobileBtn}
            onClick={handleTalk}
          >
            {t("navbar.let's-talk")}
          </button>
        </div>
      </aside>
    </>
  );
}