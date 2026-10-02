import { useCallback } from "react";
import FooterBrand from "./components/FooterBrand";
import FooterNavColumn from "./components/FooterNavColumn";
import FooterLegal from "./components/FooterLegal";
import { FOOTER_NAV_COLUMNS } from "./data/footerNavigation";
import styles from "./Footer.module.css";

const Footer = () => {
  const handleContactClick = useCallback((e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("contacto");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footGrid}>
          <FooterBrand />

          {FOOTER_NAV_COLUMNS.map((col) => (
            <FooterNavColumn
              key={col.id}
              column={col}
              onContactClick={handleContactClick}
            />
          ))}
        </div>

        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;
