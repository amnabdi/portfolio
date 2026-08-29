import { FiDownload } from "react-icons/fi";

// Served from public/. BASE_URL keeps this correct whether the site is hosted
// at a domain root or under a GitHub Pages subpath.
const CV_URL = `${import.meta.env.BASE_URL}amin-abdi-resume.pdf`;

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
      download="Amin-Abdi-CV.pdf"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${styles} ${className}`}
    >
      <FiDownload aria-hidden="true" />
      Download CV
      <span className="sr-only">(PDF)</span>
    </a>
  );
};

export default CvButton;
