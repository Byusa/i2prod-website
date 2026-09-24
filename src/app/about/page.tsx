import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
  Scale,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "I2Prod is a Canadian software and AI engineering company building intelligent applications, digital products and scalable platforms.",
};

const principles = [
  {
    number: "01",
    title: "Engineering first",
    description:
      "Technology decisions should solve the underlying problem, not follow the latest trend.",
    icon: Code2,
  },
  {
    number: "02",
    title: "AI with purpose",
    description:
      "We use artificial intelligence where it creates meaningful capability, automation or intelligence inside a product.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Built for production",
    description:
      "A prototype proves an idea. Production engineering turns that idea into something people can actually depend on.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Think in systems",
    description:
      "Products are more than interfaces. We consider data, infrastructure, APIs, operations and the complete system around them.",
    icon: Layers3,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-28 pt-40 sm:pb-36 sm:pt-48 lg:pb-44 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[900px] w-[1000px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.08] blur-[160px]" />

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#00c6ff]" />

                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    About I2Prod
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  We build intelligent
                  <span className="text-zinc-600"> software.</span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
                  I2Prod is a Canadian software and AI engineering company
                  building digital products, intelligent systems and scalable
                  platforms.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Company statement */}
        <section className="border-y border-white/[0.07] py-24 sm:py-28 lg:py-36">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-600">
                  The company
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-3xl font-medium leading-[1.35] tracking-[-0.035em] text-zinc-400 sm:text-4xl lg:text-5xl">
                  We work at the intersection of
                  <span className="text-white">
                    {" "}
                    software engineering, artificial intelligence and product
                    development
                  </span>
                  — turning ideas into systems designed for real-world use.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* What we do */}
        <section className="bg-[#f5f7fb] py-28 text-[#07101f] sm:py-32 lg:py-40">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#0866ff]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#65758b]">
                    How we think
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                  Technology should create
                  <span className="text-[#9aa7ba]"> capability.</span>
                </h2>
              </div>
            </div>

            <div className="mt-20 grid border-l border-t border-black/[0.08] md:grid-cols-2 lg:mt-24">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className="group min-h-[320px] border-b border-r border-black/[0.08] p-8 transition-colors duration-500 hover:bg-white sm:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.08] bg-white">
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="text-[#0866ff]"
                        />
                      </div>

                      <span className="font-mono text-xs text-[#a2adbb]">
                        {principle.number}
                      </span>
                    </div>

                    <h3 className="mt-14 text-2xl font-medium tracking-[-0.035em]">
                      {principle.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-[#65758b]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Leadership */}
        <section className="py-28 sm:py-32 lg:py-40">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Leadership
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Led by engineering.
                </h2>
              </div>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:mt-24">
              {/* Portrait placeholder */}
              <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07101f] lg:col-span-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(8,102,255,0.18),transparent_45%)]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#1688ff]/20 bg-[#0866ff]/10">
                    <span className="text-3xl font-medium tracking-[-0.05em] text-[#38bdf8]">
                      SB
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    I2Prod / Canada
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 lg:col-span-7 lg:p-14">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                    Founder
                  </p>

                  <h3 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                    Serge Byusa
                  </h3>

                  <p className="mt-3 text-sm text-zinc-500">
                    Founder · Software & AI Engineer
                  </p>

                  <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400">
                    Software and AI engineer working across intelligent systems,
                    production software, cloud infrastructure and digital
                    product development, with research spanning large language
                    models, operations research and applied AI.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  {[
                    "AI Engineering",
                    "Software Architecture",
                    "Cloud",
                    "Product Engineering",
                    "Research",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Vision */}
        <section className="border-t border-white/[0.07] py-28 sm:py-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <Lightbulb
                  size={23}
                  strokeWidth={1.4}
                  className="text-[#38bdf8]"
                />
              </div>

              <div className="lg:col-span-8">
                <p className="text-3xl font-medium leading-[1.3] tracking-[-0.035em] text-zinc-400 sm:text-4xl">
                  Our goal is not simply to ship more software.
                  <span className="text-white">
                    {" "}
                    It is to build technology that expands what people and
                    organizations can do.
                  </span>
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-28 sm:pb-32 lg:pb-40">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#1688ff]/20 bg-[#07101f] p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute right-[-10%] top-[-100%] h-[550px] w-[550px] rounded-full bg-[#0866ff]/20 blur-[130px]" />

              <div className="relative grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <Scale size={16} className="text-[#38bdf8]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Work with us
                    </span>
                  </div>

                  <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    Have something ambitious to build?
                  </h2>
                </div>

                <div className="flex items-end lg:col-span-4 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07101f] transition-transform hover:scale-[1.03]"
                  >
                    Start a conversation

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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