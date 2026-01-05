import { projects } from "../../data/projcts";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-center text-gray-500 sm:text-2xl font-semibold tracking-tight">
          Projects
        </h2>

        <div className="mt-10 space-y-10">
          {projects?.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
