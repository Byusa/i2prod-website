import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

export function SelectedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050a13] py-28 sm:py-32 lg:py-40"
    >
      <Container>
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:gap-8 lg:mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00c6ff]" />

              <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                Selected work
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Software designed to
              <span className="text-zinc-600"> exist beyond the prototype.</span>
            </h2>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#080e19] transition-all duration-500 hover:border-white/[0.14]"
            >
              <div className="grid min-h-[600px] lg:grid-cols-2">
                {/* Information */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14 xl:p-16">
                  <div>
                    <div className="mb-10 flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-600">
                        0{index + 1}
                      </span>

                      <div className="flex flex-wrap justify-end gap-2">
                        {project.categories.map((category) => (
                          <span
                            key={category}
                            className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-zinc-500"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                      {project.eyebrow}
                    </p>

                    <h3 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                      {project.name}
                    </h3>

                    <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-16">
                    <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs text-zinc-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link inline-flex items-center gap-3 text-sm font-medium text-white"
                    >
                      View case study

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover/link:border-[#1688ff]/40 group-hover/link:bg-[#0866ff]">
                        <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Product visual */}
                <div className="relative min-h-[420px] overflow-hidden border-t border-white/[0.06] bg-[#060b14] lg:min-h-full lg:border-l lg:border-t-0">
                  {/* atmospheric gradient */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(8,102,255,0.20),transparent_42%)]" />

                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

                  {/* abstract browser window */}
                  <div className="absolute left-[10%] top-[14%] w-[105%] overflow-hidden rounded-tl-2xl border border-white/[0.1] bg-[#0b1220] shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-x-3 group-hover:-translate-y-3">
                    <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] px-5">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />
                      <span className="h-2 w-2 rounded-full bg-white/10" />

                      <div className="ml-5 h-5 w-48 rounded-full bg-white/[0.04]" />
                    </div>

                    <div className="p-8">
                      <div className="mb-10 flex items-center justify-between">
                        <div>
                          <div className="h-3 w-24 rounded-full bg-[#1688ff]/50" />
                          <div className="mt-4 h-8 w-52 rounded-md bg-white/[0.08]" />
                        </div>

                        <div className="h-10 w-24 rounded-full bg-[#0866ff]/20" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.025]"
                          >
                            <div className="aspect-[16/10] bg-gradient-to-br from-white/[0.06] to-transparent" />

                            <div className="space-y-3 p-4">
                              <div className="h-3 w-2/3 rounded-full bg-white/[0.08]" />
                              <div className="h-2 w-1/2 rounded-full bg-white/[0.04]" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* project number */}
                  <div className="absolute bottom-8 right-8 font-mono text-[5rem] font-medium tracking-[-0.08em] text-white/[0.025] sm:text-[8rem]">
                    0{index + 1}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* All projects */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            View all projects

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}