import { useEffect } from 'react';
import styles from './About.module.css';
import vector from '../../img/vector';
import robot from '../../img/robot';

import { useTranslation } from "react-i18next";

const About = () => {
  const hasVisited  = sessionStorage.getItem('visited');
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>{t("about.title-1")}</h2>
        </div>
        {/* <img src={vector.vector33} alt="" className={styles.vector1}/> */}
      </div>
      <article className={styles.text}>
        <p className={styles.sizeMobil}>
          <span className={styles.titleSmall}>{t("about.holocruxe")}</span>
          {t("about.holocruxeP-1")}
        </p>
        <pre>
          <br />
        </pre>
        <p className={styles.rigthText}>{t("about.holocruxeP-2")}</p>
      </article>
      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>{t("about.title-2")}</h2>
        </div>
      </div>

      <div className={styles.values}>
        <div className={styles.value}>
          <h3 className={styles.title}>{t("about.authenticity")}</h3>
          <p>{t("about.authenticityP")}</p>
        </div>
        <div className={styles.value}>
          <h3 className={styles.title}>{t("about.connection")}</h3>
          <p>{t("about.connectionP")}</p>
        </div>
        <div className={styles.value}>
          <h3 className={styles.title}>{t("about.privacy")}</h3>
          <p>{t("about.privacyP")}</p>
        </div>
      </div>
      <img src={robot.rob04} alt="robot apoyado" className={styles.robot} />
    </div>
  );
};

export default About;
