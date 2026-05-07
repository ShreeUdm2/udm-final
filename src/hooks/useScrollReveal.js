import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(options.className || "is-visible");
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: options.threshold ?? 0.1 },
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [options.className, options.once, options.threshold]);

  return ref;
}
