import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useScrollSpy } from "../../../hooks/useScrollSpy";
import ThemeToggle from "../themeToggle/ThemeToggle";
import CvButton from "../CvButton";

const NAV_ITEMS = [
  { id: "introduction", label: "Home" },
  { id: "profile", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Stable reference so the observer in useScrollSpy is not torn down each render.
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef(null);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape closes the mobile menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-canvas transition-colors duration-300 ${
        isScrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="page flex items-center justify-between gap-4 py-4">
        <a
          href="#introduction"
          className="font-display text-2xl leading-none tracking-tight text-ink"
        >
          Amin Abdi
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded px-3 py-2 text-sm transition-colors duration-200 hover:text-accent ${
                    isActive ? "text-accent" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CvButton className="max-sm:hidden" />

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-nav" className="border-t border-rule bg-canvas lg:hidden">
          <ul className="page flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`block py-3 text-base transition-colors duration-200 hover:text-accent ${
                    activeId === item.id ? "text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2 sm:hidden">
              <CvButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
