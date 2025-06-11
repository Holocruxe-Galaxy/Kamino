import React from "react";
import styles from "./hero4.module.css";
import { useTranslation } from "react-i18next";

const Hero4 = () => {
  const { t } = useTranslation();

  // Accedemos a las claves y separamos si es necesario (como en Hero3)
  const title = t("hero4.title")?.trim();
  const subtitle = t("hero4.subtitle")?.trim();

  return (
    <section className={styles.hero4Section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentWrapper}>
        {/* Imagen hardcodeada + subtítulo */}
        <div className={styles.leftColumn}>
          <img
            src="/images/STICKER-INDIVIDUAL.png"
            alt="Asistente virtual"
            className={styles.botImage}
          />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Formulario traducido */}
        <div className={styles.rightColumn}>
          <form className={styles.form}>
            <label htmlFor="name">{t("hero4.form.name")}</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">{t("hero4.form.email")}</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="phone">{t("hero4.form.phone")}</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">{t("hero4.form.message")}</label>
            <textarea id="message" name="message" rows="4" />

            <button type="submit" className={styles.ctaButton}>
              {t("hero4.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
