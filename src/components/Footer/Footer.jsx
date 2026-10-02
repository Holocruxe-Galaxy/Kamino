import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import {
  SOCIAL_LINKS,
  FOOTER_NAV_COLUMNS,
  FOOTER_LEGAL_LINKS,
} from "./data/footerNavigation";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleContactClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("contacto");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footGrid}>
          {/* Columna 1: Logo, descripción y Redes Sociales */}
          <div className={styles.brandCol}>
            <NavLink to="/" className={styles.logoLink} aria-label="Holocruxe, inicio">
              <img src="/footer.png" alt="Holocruxe" className={styles.logoImg} />
            </NavLink>
            <p className={styles.tagline}>
              {t(
                "footer.tagline",
                "Software con IA y productos propios. Desde Córdoba, 100% remotos."
              )}
            </p>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={item.label}
                >
                  {item.icon === "linkedin" ? <TbBrandLinkedin /> : <FaInstagram />}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de navegación */}
          {FOOTER_NAV_COLUMNS.map((col) => (
            <div key={col.id} className={styles.navCol}>
              <h4>{t(col.titleKey, col.titleFallback)}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.id}>
                    {link.to ? (
                      <NavLink to={link.to}>
                        {t(link.labelKey, link.labelFallback)}
                      </NavLink>
                    ) : link.isContact ? (
                      <a href={link.href} onClick={handleContactClick}>
                        {t(link.labelKey, link.labelFallback)}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        {...(link.isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.labelKey
                          ? t(link.labelKey, link.labelFallback)
                          : link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fila inferior: Derechos y enlaces legales */}
        <div className={styles.legal}>
          <p>© {currentYear} Holocruxe</p>
          <div className={styles.legalLinks}>
            {FOOTER_LEGAL_LINKS.map((link, idx) => (
              <Fragment key={link.id}>
                {idx > 0 && <span className={styles.separator}>·</span>}
                <NavLink to={link.to}>
                  {t(link.labelKey, link.labelFallback)}
                </NavLink>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
