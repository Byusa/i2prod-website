import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#02050b] pt-20">
      {/* =========================================================
          HERO BACKGROUND IMAGE
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/HeroImage.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Darker top gradient for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050b]/80 via-transparent to-[#02050b]" />

        {/* Dark center behind headline */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,5,11,0.25)_0%,rgba(2,5,11,0.6)_55%,rgba(2,5,11,0.9)_100%)]" />
      </div>

      {/* =========================================================
          BLUE / CYAN ATMOSPHERE
      ========================================================== */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#0866ff]/10 blur-[160px]" />

      <div className="pointer-events-none absolute right-[-250px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#00c6ff]/10 blur-[180px]" />

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}
      <Container className="relative z-10">
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center pb-28 text-center">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#00c6ff]" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-300">
              Software · AI · Engineering
            </span>

            <span className="h-px w-8 bg-[#00c6ff]" />
          </div>

          {/* Heading */}
          <h1 className="max-w-6xl text-[clamp(3.8rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
            We build
            <br />

            <span className="bg-gradient-to-r from-[#1688ff] via-[#00a6ff] to-[#00d4ff] bg-clip-text text-transparent">
              intelligent software.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            We design and engineer AI systems, web platforms, mobile
            applications and cloud infrastructure built for production.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-[#1688ff]/40 bg-gradient-to-r from-[#0866ff] to-[#008cff] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_40px_rgba(8,102,255,0.3)] transition-all duration-300 hover:scale-[1.03] hover:border-[#00c6ff]/60 hover:shadow-[0_0_60px_rgba(8,102,255,0.5)]"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#projects"
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-7 py-3.5 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              Explore our work

              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Container>

      {/* =========================================================
          BOTTOM CAPABILITIES
      ========================================================== */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.08] bg-[#02050b]/50 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center justify-between gap-6 overflow-hidden text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
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