import { useTranslation } from "react-i18next";
import styles from "./ValueCard.module.css";

export const ValueCard = ({ value }) => {
  const { t } = useTranslation();

  return (
    <li className={styles.valueCard}>
      <h3 className={styles.valueTitle}>
        {t(value.titleKey, value.titleFallback)}
      </h3>
      <p className={styles.valueDesc}>
        {t(value.descKey, value.descFallback)}
      </p>
    </li>
  );
};

export default ValueCard;
