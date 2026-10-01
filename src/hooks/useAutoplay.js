import { useState, useEffect, useRef, useCallback } from "react";

export const useAutoplay = ({ onTick, intervalMs, isEnabled = true }) => {
  const [isPaused, setIsPaused] = useState(false);
  const onTickRef = useRef(onTick);

  useEffect(() => {
    onTickRef.current = onTick;
  }, [onTick]);

  useEffect(() => {
    if (isPaused || !isEnabled) return;
    const interval = setInterval(() => {
      if (onTickRef.current) {
        onTickRef.current();
      }
    }, intervalMs);
    return () => clearInterval(interval);
  }, [isPaused, isEnabled, intervalMs]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  return {
    isPaused,
    setIsPaused,
    pause,
    resume,
  };
};

export default useAutoplay;
