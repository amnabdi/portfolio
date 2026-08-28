import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Picture from "../common/Picture";

import aminabdi from "../../assets/aminabdi.jpg?preset=screenshot";
import "./introduction.css";

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

const Introduction = () => {
  const prefersReducedMotion = useReducedMotion();

  // A single source for the entrance animation, so reduced-motion users get a
  // static page rather than a faster version of the same movement.
  const fadeUp = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="introduction" className="page pt-16 pb-section-sm md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-4xl">
            Hello,
            <span className="block">I&rsquo;m Amin Abdi</span>
          </h1>

          <p className="prose-measure mt-6 text-lg text-ink-muted">
            I&rsquo;m a <span className="bg-highlight">Front-End Developer</span>{" "}
            specialising in performant, scalable web applications built with React and
            TypeScript. I focus on clean architecture, seamless user experiences, and
            solutions that hold up in production.
          </p>

          <ul className="mt-8 flex gap-4">
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

          <div className="mt-8 flex flex-col gap-2 text-sm text-ink-muted">
            <p className="flex items-center gap-2">
              <FiMapPin aria-hidden="true" />
              Tehran, Iran
            </p>
            <p className="flex items-center gap-2 font-medium text-accent">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </p>
          </div>
        </motion.div>

        {/* Intrinsic width/height plus a fixed aspect ratio reserve the box
            before the file lands, so the text beside it never reflows. */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <Picture
            image={aminabdi}
            alt="Amin Abdi"
            sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 100vw"
            fetchPriority="high"
            decoding="async"
            className="aspect-square w-full rounded-2xl border border-rule object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
