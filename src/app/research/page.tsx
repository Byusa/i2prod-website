import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Database,
  FlaskConical,
  Network,
  Orbit,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { researchProjects } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and publications across large language models, operations research, intelligent systems and applied artificial intelligence.",
};

function getPrimaryLink(slug: string) {
  const research = researchProjects.find((item) => item.slug === slug);

  if (!research) {
    return "/research";
  }

  return research.links?.[0]?.url ?? `/research/${research.slug}`;
}

const researchAreas = [
  {
    title: "Large Language Models",
    description:
      "Reasoning, evaluation and the application of language models to specialized technical domains.",
    icon: BrainCircuit,
  },
  {
    title: "AI Agents",
    description:
      "Tool-augmented intelligent systems capable of interacting with models, data and operational systems.",
    icon: Orbit,
  },
  {
    title: "Operations Research",
    description:
      "Exploring the intersection of optimization, planning and modern artificial intelligence.",
    icon: Network,
  },
  {
    title: "Applied AI",
    description:
      "Using machine learning and explainable AI to investigate real-world problems and complex datasets.",
    icon: FlaskConical,
  },
];

export default function ResearchPage() {
  const publications = researchProjects.filter(
    (item) =>
      item.status === "Peer Reviewed" || item.status === "Preprint"
  );

  const appliedResearch = researchProjects.filter(
    (item) =>
      item.status === "Research" || item.status === "In Progress"
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-35%] h-[900px] w-[1000px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.09] blur-[160px]" />

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#00c6ff]" />

                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    I2Prod Research
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  Researching the systems
                  <span className="text-zinc-600"> we&apos;ll build next.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  Research across large language models, AI agents,
                  optimization and applied machine learning — connecting
                  scientific exploration with production engineering.
                </p>
              </div>
            </div>

            <div className="mt-20 grid gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-3 lg:mt-28">
              <div>
                <p className="font-mono text-3xl tracking-[-0.04em]">
                  {String(publications.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Public research papers
                </p>
              </div>

              <div>
                <p className="font-mono text-3xl tracking-[-0.04em]">
                  {String(researchProjects.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Research projects
                </p>
              </div>

              <div>
                <p className="font-mono text-3xl tracking-[-0.04em]">
                  AI
                </p>

                <p className="mt-2 text-xs text-zinc-600">
                  Core research discipline
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Publications */}
        <section className="border-t border-white/[0.07] py-28 sm:py-32 lg:py-40">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Publications
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Published research.
                </h2>
              </div>
            </div>

            <div className="mt-16 border-t border-white/[0.08] lg:mt-24">
              {publications.map((research, index) => {
                const href = getPrimaryLink(research.slug);

                return (
                  <article
                    key={research.slug}
                    className="group relative border-b border-white/[0.08]"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-8 lg:px-4 lg:py-16"
                    >
                      <div className="lg:col-span-1">
                        <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-[#38bdf8]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="lg:col-span-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-[#1688ff]/20 bg-[#0866ff]/[0.07] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#38bdf8]">
                            {research.status}
                          </span>

                          <span className="text-xs text-zinc-600">
                            {research.year}
                          </span>
                        </div>

                        <h3 className="mt-6 max-w-3xl text-2xl font-medium leading-[1.2] tracking-[-0.035em] text-white sm:text-3xl">
                          {research.title}
                        </h3>

                        {research.venue && (
                          <p className="mt-4 text-sm text-zinc-500">
                            {research.venue}
                          </p>
                        )}

                        {research.authors && (
                          <p className="mt-5 max-w-3xl text-xs leading-6 text-zinc-600">
                            {research.authors.join(" · ")}
                          </p>
                        )}
                      </div>

                      <div className="lg:col-span-4">
                        <p className="text-sm leading-7 text-zinc-400">
                          {research.description}
                        </p>

                        {research.doi && (
                          <p className="mt-5 font-mono text-[11px] text-zinc-600">
                            DOI {research.doi}
                          </p>
                        )}
                      </div>

                      <div className="flex lg:col-span-1 lg:justify-end">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:border-[#0866ff] group-hover:bg-[#0866ff]">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </a>

                    <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-[#0866ff] via-[#00c6ff] to-transparent transition-all duration-700 group-hover:w-full" />
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Research areas - light transition */}
        <section className="bg-[#f5f7fb] py-28 text-[#07101f] sm:py-32 lg:py-40">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#0866ff]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#65758b]">
                    Research areas
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                  Where software engineering
                  <span className="text-[#9aa7ba]">
                    {" "}
                    meets scientific exploration.
                  </span>
                </h2>
              </div>
            </div>

            <div className="mt-20 grid border-l border-t border-black/[0.08] md:grid-cols-2 lg:mt-24">
              {researchAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="group min-h-[300px] border-b border-r border-black/[0.08] p-8 transition-colors duration-500 hover:bg-white sm:p-10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.08] bg-white">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[#0866ff]"
                      />
                    </div>

                    <h3 className="mt-12 text-2xl font-medium tracking-[-0.035em]">
                      {area.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-[#65758b]">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Applied Research */}
        {appliedResearch.length > 0 && (
          <section className="py-28 sm:py-32 lg:py-40">
            <Container>
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Applied research
                  </p>
                </div>

                <div className="lg:col-span-9">
                  <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    Research applied to
                    <span className="text-zinc-600"> real problems.</span>
                  </h2>
                </div>
              </div>

              <div className="mt-20">
                {appliedResearch.map((research) => (
                  <article
                    key={research.slug}
                    className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07101f] p-8 sm:p-10 lg:p-14"
                  >
                    <div className="pointer-events-none absolute right-[-10%] top-[-40%] h-[500px] w-[500px] rounded-full bg-[#0866ff]/10 blur-[120px]" />

                    <div className="relative grid gap-12 lg:grid-cols-12">
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-[#1688ff]/20 bg-[#0866ff]/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[#38bdf8]">
                            {research.status}
                          </span>

                          <span className="text-xs text-zinc-600">
                            {research.year}
                          </span>
                        </div>

                        <h3 className="mt-7 max-w-3xl text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                          {research.title}
                        </h3>

                        <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                          {research.description}
                        </p>

                        {research.dataset && (
                          <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
                            <Database
                              size={15}
                              className="text-[#38bdf8]"
                            />

                            {research.dataset}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-end lg:col-span-5">
                        <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                          Methods
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {research.methods.map((method) => (
                            <span
                              key={method}
                              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400"
                            >
                              {method}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/research/${research.slug}`}
                          className="group mt-10 inline-flex items-center gap-3 self-start text-sm font-medium"
                        >
                          Explore research

                          <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Research philosophy */}
        <section className="border-t border-white/[0.07] py-28 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <BookOpen
                  size={24}
                  strokeWidth={1.3}
                  className="text-[#38bdf8]"
                />
              </div>

              <div className="lg:col-span-8">
                <p className="text-3xl font-medium leading-[1.3] tracking-[-0.035em] text-zinc-400 sm:text-4xl">
                  Research gives us a way to investigate what is possible
                  before it becomes
                  <span className="text-white"> standard engineering.</span>
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