import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const Profession = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div id="contact">
      <section className="py-10 text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-gray-700">
            Get In Touch
          </span>
        </div>

        {/* Text */}
        <p className="mx-auto px-1.5 max-w-xl text-gray-600">
          What’s next? Feel free to reach out to me if you’re looking for a
          developer, have a query, or simply want to connect.
        </p>

        {/* Contact Info */}
        <div className="mt-10 space-y-5 text-lg font-semibold text-gray-900">
          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-gray-500" />
            <span>aminabdidev@gmail.com</span>
            <button
              onClick={() => copyToClipboard("aminabdidev@gmail.com")}
              className="text-gray-400 hover:text-gray-700 transition cursor-pointer"
            >
              <FiCopy />
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <FaPhone className="text-gray-500" />
            <span dir="ltr">+98 911 920 9012</span>
            <button
              onClick={() => copyToClipboard("+989119209012")}
              className="text-gray-400 hover:text-gray-700 transition cursor-pointer"
            >
              <FiCopy />
            </button>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-16">
          <p className="mb-5 text-sm text-gray-500">
            You may also find me on these platforms!
          </p>
          <div className="flex justify-center gap-6 text-xl text-gray-400">
            <a
              href="https://github.com/amnabdi"
              className="hover:text-gray-900 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amin-abdi-9963a0226/"
              className="hover:text-gray-900 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/9119209012"
              className="hover:text-gray-900 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/+989119209012"
              className="hover:text-gray-900 transition"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profession;
