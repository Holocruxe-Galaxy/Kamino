import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./FooterNavColumn.module.css";

const FooterNavColumn = ({ column, onContactClick }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.navCol}>
      <h4>{t(column.titleKey, column.titleFallback)}</h4>
      <ul>
        {column.links.map((link) => (
          <li key={link.id}>
            {link.to ? (
              <NavLink to={link.to}>
                {t(link.labelKey, link.labelFallback)}
              </NavLink>
            ) : link.isContact ? (
              <a href={link.href} onClick={onContactClick}>
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
  );
};

export default FooterNavColumn;
