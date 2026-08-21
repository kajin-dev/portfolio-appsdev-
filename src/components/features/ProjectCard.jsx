function ProjectCard({
  title,
  description,
  technologies,
}) {
  return (
    <article className="rounded-2xl border border-[#D9D5CE] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#7A8B7A] hover:shadow-md">
      
      {/* Project Preview */}
      <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-[#F1F0EB]">
        <span className="text-sm font-medium text-[#A09D94]">
          Project Preview
        </span>
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-[#252525]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-[#6B6B6B]">
        {description}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[#D9D5CE] bg-[#F8F7F4] px-3 py-1 text-xs font-medium text-[#6B6B6B] transition-colors duration-200 hover:border-[#7A8B7A] hover:text-[#7A8B7A]"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;