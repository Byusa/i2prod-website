import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Selected Projects — placeholder for the next section */}
        <section
          id="projects"
          className="relative flex min-h-screen items-center overflow-hidden border-t border-white/[0.06] bg-[#030712]"
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute left-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0866ff]/10 blur-[160px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#00c6ff]" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Selected Projects
                </p>
              </div>

              <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
                Products we&apos;ve
                <br />

                <span className="bg-gradient-to-r from-[#0866ff] via-[#008cff] to-[#00c6ff] bg-clip-text text-transparent">
                  brought to life.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                From AI systems and web platforms to mobile applications and
                production infrastructure.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}