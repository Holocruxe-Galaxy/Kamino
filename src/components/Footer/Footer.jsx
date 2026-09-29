import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
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
              <a
                href="https://www.linkedin.com/company/holocruxe/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn de Holocruxe"
              >
                <TbBrandLinkedin />
              </a>
              <a
                href="https://www.instagram.com/holocruxe/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram de Holocruxe"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Columna 2: Empresa */}
          <div className={styles.navCol}>
            <h4>{t("footer.company", "Empresa")}</h4>
            <ul>
              <li>
                <NavLink to="/about">{t("footer.about", "Nosotros")}</NavLink>
              </li>
              <li>
                <NavLink to="/projects">{t("footer.projects", "Proyectos")}</NavLink>
              </li>
              <li>
                <a href="/#contacto" onClick={handleContactClick}>
                  {t("footer.contact", "Contacto")}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Productos */}
          <div className={styles.navCol}>
            <h4>{t("footer.products", "Productos")}</h4>
            <ul>
              <li>
                <a
                  href="https://www.cruxie.holocruxe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cruxie
                </a>
              </li>
              <li>
                <a
                  href="https://www.cruxie.holocruxe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cruxie WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.kira.holocruxe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kira
                </a>
              </li>
              <li>
                <a
                  href="https://www.vinado-app.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vinado
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Factory */}
          <div className={styles.navCol}>
            <h4>{t("footer.factory", "Factory")}</h4>
            <ul>
              <li>
                <a
                  href="https://factory.holocruxe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.factoryProject", "Tu proyecto en una semana")}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5490000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fila inferior: Derechos y enlaces legales */}
        <div className={styles.legal}>
          <p>© {currentYear} Holocruxe</p>
          <div className={styles.legalLinks}>
            <NavLink to="/privacy">{t("footer.privacy", "Privacidad")}</NavLink>
            <span className={styles.separator}>·</span>
            <NavLink to="/terms-of-use">{t("footer.terms", "Términos")}</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
