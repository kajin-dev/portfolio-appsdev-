import SectionTitle from "@/components/ui/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="border-t border-[#D9D5CE] bg-[#F8F7F4] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          eyebrow="ABOUT ME"
          title="A student who still learning things."
        />

        {/* About Content */}
        <div className="mt-6 grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE - First 3 Paragraphs */}
          <div className="mt-16 space-y-6 text-justify text-md leading-8 text-[#6B6B6B]">
            <p>
              Hello! I'm{" "}
              <span className="font-semibold text-[#252525]">
                Nica Jane A. Mosqueda
              </span>
              , a Bachelor of Science in Information Technology (BSIT)
              student with a growing passion for web development.
            </p>

            <p>
              I am continuously improving my skills by building websites and
              projects that help me gain hands-on experience in HTML, CSS,
              JavaScript, React, and Tailwind CSS. I enjoy learning new
              technologies and turning ideas into clean, responsive, and
              user-friendly websites.
            </p>

            <p>
              As an aspiring IT professional, I believe that learning is a
              continuous process. Every project I create helps me develop my
              problem-solving skills, creativity, and confidence as a future
              web developer.
            </p>
          </div>

          {/* RIGHT SIDE - Image + Text Under Image */}
          <div className="flex flex-col items-center">

            {/* Image */}
           <div className="h-52 w-52 overflow-hidden rounded-full border-[4px] border-[#7A8B7A] bg-white sm:h-60 sm:w-60 lg:-mt-20">
              <img
                src="/images/profile.jpg"
                alt="Nica Jane A. Mosqueda"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text Under Image */}
            <div className="mt-8 space-y-6 text-justify text-md leading-8 text-[#6B6B6B]">
              <p>
                I am currently learning more about React, JavaScript, Laravel,
                database management, responsive web design, and modern web
                development. I aim to become a full-stack developer and
                continue creating digital solutions that are useful, simple,
                and accessible for everyone.
              </p>

              <p>
                Outside of coding, I enjoy writing because it allows me to
                express my thoughts, ideas, and creativity. Whether I'm
                creating websites or writing, I enjoy making something
                meaningful that can connect with people.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;