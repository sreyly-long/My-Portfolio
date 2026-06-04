import { useEffect, useState } from "react";

/** Floating button that appears after scrolling down and returns to the top. */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={toTop}
      aria-label="Scroll back to top"
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
}
export default ScrollToTop;
