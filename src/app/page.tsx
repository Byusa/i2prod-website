import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="projects"
          className="flex min-h-screen items-center border-t border-white/[0.06]"
        >
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Next
            </p>

            <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
              Selected work.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}