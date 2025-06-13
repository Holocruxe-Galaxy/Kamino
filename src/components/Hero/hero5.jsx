import styles from "./hero5.module.css";
import { useTranslation } from "react-i18next";

const Hero5 = () => {
  const { t } = useTranslation();

  const benefits = [
    t("hero5.benefit1"),
    t("hero5.benefit2"),
    t("hero5.benefit3"),
    t("hero5.benefit4"),
  ];

  return (
    <section className={styles.hero5Section}>
      <div className={styles.textContent}>
        <h2 className={styles.topTitle}>{t("hero5.title")}</h2>
        <div className={styles.descriptionBox}>
          <p>{t("hero5.subtitle")}</p>
        </div>

        <div className={styles.descriptionBox}>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero5;