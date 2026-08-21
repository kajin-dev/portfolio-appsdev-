import SectionTitle from "@/components/ui/SectionTitle";

function Goals() {
  const goals = [
    "Improve my web development skills.",
    "Build useful and practical applications.",
    "Learn more about modern technologies.",
    "Gain more experience through projects.",
  ];

  return (
    <section
      id="goals"
      className="border-t border-[#D9D5CE] bg-[#F8F7F4] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        <SectionTitle
          eyebrow="MY GOALS"
          title="What I want to achieve."
        />

        {/* Goals */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {goals.map((goal, index) => (
            <div
              key={goal}
              className="rounded-2xl border border-[#D9D5CE] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#7A8B7A] hover:shadow-md"
            >
              <span className="text-sm font-bold text-[#7A8B7A]">
                0{index + 1}
              </span>

              <p className="mt-3 font-medium text-[#252525]">
                {goal}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Goals;