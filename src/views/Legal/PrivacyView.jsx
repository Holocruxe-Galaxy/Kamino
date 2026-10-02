import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./PrivacyView.module.css";

const PrivacyView = () => {
  const { t } = useTranslation();
  const hasVisited = sessionStorage.getItem("visited");

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("visited", "true");
    }
  }, [hasVisited]);

  return (
    <div className={styles.container}>
      <div className={styles.semicircle}></div>
      <div className={styles.wavesBackground}></div>

      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>{t("privacyPage.title")}</h2>
        </div>
      </div>

      <div className={styles.textBox}>
        <p><strong>{t("privacyPage.sec1Title")}</strong></p>
        <p>{t("privacyPage.sec1Intro")}</p>
        <ol style={{ paddingLeft: '20px', margin: '15px 0' }}>
          <li>{t("privacyPage.sec1Auto")}</li>
          <li>{t("privacyPage.sec1Use")}</li>
          <li>{t("privacyPage.sec1Third")}</li>
          <li>{t("privacyPage.sec1Security")}</li>
          <li>{t("privacyPage.sec1Links")}</li>
          <li>{t("privacyPage.sec1Minors")}</li>
        </ol>

        <p>{t("privacyPage.sec2")}</p>
        <p>{t("privacyPage.sec3")}</p>
        <p>{t("privacyPage.sec4")}</p>
        <p>{t("privacyPage.sec5")}</p>
        <p>{t("privacyPage.sec6")}</p>
        <p>{t("privacyPage.sec7")}</p>
        <p>{t("privacyPage.sec8")}</p>
        <p>{t("privacyPage.sec9")}</p>

        <p><strong>{t("privacyPage.sec10Title")}</strong></p>
        <ol type="a" style={{ paddingLeft: '20px', margin: '15px 0' }}>
          <li>{t("privacyPage.sec10a")}</li>
          <li>{t("privacyPage.sec10b")}</li>
          <li>{t("privacyPage.sec10c")}</li>
        </ol>

        <p>{t("privacyPage.sec11")}</p>
        <p>{t("privacyPage.sec12")}</p>
        <p>{t("privacyPage.sec13")}</p>

        <p>
          {t("privacyPage.sec14Pre")}
          <a href="mailto:contacto@holocruxe.com" style={{ color: '#349aef', textDecoration: 'underline' }}>
            contacto@holocruxe.com
          </a>
          {t("privacyPage.sec14Post")}
        </p>

        <p>{t("privacyPage.lastUpdated")}</p>
      </div>
    </div>
  );
};

export default PrivacyView;
