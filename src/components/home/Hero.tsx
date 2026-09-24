import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-indigo-400" />

            <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
              Software · AI · Engineering
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">
            We build
            <br />
            <span className="text-zinc-500">intelligent software.</span>
          </h1>

          <div className="mt-10 flex max-w-5xl flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-xl text-lg leading-8 text-zinc-400 md:text-xl">
              AI systems, mobile applications, web platforms and cloud
              infrastructure engineered for real-world use.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                Explore our work
                <ArrowDown size={15} />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06]">
        <Container>
          <div className="flex h-20 items-center justify-between gap-6 overflow-hidden text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            <span>AI Engineering</span>
            <span className="hidden sm:block">Web</span>
            <span>Mobile</span>
            <span className="hidden sm:block">Cloud</span>
            <span>Automation</span>
          </div>
        </Container>
      </div>
    </section>
  );
}