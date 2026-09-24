import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0866ff]/[0.12] blur-[150px]" />

      <Container className="relative">
        <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07101f] px-7 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#38bdf8]">
                Start a project
              </p>

              <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Build what&apos;s
                <span className="text-zinc-600"> next.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
                Have a product, platform or engineering problem that needs to
                move from idea to production?
              </p>
            </div>

            <div className="flex items-end lg:col-span-4 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0866ff] to-[#008cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(8,102,255,0.2)] transition-all duration-300 hover:scale-[1.03]"
              >
                Start a conversation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}