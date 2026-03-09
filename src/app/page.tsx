import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Startups from "@/components/Startups";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import GitHubContributions from "@/components/GitHubContributions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Startups />
        <Experience />
        <Achievements />
        <Skills />
        <GitHubContributions />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
