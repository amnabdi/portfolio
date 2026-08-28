import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiCheck, FiCopy, FiMail, FiPhone } from "react-icons/fi";

const CONTACT_METHODS = [
  {
    id: "email",
    label: "Email address",
    icon: FiMail,
    display: "aminabdidev@gmail.com",
    value: "aminabdidev@gmail.com",
    href: "mailto:aminabdidev@gmail.com",
  },
  {
    id: "phone",
    label: "Phone number",
    icon: FiPhone,
    display: "+98 911 920 9012",
    value: "+989119209012",
    href: "tel:+989119209012",
  },
];

const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", icon: FaGithub, url: "https://github.com/amnabdi" },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/amin-abdi-9963a0226/",
  },
  { id: "whatsapp", label: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/9119209012" },
  { id: "telegram", label: "Telegram", icon: FaTelegram, url: "https://t.me/+989119209012" },
];

const Profession = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = async (method) => {
    try {
      await navigator.clipboard.writeText(method.value);
      setCopiedId(method.id);
      setStatus(`${method.label} copied to clipboard`);
    } catch {
      setStatus(`Could not copy the ${method.label.toLowerCase()}`);
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopiedId(null);
      setStatus("");
    }, 2500);
  };

  return (
    <section id="contact" className="border-t border-rule py-section">
      <div className="page">
        <h2 className="text-3xl">Get in touch</h2>

        <p className="prose-measure mt-4 text-lg text-ink-muted">
          Looking for a developer, have a question, or just want to connect? Reach out
          on any of these.
        </p>

        <ul className="mt-10 space-y-4">
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon;
            const isCopied = copiedId === method.id;

            return (
              <li key={method.id} className="flex items-center gap-3">
                <Icon aria-hidden="true" className="shrink-0 text-ink-muted" />
                <a
                  href={method.href}
                  dir="ltr"
                  className="text-lg transition-colors duration-200 hover:text-accent"
                >
                  {method.display}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(method)}
                  aria-label={`Copy ${method.label.toLowerCase()}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors duration-200 hover:bg-accent-soft hover:text-accent"
                >
                  {isCopied ? (
                    <FiCheck aria-hidden="true" className="text-accent" />
                  ) : (
                    <FiCopy aria-hidden="true" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Copying is otherwise a silent action — this announces the result. */}
        <p role="status" aria-live="polite" className="sr-only">
          {status}
        </p>

        <div className="mt-12">
          <h3 className="text-sm font-medium tracking-wide text-ink-muted uppercase">
            Elsewhere
          </h3>
          <ul className="mt-4 flex gap-4">
            {SOCIAL_LINKS.map(({ id, label, icon: Icon, url }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rule text-ink-muted transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <Icon size={18} aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profession;
