import styles from "./CarouselDots.module.css";

export const CarouselDots = ({ count, activeIndex, onSelect }) => {
  return (
    <div className={styles.carouselDots} aria-hidden="true">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          className={`${styles.dot} ${
            activeIndex === idx ? styles.activeDot : ""
          }`}
          onClick={() => onSelect(idx)}
          aria-label={`Ir a grupo de miembros ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
