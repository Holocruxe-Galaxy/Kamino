import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { SOCIAL_LINKS } from "../data/footerNavigation";
import styles from "./FooterBrand.module.css";

const FooterBrand = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default FooterBrand;
