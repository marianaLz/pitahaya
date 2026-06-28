import { useEffect, useState } from "react";

export const SLIDER_INTERVAL_MS = 5000;
export const EXIT_DURATION_MS = 400;

export const heroTextAnimationSx = (isExiting) => ({
  "@keyframes fadeSlideIn": {
    "0%": { opacity: 0, transform: "translateY(32px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  "@keyframes fadeSlideOut": {
    "0%": { opacity: 1, transform: "translateY(0)" },
    "100%": { opacity: 0, transform: "translateY(-24px)" },
  },
  animation: isExiting
    ? `fadeSlideOut ${EXIT_DURATION_MS}ms ease-in forwards`
    : "fadeSlideIn 1s ease-out forwards",
});

const useHeroTextRotation = (length) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (length <= 1) {
      return undefined;
    }

    const id = setInterval(() => {
      setIsExiting(true);
    }, SLIDER_INTERVAL_MS);

    return () => clearInterval(id);
  }, [length]);

  useEffect(() => {
    if (!isExiting || length <= 1) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setIndex((current) => (current + 1) % length);
      setIsExiting(false);
    }, EXIT_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [isExiting, length]);

  return { index, isExiting };
};

export default useHeroTextRotation;
