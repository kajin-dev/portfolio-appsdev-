import SectionTitle from "@/components/ui/SectionTitle";

function TechStack() {
  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "MySQL",
  ];

  return (
    <section className="-mt-25 bg-[#F8F7F4] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        
        <SectionTitle
          eyebrow="TECH STACK"
          title="Technologies I'm learning."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#D9D5CE] bg-white px-5 py-3 text-sm font-medium text-[#252525] shadow-sm transition-all duration-200 hover:border-[#7A8B7A] hover:bg-[#7A8B7A] hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;