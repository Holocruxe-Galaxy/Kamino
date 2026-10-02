import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FOOTER_LEGAL_LINKS } from "../data/footerNavigation";
import styles from "./FooterLegal.module.css";

const FooterLegal = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
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
  );
};

export default FooterLegal;
