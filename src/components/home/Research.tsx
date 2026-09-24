import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, FlaskConical } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { researchProjects } from "@/data/research";

function getPrimaryLink(slug: string) {
  const research = researchProjects.find((item) => item.slug === slug);

  if (!research) {
    return "/research";
  }

  return research.links?.[0]?.url ?? `/research/${research.slug}`;
}

export function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#f5f7fb] py-28 text-[#07101f] sm:py-32 lg:py-40"
    >
      {/* background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#0866ff]/[0.08] blur-[130px]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0866ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#65758b]">
                Research
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
              Exploring what comes
              <span className="text-[#9aa7ba]"> after today&apos;s software.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#65758b] sm:text-lg">
              Research across large language models, operations research,
              intelligent systems and applied artificial intelligence.
            </p>
          </div>
        </div>

        {/* Research list */}
        <div className="mt-20 border-t border-black/[0.09] lg:mt-28">
          {researchProjects.map((research, index) => {
            const href = getPrimaryLink(research.slug);
            const external = href.startsWith("http");

            return (
              <article
                key={research.slug}
                className="group relative border-b border-black/[0.09]"
              >
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="grid gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:px-4 lg:py-14"
                >
                  {/* number */}
                  <div className="lg:col-span-1">
                    <span className="font-mono text-xs text-[#a2adbb] transition-colors group-hover:text-[#0866ff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* title */}
                  <div className="lg:col-span-5">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#0866ff]/15 bg-[#0866ff]/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0866ff]">
                        {research.status}
                      </span>

                      <span className="text-xs text-[#8b98a9]">
                        {research.year}
                      </span>
                    </div>

                    <h3 className="max-w-xl text-2xl font-medium leading-[1.15] tracking-[-0.035em] sm:text-3xl">
                      {research.title}
                    </h3>

                    {research.venue && (
                      <p className="mt-4 text-xs font-medium text-[#65758b]">
                        {research.venue}
                      </p>
                    )}
                  </div>

                  {/* description */}
                  <div className="lg:col-span-4">
                    <p className="max-w-lg text-sm leading-7 text-[#65758b]">
                      {research.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {research.methods.slice(0, 4).map((method) => (
                        <span
                          key={method}
                          className="text-[11px] text-[#9aa7ba]"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* action */}
                  <div className="flex items-start justify-start lg:col-span-2 lg:justify-end">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.1] bg-white transition-all duration-300 group-hover:border-[#0866ff] group-hover:bg-[#0866ff] group-hover:text-white">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>

                <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-[#0866ff] via-[#00c6ff] to-transparent transition-all duration-700 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Research footer */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-[#8b98a9]">
            <FlaskConical size={15} />

            <span>
              Publications, applied research and experimental systems.
            </span>
          </div>

          <Link
            href="/research"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            View all research

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* statement */}
        <div className="mt-24 rounded-[2rem] bg-[#07101f] p-8 text-white sm:p-10 lg:mt-32 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                <BookOpen
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#38bdf8]"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-2xl font-medium leading-[1.35] tracking-[-0.03em] text-zinc-300 sm:text-3xl">
                Research is not separate from engineering.
                <span className="text-white">
                  {" "}
                  It expands what we can build.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}