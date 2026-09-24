import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Braces,
  Cloud,
  Layers3,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "AI Engineering",
    description:
      "Production AI systems built around real business workflows — from intelligent agents and RAG to applied machine learning and automation.",
    capabilities: ["AI Agents", "RAG", "LLMs", "Applied ML"],
    icon: Bot,
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Reliable software engineered for production, from backend services and APIs to distributed systems and complex business applications.",
    capabilities: ["APIs", "Backend", "Architecture", "Integrations"],
    icon: Braces,
  },
  {
    number: "03",
    title: "Web & Platforms",
    description:
      "High-performance digital products including SaaS applications, marketplaces, internal platforms and customer-facing web experiences.",
    capabilities: ["SaaS", "Marketplaces", "Web Apps", "Platforms"],
    icon: Layers3,
  },
  {
    number: "04",
    title: "Mobile",
    description:
      "Modern mobile experiences engineered for iOS and Android with product-quality interfaces, scalable architecture and connected services.",
    capabilities: ["iOS", "Android", "Cross-platform", "APIs"],
    icon: Smartphone,
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Cloud architecture and production infrastructure designed to keep software secure, observable, deployable and ready to scale.",
    capabilities: ["Cloud", "Containers", "CI/CD", "Observability"],
    icon: Cloud,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030712] py-28 sm:py-32 lg:py-40"
    >
      {/* restrained atmosphere */}
      <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#0866ff]/[0.06] blur-[110px]" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="grid gap-10 border-b border-white/[0.08] pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00c6ff]" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                What we build
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Engineering digital products
              <span className="text-zinc-600"> from idea to production.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              I2Prod combines software engineering, artificial intelligence and
              product development to build systems designed for real-world use.
            </p>
          </div>
        </div>

        {/* Services */}
        <div>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative grid gap-8 border-b border-white/[0.08] py-10 transition-colors duration-500 hover:bg-white/[0.015] sm:py-12 lg:grid-cols-12 lg:gap-8 lg:px-4"
              >
                {/* number */}
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-[#00c6ff]">
                    {service.number}
                  </span>
                </div>

                {/* icon + title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#0866ff]/30 group-hover:bg-[#0866ff]/[0.08]">
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="text-zinc-400 transition-colors duration-300 group-hover:text-[#39b8ff]"
                      />
                    </div>

                    <h3 className="text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* description */}
                <div className="lg:col-span-4">
                  <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* capabilities */}
                <div className="flex flex-wrap content-start gap-2 lg:col-span-3 lg:justify-end">
                  {service.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-500 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-zinc-300"
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                {/* hover line */}
                <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-gradient-to-r from-[#0866ff] via-[#00a6ff] to-transparent transition-all duration-700 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Services footer */}
        <div className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-zinc-500">
            Need something outside these categories? We work across the full
            software product lifecycle.
          </p>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            Explore our capabilities

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}