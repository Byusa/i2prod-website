import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Smartphone,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software, AI, web, mobile and platform products engineered by I2Prod.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[800px] w-[1000px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.08] blur-[150px]" />

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#00c6ff]" />

                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    Selected work
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  Products built for
                  <span className="text-zinc-600"> real-world use.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  A selection of platforms, applications and digital products
                  engineered across web, mobile, cloud and AI.
                </p>
              </div>
            </div>

            <div className="mt-20 flex items-center justify-between border-t border-white/[0.07] pt-6 lg:mt-28">
              <p className="font-mono text-xs text-zinc-600">
                {String(projects.length).padStart(2, "0")} PROJECTS
              </p>

              <p className="hidden text-xs text-zinc-600 sm:block">
                I2Prod / Selected Work
              </p>
            </div>
          </Container>
        </section>

        {/* Projects */}
        <section>
          <Container>
            <div className="border-t border-white/[0.08]">
              {projects.map((project, index) => {
                const hasMobile =
                  project.categories.includes("Mobile");

                return (
                  <article
                    key={project.slug}
                    className="group relative border-b border-white/[0.08]"
                  >
                    <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:px-4 lg:py-20">
                      {/* Number */}
                      <div className="lg:col-span-1">
                        <span className="font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-[#38bdf8]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Main information */}
                      <div className="lg:col-span-5">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#38bdf8]">
                          {project.eyebrow}
                        </p>

                        <h2 className="mt-5 text-3xl font-medium tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                          {project.name}
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                          {project.description}
                        </p>

                        <Link
                          href={`/projects/${project.slug}`}
                          className="group/link mt-8 inline-flex items-center gap-3 text-sm font-medium text-white"
                        >
                          View case study

                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover/link:border-[#0866ff] group-hover/link:bg-[#0866ff]">
                            <ArrowRight
                              size={14}
                              className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                            />
                          </span>
                        </Link>
                      </div>

                      {/* Metadata */}
                      <div className="lg:col-span-3">
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                          Technology
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-500"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="lg:col-span-3">
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                          Platforms
                        </p>

                        <div className="space-y-3">
                          {project.platforms.web && (
                            <a
                              href={project.platforms.web}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/platform flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-[#0866ff]/30 hover:bg-[#0866ff]/[0.05]"
                            >
                              <span className="flex items-center gap-3 text-sm text-zinc-300">
                                <Globe2
                                  size={15}
                                  className="text-zinc-500"
                                />
                                Web
                              </span>

                              <ArrowUpRight
                                size={14}
                                className="text-zinc-600 transition-colors group-hover/platform:text-[#38bdf8]"
                              />
                            </a>
                          )}

                          {hasMobile && (
                            <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] px-4 py-3 text-sm text-zinc-500">
                              <Smartphone size={15} />

                              <span>iOS & Android</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-[#0866ff] via-[#00c6ff] to-transparent transition-all duration-700 group-hover:w-full" />
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-28 sm:py-32 lg:py-40">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07101f] px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
              <div className="pointer-events-none absolute right-[-10%] top-[-100%] h-[500px] w-[500px] rounded-full bg-[#0866ff]/20 blur-[120px]" />

              <div className="relative grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                    Build with I2Prod
                  </p>

                  <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    Have a product that needs to exist?
                  </h2>
                </div>

                <div className="flex items-end lg:col-span-4 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07101f] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Start a project

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}