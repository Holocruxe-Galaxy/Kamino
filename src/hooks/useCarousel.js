import { useState, useEffect, useCallback } from "react";

export const useCarousel = (optionsOrTotal, maybeVisibleCount = 1) => {
  const options =
    typeof optionsOrTotal === "object" && optionsOrTotal !== null
      ? optionsOrTotal
      : { totalItems: optionsOrTotal, visibleCount: maybeVisibleCount };

  const { totalItems = 0, visibleCount = 1, initialIndex = 0 } = options;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const maxIndex = Math.max(0, totalItems - visibleCount);

  // Corrección del índice cuando maxIndex disminuye (e.g. al redimensionar)
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  return {
    currentIndex,
    maxIndex,
    handleNext,
    handlePrev,
    goTo,
    setCurrentIndex,
  };
};

export default useCarousel;
