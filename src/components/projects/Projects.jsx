import { projects } from "../../data/projcts";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="border-t border-rule py-section">
      <div className="page">
        <h2 className="text-3xl">Projects</h2>
        <p className="prose-measure mt-4 text-lg text-ink-muted">
          Selected work, mostly enterprise platforms built for scale and longevity.
        </p>

        <div className="mt-4 divide-y divide-rule">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
