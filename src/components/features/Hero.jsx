import Button from "@/components/ui/Button";

function Hero() {
  return (
    <section
  id="home"
  className="relative overflow-hidden flex min-h-[calc(100vh-73px)] items-center bg-[#FCFBF8] px-6 py-20"
> 
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7A8B7A]">
            Hello, I'm
          </p>

          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[#252525] sm:text-3xl">
            NICA JANE A. MOSQUEDA
          </h2>

          <h1 className="mt-3 text-6xl font-black uppercase leading-[0.9] tracking-tight text-[#252525] sm:text-7xl lg:text-8xl">
            WEB
            <br />
            DEVELOPER
          </h1>

          <p className="mt-6 max-w-lg text-xl text-[#6B6B6B]">
            I aim to grow into a full-stack developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="https://github.com/"
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;