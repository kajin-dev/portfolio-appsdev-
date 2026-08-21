import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "D & A Convenience Store",
      description:
        "A collaborative website showcasing store products and basic information.",
      technologies: ["Figma", "HTML/CSS"],
    },
    {
      title: "E-Storya",
      description:
        "A collaborative platform where students can submit school-related complaints.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Maxica",
      description:
        "A collaborative music streaming platform where users can browse and play songs.",
      technologies: ["HTML", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="border-t border-[#D9D5CE] bg-[#F8F7F4] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        <SectionTitle
          eyebrow="PROJECTS"
          title="Things I've worked on."
        />

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;