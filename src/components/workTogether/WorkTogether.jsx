import { FiArrowRight } from "react-icons/fi";

const WorkTogether = () => {
  return (
    <section className="border-t border-rule bg-surface-sunken py-section">
      <div className="page text-center">
        <h2 className="mx-auto max-w-2xl text-3xl">
          Have a project in mind? Let&rsquo;s talk about it.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-ink-muted">
          I&rsquo;m always open to discussing new projects and creative ideas. Let&rsquo;s
          connect and build something worth shipping.
        </p>

        <a
          href="https://t.me/+989119209012"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-canvas transition-colors duration-200 hover:bg-accent-hover"
        >
          Start a conversation
          <FiArrowRight aria-hidden="true" />
          <span className="sr-only">on Telegram (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
};

export default WorkTogether;
