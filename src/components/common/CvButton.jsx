import { FiDownload } from "react-icons/fi";

const CV_URL =
  "https://drive.google.com/file/d/1W552UKQXpwFQuukDM4FaZr5iiQozKHc-/view?usp=drive_open";

/**
 * Single source of truth for the CV link, which was previously copy-pasted
 * into both the navbar and the about section.
 */
const CvButton = ({ className = "", variant = "outline" }) => {
  const styles =
    variant === "solid"
      ? "bg-accent text-canvas hover:bg-accent-hover"
      : "border border-rule text-ink hover:border-accent hover:text-accent";

  return (
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${styles} ${className}`}
    >
      <FiDownload aria-hidden="true" />
      Download CV
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
};

export default CvButton;
