function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7A8B7A]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-[#252525] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;