import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe2, Smartphone } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const hasMobile = project.categories.includes("Mobile");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        <section className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-25%] h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.08] blur-[150px]" />

          <Container className="relative">
            <Link
              href="/projects"
              className="group mb-16 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />

              All projects
            </Link>

            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                  {project.eyebrow}
                </p>
              </div>

              <div className="lg:col-span-9">
                <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  {project.name}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/[0.07]">
          <Container>
            <div className="grid lg:grid-cols-12">
              <div className="border-b border-white/[0.07] py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Type
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  {project.eyebrow}
                </p>
              </div>

              <div className="border-b border-white/[0.07] py-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Technology
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-10 lg:col-span-4 lg:pl-10 lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Platforms
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.platforms.web && (
                    <a
                      href={project.platforms.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-[#0866ff]/50 hover:text-white"
                    >
                      <Globe2 size={14} />
                      Web
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {hasMobile && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-sm text-zinc-400">
                      <Smartphone size={14} />
                      iOS & Android
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-28 sm:py-32 lg:py-40">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Case study
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                  Full project case study coming next.
                </h2>

                <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                  This page is ready for the product story, engineering
                  architecture, screenshots, platform details and technical
                  outcomes.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}