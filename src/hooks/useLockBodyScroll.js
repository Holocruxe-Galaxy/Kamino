import { useEffect } from "react";

export const useLockBodyScroll = (isLocked = false) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isLocked) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [isLocked]);
};

export default useLockBodyScroll;
