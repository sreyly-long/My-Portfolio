import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reveals elements with the `reveal` class as they scroll into view.
 * Re-scans the DOM on every route change so newly mounted pages animate too.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (items.length === 0) return;

    // No IntersectionObserver support → just show everything.
    if (typeof IntersectionObserver === "undefined") {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // Let the new route paint before observing.
    const timer = setTimeout(() => {
      items.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);
}
