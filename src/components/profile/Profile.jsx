import person from "../../assets/AboutImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          {/* <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div> */}
        </div>

        <div className="max-sm:w-full w-[37rem] ">
          <h2
            className={`text-xs text-gray-600 sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            About Me
          </h2>
          <div
            className={`text-xs xs:text-[15px] lg:text-[17px] font-normal max-md:text-center text-gray-600 `}
          >
            <p className={``}>
              I’m a Front-End Developer who turns ideas into fast, clean, and
              intuitive web experiences. I work with React, Next.js, and
              Tailwind to build modern interfaces that feel simple, smooth, and
              effortless.
            </p>
            <p className="mt-3 text-lg font-semibold text-gray-700">
              My Journey{" "}
            </p>
            <p className="mt-3">
              I started my frontend journey a few years ago, driven by curiosity
              and a love for clean design. Today, I focus on building scalable,
              maintainable applications with a strong emphasis on performance,
              consistency, and user experience.
            </p>
            <p className="my-3 text-lg font-semibold text-gray-700">
              What I Do Best
            </p>
            <p>
              • Building scalable, high-performing web apps with React and
              Next.js
            </p>
            <p>• Crafting modern, pixel-perfect UIs with Tailwind CSS</p>
            <p>
              • Improving performance and accessibility through clean
              architecture
            </p>
            <p>
              • Collaborating to bring ideas and designs to life with precision
            </p>
          </div>
          <div className="mt-8 text-center ">
            <a
              href="https://drive.google.com/file/d/1W552UKQXpwFQuukDM4FaZr5iiQozKHc-/view?usp=drive_open"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
