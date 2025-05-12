import { useEffect, useRef, useState } from 'react';

const useScrollRotateScale = () => {
  const ref = useRef(null);
  const lastScroll = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll.current ? -1 : 1;
      lastScroll.current = currentScroll;

      if (currentScroll <= 0) {
        setRotation(0);
        setScale(1);
      } else {
        setRotation((prev) => prev + direction * 0.1);
        setScale((prev) =>
          Math.min(Math.max(prev + -direction * 0.001, 0.75), 1)
        );
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  return { ref, rotation, scale };
};

export default useScrollRotateScale;
