import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNpm,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdOutlineDevices } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";

const skills = [
  { id: 1, name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { id: 2, name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { id: 3, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 4, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 5, name: "React.js", icon: FaReact, color: "#61DAFB" },
  { id: 6, name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { id: 7, name: "PWA", icon: MdOutlineDevices, color: "#6366F1" },
  { id: 8, name: "REST APIs", icon: TbApi, color: "#111827" },
  { id: 9, name: "React Query", icon: FaReact, color: "#F97316" },
  { id: 10, name: "Design Pattern", icon: SiJavascript, color: "#0F766E" },
  { id: 11, name: "Redux", icon: SiRedux, color: "#764ABC" },
  { id: 12, name: "Material UI", icon: SiTailwindcss, color: "#0284C7" },
  { id: 13, name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  {
    id: 14,
    name: "Responsive & Adaptive Design",
    icon: TbDeviceMobileCode,
    color: "#6B7280",
  },
  { id: 15, name: "npm", icon: SiNpm, color: "#CB0001" },
  { id: 16, name: "Git", icon: FaGitAlt, color: "#F05033" },
];
const WorkProcess = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* برچسب بالا */}

        <p className="text-3xl font-medium text-gray-500">Skills</p>

        {/* توضیح کوتاه */}
        <p className="mt-4 text-xl text-slate-500">
          The skills, tools and technologies I am really good at:
        </p>

        {/* آیکون‌ها */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.id} className="flex flex-col items-center gap-2">
                <Icon className="text-6xl " style={{ color: skill.color }} />
                <span className="text-xs sm:text-sm text-slate-500">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
