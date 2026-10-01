import { useTranslation } from "react-i18next";
import styles from "./facts.module.css";

const Facts = () => {
  const { t } = useTranslation();

  const factsData = [
    {
      stat: t("facts.year", "2023"),
      label: t("facts.yearLabel", "Nacimos en Córdoba"),
    },
    {
      stat: t("facts.countries", "3 países"),
      label: t("facts.countriesLabel", "Argentina, Chile y México"),
    },
    {
      stat: t("facts.products", "4 productos"),
      label: t("facts.productsLabel", "Propios y en producción"),
    },
    {
      stat: t("facts.remote", "100% remoto"),
      label: t("facts.remoteLabel", "Un equipo de 10 personas"),
    },
  ];

  return (
    <section className={styles.factsSection} aria-label="Datos de la empresa">
      <div className={styles.wrap}>
        <div className={styles.facts}>
          {factsData.map((fact, index) => (
            <div key={index} className={styles.factItem}>
              <strong>{fact.stat}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
