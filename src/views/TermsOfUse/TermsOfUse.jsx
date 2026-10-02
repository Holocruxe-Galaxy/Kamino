import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./TermsOfUse.module.css";

const TermsOfUse = () => {
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
          <h2>{t("termsPage.title")}</h2>
        </div>
      </div>

      <div className={styles.textBox}>
        <p>{t("termsPage.sec1")}</p>
        <p>{t("termsPage.sec2")}</p>
        <p>{t("termsPage.sec3")}</p>
        <p>{t("termsPage.sec4")}</p>
        <p>{t("termsPage.sec5")}</p>
        <p>{t("termsPage.sec6")}</p>
        <p>{t("termsPage.sec7")}</p>
        <p>{t("termsPage.sec8")}</p>
        <p>{t("termsPage.sec9")}</p>
        <p>{t("termsPage.sec10")}</p>
        <p>{t("termsPage.sec11")}</p>
        <p>{t("termsPage.sec12")}</p>
        <p>{t("termsPage.sec13")}</p>
        <p>{t("termsPage.sec14")}</p>
        <p>{t("termsPage.sec15")}</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
