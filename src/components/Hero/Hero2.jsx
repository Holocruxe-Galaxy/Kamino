import styles from "./hero2.module.css";
import { useTranslation } from "react-i18next";

const Hero2 = () => {
  const { t } = useTranslation();

  const itemList = t("hero2.span")
    .split(/(?<!^)\s(?=[A-Z])/g)
    .map((item) => item.trim())
    .filter(Boolean);

  const [firstLine, ...rest] = t("hero2.p").split(". ");
  const secondLine = rest.join(". ");

  return (
    <>
      {/* Sección informativa */}
      <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>{t("hero2.h2")}</h2>

        {/* Lista SIN fondo */}
        <div className={styles.listBox}>
          <ul>
            {itemList.map((item, index) => (
              <li key={index}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Descripción CON recuadro */}
        <div className={styles.botDescriptionBox}>
          <div className={styles.descriptionBox}>
            <p>
              {firstLine}.
              <br />
              {secondLine}
            </p>
          </div>
        </div>
      </section>

      {/* Sección asistente virtual */}
      <section className={styles.assistantSection}>
        <div className={styles.botBackground}></div>

        <div className={styles.botImageWrapper}>
          <img
            src="/images/STICKER-INDIVIDUAL.png"
            alt={t("hero2.assistantTitle")}
            className={styles.botImage}
            />
        </div>
            

        <div className={styles.botContent}>
          <h2 className={styles.botTitle}>{t("hero2.assistantTitle")}</h2>

          <div className={styles.botDescriptionBox}>
            <p className={styles.botDescription}>{t("hero2.assistantText")}</p>
            <div className={styles.botListBox}>
              <span><strong>{t("hero2.assistantItem1")}</strong></span>
              <span><strong>{t("hero2.assistantItem2")}</strong></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
