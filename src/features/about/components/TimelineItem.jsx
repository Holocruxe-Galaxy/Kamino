import { useTranslation } from "react-i18next";
import styles from "./TimelineItem.module.css";

export const TimelineItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <li className={styles.timelineItem}>
      <strong className={styles.timelineDate}>
        {t(item.dateKey, item.dateFallback)}
      </strong>
      <span className={styles.timelineDesc}>
        {t(item.descKey, item.descFallback)}
      </span>
    </li>
  );
};

export default TimelineItem;
