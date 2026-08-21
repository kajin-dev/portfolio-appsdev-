import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import TechStack from "@/components/features/TechStack";
import Projects from "@/components/features/Projects";
import Goals from "@/components/features/Goals";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Goals />
    </>
  );
}

export default Home;