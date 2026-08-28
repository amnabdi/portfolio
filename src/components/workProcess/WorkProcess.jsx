import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNpm,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbDeviceMobileCode, TbTopologyStar3 } from "react-icons/tb";
import { MdOutlineDevices } from "react-icons/md";

const SKILLS = [
  { id: "html", name: "HTML", icon: FaHtml5 },
  { id: "css", name: "CSS", icon: FaCss3Alt },
  { id: "javascript", name: "JavaScript", icon: SiJavascript },
  { id: "typescript", name: "TypeScript", icon: SiTypescript },
  { id: "react", name: "React", icon: FaReact },
  { id: "next", name: "Next.js", icon: SiNextdotjs },
  { id: "pwa", name: "PWA", icon: MdOutlineDevices },
  { id: "rest", name: "REST APIs", icon: TbApi },
  { id: "react-query", name: "React Query", icon: SiReactquery },
  { id: "patterns", name: "Design Patterns", icon: TbTopologyStar3 },
  { id: "redux", name: "Redux", icon: SiRedux },
  { id: "mui", name: "Material UI", icon: SiMui },
  { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss },
  { id: "responsive", name: "Responsive Design", icon: TbDeviceMobileCode },
  { id: "npm", name: "npm", icon: SiNpm },
  { id: "git", name: "Git", icon: FaGitAlt },
];

const WorkProcess = () => {
  return (
    <section id="skills" className="border-t border-rule py-section">
      <div className="page">
        <h2 className="text-3xl">Skills</h2>
        <p className="prose-measure mt-4 text-lg text-ink-muted">
          The tools and technologies I reach for most.
        </p>

        {/* Icons are monochrome by default so sixteen vendor brand colours stop
            competing with the palette; colour returns on hover and focus. */}
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map(({ id, name, icon: Icon }) => (
            <li key={id} className="group flex flex-col items-center gap-3 text-center">
              <Icon
                aria-hidden="true"
                className="text-4xl text-ink-muted transition-colors duration-200 group-hover:text-accent"
              />
              <span className="text-sm text-ink-muted">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkProcess;
