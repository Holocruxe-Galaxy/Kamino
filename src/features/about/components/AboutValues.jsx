import { useTranslation } from "react-i18next";
import styles from "./AboutValues.module.css";
import ValueCard from "./ValueCard";
import { VALUES_ITEMS } from "../data/valuesData";

export const AboutValues = ({ items = VALUES_ITEMS }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.valuesSection} aria-label="Nuestros valores">
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle}>
          {t("aboutPage.values.title", "Lo que nos importa.")}
        </h2>

        <ul className={styles.valuesGrid}>
          {items.map((val) => (
            <ValueCard key={val.id} value={val} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutValues;
