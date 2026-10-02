import styles from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";
import { TIMELINE_ITEMS } from "../data/timelineData";

export const Timeline = ({ items = TIMELINE_ITEMS }) => {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </ol>
  );
};

export default Timeline;
