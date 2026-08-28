const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule">
      <div className="page flex flex-col items-center gap-1 py-8 text-sm text-ink-muted sm:flex-row sm:justify-between">
        <p>© {year} Amin Abdi</p>
        <p>Built with React, Vite and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
