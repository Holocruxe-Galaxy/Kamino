import styles from "./CarouselArrow.module.css";

export const CarouselArrow = ({ direction, onClick, ariaLabel }) => {
  const isPrev = direction === "prev";
  const defaultLabel = isPrev ? "Ver miembros anteriores" : "Ver siguientes miembros";

  return (
    <button
      type="button"
      className={`${styles.carouselArrow} ${isPrev ? styles.prevArrow : styles.nextArrow}`}
      onClick={onClick}
      aria-label={ariaLabel || defaultLabel}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPrev ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
};

export default CarouselArrow;
