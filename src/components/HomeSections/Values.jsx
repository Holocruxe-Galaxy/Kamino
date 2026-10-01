import { useTranslation } from "react-i18next";
import styles from "./values.module.css";

const Values = () => {
  const { t } = useTranslation();

  const valuesData = [
    {
      title: t("values.v1Title", "Autenticidad"),
      desc: t(
        "values.v1Desc",
        "Te decimos qué se puede hacer y qué no, antes de empezar."
      ),
    },
    {
      title: t("values.v2Title", "Conexión"),
      desc: t(
        "values.v2Desc",
        "Tecnología que acerca a las personas, no que las reemplaza."
      ),
    },
    {
      title: t("values.v3Title", "Privacidad"),
      desc: t(
        "values.v3Desc",
        "Cuidamos tus datos desde el diseño, no como agregado."
      ),
    },
  ];

  return (
    <section className={styles.valuesSection} aria-label="Cómo trabajamos">
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          {t("values.title", "Cómo trabajamos.")}
        </h2>

        <ul className={styles.valuesList}>
          {valuesData.map((val, index) => (
            <li key={index} className={styles.valueItem}>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Values;
