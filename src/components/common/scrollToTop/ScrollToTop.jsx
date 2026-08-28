import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  // Unmounted rather than scaled to zero, so it leaves the tab order and the
  // accessibility tree entirely while inactive.
  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-8 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-canvas shadow-lg transition-colors duration-200 hover:bg-accent-hover sm:right-8"
    >
      <FiArrowUp size={20} aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
