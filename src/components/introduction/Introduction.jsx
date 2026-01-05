import "./introduction.css";
import aminabdi from "../../assets/aminabdi.jpg";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

/* ---------------------------------- */
/* Data                                */
/* ---------------------------------- */

const SOCIAL_LINKS = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/amnabdi",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/amin-abdi-9963a0226/",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    url: "https://wa.me/9119209012",
  },
  {
    id: 4,
    icon: <FaTelegram />,
    url: "https://t.me/+989119209012",
  },
];

/* ---------------------------------- */
/* Animations                          */
/* ---------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------------------------- */
/* Component                           */
/* ---------------------------------- */

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
    >
      {/* ---------- Left Content ---------- */}
      <motion.div
        className="w-full flex flex-col justify-between max-lg:text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-13 me-31.5 w-full lg:w-auto">
          {/* Title */}
          <h1 className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold">
            Hello, I’m
            <span className="block">I’m Amin Abdi</span>
          </h1>

          {/* Description */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-700">
            I'm a <span className="bg-highlight">Front-End Developer</span>{" "}
            specializing in building performant, scalable web applications using
            modern frameworks like React and JavaScript. I focus on creating
            clean architectures, seamless user experiences, and efficient
            solutions that solve real problems. I'm passionate about teamwork,
            continuous learning, and delivering high-impact features.
          </p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-5 mt-6 max-lg:justify-center text-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            {SOCIAL_LINKS.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
                whileHover={{ scale: 1.2, y: -4 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Location & Availability */}
          <motion.div
            className="mt-6 flex flex-col gap-2 max-lg:items-center text-sm text-gray-600"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            {/* Location */}
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-lg text-gray-500" />
              <span>Tehran, Iran</span>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="font-medium  text-green-600">
                Available for new projects
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------- Right Image ---------- */}
      <motion.div
        className="max-w-134 w-full h-full max-lg:mx-auto aspect-[336/336] relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={aminabdi}
          alt="Amin Abdi"
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
        />
      </motion.div>
    </section>
  );
};

export default Introduction;
