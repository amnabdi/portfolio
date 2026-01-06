import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import { LuCodeXml } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "skills", url: "skills" },
  { id: 4, name: "experience", url: "experience" },
  { id: 5, name: "projects", url: "projects" },
  { id: 6, name: "contact", url: "contact" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#1e40af",
        color: "white",
      }}
      className={`hover:text-picto-primary px-5 py-3 mx-1`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0  ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <LuCodeXml size={30} />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Amin Abdi
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="">
            <a
              href="https://drive.google.com/file/d/1W552UKQXpwFQuukDM4FaZr5iiQozKHc-/view?usp=drive_open"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
