import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Braces,
  Cloud,
  Layers3,
  Smartphone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering, software development, web platforms, mobile applications and cloud infrastructure from I2Prod.",
};

const services = [
  {
    number: "01",
    title: "AI Engineering",
    description:
      "We engineer intelligent systems that integrate AI directly into real products and business workflows.",
    icon: Bot,
    capabilities: [
      "LLM applications",
      "AI agents",
      "Retrieval-Augmented Generation",
      "Intelligent automation",
      "Applied machine learning",
      "Model integration",
    ],
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Production-grade software architecture and engineering for systems that need to remain reliable as they evolve.",
    icon: Braces,
    capabilities: [
      "Backend systems",
      "REST & service APIs",
      "System architecture",
      "Distributed systems",
      "Third-party integrations",
      "Internal platforms",
    ],
  },
  {
    number: "03",
    title: "Web & Platforms",
    description:
      "Modern digital products designed around the needs of users, operators and growing businesses.",
    icon: Layers3,
    capabilities: [
      "SaaS products",
      "Marketplaces",
      "Business platforms",
      "Web applications",
      "Customer portals",
      "Product engineering",
    ],
  },
  {
    number: "04",
    title: "Mobile Applications",
    description:
      "Connected mobile products across iOS and Android, engineered as part of the wider product ecosystem.",
    icon: Smartphone,
    capabilities: [
      "iOS",
      "Android",
      "Cross-platform development",
      "Mobile APIs",
      "Authentication",
      "App deployment",
    ],
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Infrastructure designed to move software reliably from development into production and scale.",
    icon: Cloud,
    capabilities: [
      "Cloud architecture",
      "Containers",
      "CI/CD",
      "Deployment",
      "Observability",
      "Production infrastructure",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#030712] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[#0866ff]/[0.08] blur-[140px]" />

          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#00c6ff]" />

                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    Services
                  </span>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  We engineer the systems
                  <span className="text-zinc-600"> behind ambitious ideas.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  From AI systems and production software to mobile products
                  and cloud infrastructure, I2Prod works across the complete
                  technology stack.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="border-t border-white/[0.07]">
          <Container>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group grid gap-10 border-b border-white/[0.07] py-16 lg:grid-cols-12 lg:gap-8 lg:py-24"
                >
                  <div className="lg:col-span-1">
                    <span className="font-mono text-xs text-zinc-600">
                      {service.number}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 group-hover:border-[#0866ff]/40 group-hover:bg-[#0866ff]/10">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#38bdf8]"
                      />
                    </div>

                    <h2 className="mt-7 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                      {service.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                      Capabilities
                    </p>

                    <div className="space-y-3">
                      {service.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-center gap-3 text-sm text-zinc-400"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#1688ff]" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </Container>
        </section>

        {/* CTA */}
        <section className="py-28 sm:py-32 lg:py-40">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#1688ff]/20 bg-[#07101f] px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
              <div className="pointer-events-none absolute right-[-10%] top-[-80%] h-[500px] w-[500px] rounded-full bg-[#0866ff]/20 blur-[120px]" />

              <div className="relative grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#38bdf8]">
                    Have a project?
                  </p>

                  <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    Let&apos;s build something that works in the real world.
                  </h2>
                </div>

                <div className="flex items-end lg:col-span-4 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-[#07101f] transition-transform duration-300 hover:scale-[1.03]"
                  >
                    Start a project

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
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