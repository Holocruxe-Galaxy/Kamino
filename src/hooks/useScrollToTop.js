import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { forceScrollTop } from "../utils/scroll";

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    forceScrollTop();
    const rafId = requestAnimationFrame(forceScrollTop);
    const timer = setTimeout(forceScrollTop, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [location.pathname, location.search, location.hash]);
};

export default useScrollToTop;
