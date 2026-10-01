import styles from "./CarouselDots.module.css";

export const CarouselDots = ({ count, activeIndex, onSelect }) => {
  return (
    <div className={styles.carouselDots}>
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          className={`${styles.dot} ${
            activeIndex === idx ? styles.activeDot : ""
          }`}
          onClick={() => onSelect(idx)}
          aria-label={`Ir a grupo de miembros ${idx + 1}`}
          aria-current={activeIndex === idx ? "true" : undefined}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
