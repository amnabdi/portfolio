import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="border-t border-rule py-section">
      <div className="page">
        <h2 className="text-3xl">Experience</h2>

        <div className="mt-6 divide-y divide-rule">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} data={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
