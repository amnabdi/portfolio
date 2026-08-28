import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/**
 * Reads the theme the inline script in index.html already resolved and applied
 * to <html>. Reading from the DOM rather than recomputing keeps the two in
 * agreement, so React never renders a theme different from the painted one.
 */
const readAppliedTheme = () => {
  const applied = document.documentElement.getAttribute("data-theme");
  return applied === "dark" ? "dark" : "light";
};

const hasStoredPreference = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark";
  } catch {
    return false;
  }
};

export function useTheme() {
  const [theme, setTheme] = useState(readAppliedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Follow the OS while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      if (hasStoredPreference()) return;
      setTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private browsing or blocked storage: the choice just won't persist.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
