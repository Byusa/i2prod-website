import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Research } from "@/components/home/Research";
import { Technology } from "@/components/home/Technology";
import { Process } from "@/components/home/Process";
import { About } from "@/components/home/About";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <SelectedProjects />
        <Research />
        <Technology />
        <Process />
        <About />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}