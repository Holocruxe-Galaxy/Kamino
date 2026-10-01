import { useState, useEffect, useCallback } from "react";

const DEFAULT_BREAKPOINTS = {
  MOBILE: 540,
  TABLET: 820,
  LAPTOP: 1100,
};

const DEFAULT_COUNTS = {
  MOBILE: 1,
  TABLET: 2,
  LAPTOP: 3,
  DESKTOP: 4,
};

export const useVisibleCount = (
  breakpoints = DEFAULT_BREAKPOINTS,
  counts = DEFAULT_COUNTS
) => {
  const bpMobile = breakpoints.MOBILE ?? breakpoints.mobile ?? DEFAULT_BREAKPOINTS.MOBILE;
  const bpTablet = breakpoints.TABLET ?? breakpoints.tablet ?? DEFAULT_BREAKPOINTS.TABLET;
  const bpLaptop = breakpoints.LAPTOP ?? breakpoints.laptop ?? DEFAULT_BREAKPOINTS.LAPTOP;

  const countMobile = counts.MOBILE ?? counts.mobile ?? DEFAULT_COUNTS.MOBILE;
  const countTablet = counts.TABLET ?? counts.tablet ?? DEFAULT_COUNTS.TABLET;
  const countLaptop = counts.LAPTOP ?? counts.laptop ?? DEFAULT_COUNTS.LAPTOP;
  const countDesktop = counts.DESKTOP ?? counts.desktop ?? DEFAULT_COUNTS.DESKTOP;

  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return countDesktop;
    const w = window.innerWidth;
    if (w <= bpMobile) return countMobile;
    if (w <= bpTablet) return countTablet;
    if (w <= bpLaptop) return countLaptop;
    return countDesktop;
  }, [bpMobile, bpTablet, bpLaptop, countMobile, countTablet, countLaptop, countDesktop]);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount]);

  return visibleCount;
};

export default useVisibleCount;
