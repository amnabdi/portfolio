import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-center tracking-tight">
          Experience
        </h2>

        <div className="mt-8 space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} data={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
