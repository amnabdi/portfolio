import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../../hooks/useTheme";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink-muted transition-colors duration-200 hover:border-accent hover:text-accent ${className}`}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
