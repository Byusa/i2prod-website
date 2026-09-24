import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  ExternalLink,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { researchProjects } from "@/data/research";

interface ResearchPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return researchProjects.map((research) => ({
    slug: research.slug,
  }));
}

export default async function ResearchDetailPage({
  params,
}: ResearchPageProps) {
  const { slug } = await params;

  const research = researchProjects.find((item) => item.slug === slug);

  if (!research) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        <section className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[800px] w-[1000px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.09] blur-[160px]" />

          <Container className="relative">
            <Link
              href="/research"
              className="group mb-16 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
              All research
            </Link>

            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                  {research.field}
                </p>
              </div>

              <div className="lg:col-span-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#1688ff]/20 bg-[#0866ff]/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[#38bdf8]">
                    {research.status}
                  </span>

                  <span className="text-xs text-zinc-600">
                    {research.year}
                  </span>
                </div>

                <h1 className="mt-8 max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                  {research.title}
                </h1>

                <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                  {research.description}
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
                  Status
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  {research.status}
                </p>
              </div>

              <div className="border-b border-white/[0.07] py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Year
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  {research.year}
                </p>
              </div>

              <div className="border-b border-white/[0.07] py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Dataset
                </p>

                <p className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
                  {research.dataset ? (
                    <>
                      <Database size={14} className="text-[#38bdf8]" />
                      {research.dataset}
                    </>
                  ) : (
                    "—"
                  )}
                </p>
              </div>

              <div className="py-10 lg:col-span-3 lg:pl-10 lg:py-14">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  Publication
                </p>

                <p className="mt-3 text-sm text-zinc-300">
                  {research.venue ?? "Applied research"}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-28 sm:py-32 lg:py-40">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Research methods
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-3">
                  {research.methods.map((method) => (
                    <span
                      key={method}
                      className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-sm text-zinc-300"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                {research.links && research.links.length > 0 && (
                  <div className="mt-16 border-t border-white/[0.08] pt-10">
                    <p className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Publications & resources
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {research.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 rounded-full border border-white/[0.1] px-5 py-3 text-sm text-zinc-300 transition-all hover:border-[#0866ff]/50 hover:bg-[#0866ff]/10 hover:text-white"
                        >
                          {link.label}

                          <ExternalLink
                            size={14}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f5f7fb] py-28 text-[#07101f] sm:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#65758b]">
                  I2Prod Research
                </p>
              </div>

              <div className="lg:col-span-8">
                <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                  Explore the rest of our research.
                </h2>

                <Link
                  href="/research"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
                >
                  All research

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}