import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to I2Prod about software engineering, artificial intelligence, web platforms, mobile applications and digital products.",
};

const projectTypes = [
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Systems",
  },
  {
    icon: Code2,
    title: "Software & Platforms",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Products",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        <section className="relative overflow-hidden pb-28 pt-40 sm:pb-36 sm:pt-48 lg:pb-44 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[900px] w-[1000px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.09] blur-[160px]" />

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#00c6ff]" />

                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    Contact
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  Let&apos;s build something
                  <span className="text-zinc-600"> worth shipping.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  Tell us what you&apos;re building, what problem you&apos;re
                  solving, or where your existing technology needs to go next.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Main contact */}
        <section className="border-t border-white/[0.07] py-24 sm:py-28 lg:py-36">
          <Container>
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
              {/* Contact info */}
              <div className="lg:col-span-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Start a conversation
                </p>

                <h2 className="mt-7 max-w-md text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-4xl">
                  Tell us where you want to go.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
                  Whether you&apos;re starting with an idea, an existing
                  product or a difficult engineering problem, the first step is
                  understanding what needs to be built.
                </p>

                <div className="mt-12 space-y-4">
                  <a
                    href="mailto:jabo.byusa@gmail.com"
                    className="group flex max-w-md items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:border-[#0866ff]/30 hover:bg-[#0866ff]/[0.05]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]">
                        <Mail size={17} className="text-[#38bdf8]" />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                          Email
                        </p>

                        <p className="mt-1 text-sm text-zinc-200">
                          jabo.byusa@gmail.com
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#38bdf8]"
                    />
                  </a>

                  <div className="flex max-w-md items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]">
                      <MapPin size={17} className="text-[#38bdf8]" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                        Based in
                      </p>

                      <p className="mt-1 text-sm text-zinc-200">
                        Canada
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact panel */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#07101f] p-8 sm:p-10 lg:p-14">
                  <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[#0866ff]/10 blur-[100px]" />

                  <div className="relative">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                      What can we build?
                    </p>

                    <div className="mt-10 space-y-3">
                      {projectTypes.map((type) => {
                        const Icon = type.icon;

                        return (
                          <div
                            key={type.title}
                            className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]">
                              <Icon
                                size={17}
                                strokeWidth={1.5}
                                className="text-[#38bdf8]"
                              />
                            </div>

                            <span className="text-sm text-zinc-300">
                              {type.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-10 border-t border-white/[0.08] pt-8">
                      <p className="max-w-lg text-sm leading-7 text-zinc-500">
                        Include a short description of your project, current
                        stage, key requirements and any timeline you already
                        have in mind.
                      </p>

                      <a
                        href="mailto:jabo.byusa@gmail.com?subject=Project%20Inquiry%20—%20I2Prod"
                        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0866ff] to-[#008cff] px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(8,102,255,0.15)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(8,102,255,0.25)]"
                      >
                        Start a project

                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Scope */}
        <section className="bg-[#f5f7fb] py-24 text-[#07101f] sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#65758b]">
                  Not sure where to start?
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-3xl font-medium leading-[1.3] tracking-[-0.035em] sm:text-4xl">
                  Start with the problem.
                  <span className="text-[#9aa7ba]">
                    {" "}
                    We&apos;ll work backward from there.
                  </span>
                </p>

                <Link
                  href="/services"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
                >
                  Explore our capabilities

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