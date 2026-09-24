import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We define the problem, users, constraints and business objectives before deciding what should be built.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate requirements into product flows, technical architecture, interfaces and an executable engineering plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We engineer the product across application, AI, data, API and infrastructure layers with production in mind.",
  },
  {
    number: "04",
    title: "Ship & evolve",
    description:
      "We deploy, observe and improve the system using real-world feedback, product data and changing requirements.",
  },
];

export function Process() {
  return (
    <section className="bg-[#030712] py-28 text-white sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00c6ff]" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                How we work
              </span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              From an unclear problem
              <span className="text-zinc-600"> to production software.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400">
              Our process connects product thinking with engineering so that
              decisions made early still make sense when the system reaches
              production.
            </p>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-28">
          <div className="absolute left-0 right-0 top-[25px] hidden h-px bg-white/[0.08] lg:block" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <article key={step.number} className="relative">
                <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/[0.1] bg-[#030712] font-mono text-xs text-[#38bdf8]">
                  {step.number}
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-[-0.035em]">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}