import {
  Boxes,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  ContainerIcon,
  Database,
  Server,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const technologies = [
  {
    category: "Artificial Intelligence",
    icon: BrainCircuit,
    items: ["LLMs", "RAG", "AI Agents", "Machine Learning", "SHAP"],
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "C#", "JavaScript"],
  },
  {
    category: "Applications",
    icon: Braces,
    items: ["Next.js", "React", ".NET", "FastAPI", "React Native"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    items: ["Azure", "AWS", "Google Cloud", "Vercel"],
  },
  {
    category: "Infrastructure",
    icon: ContainerIcon,
    items: ["Docker", "Kubernetes", "CI/CD", "Observability"],
  },
  {
    category: "Data & Systems",
    icon: Database,
    items: ["Firebase", "SQL", "APIs", "Distributed Systems"],
  },
];

export function Technology() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-28 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 bg-[#0866ff]/[0.05] blur-[100px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00c6ff]" />

              <span className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                Technology
              </span>
            </div>

            <h2 className="mt-8 max-w-xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Modern tools.
              <br />
              <span className="text-zinc-600">Serious engineering.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">
              We select technology based on the problem, not the trend — and
              engineer systems that remain maintainable as they grow.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid border-l border-t border-white/[0.07] sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.category}
                    className="group min-h-[240px] border-b border-r border-white/[0.07] p-7 transition-colors duration-500 hover:bg-white/[0.025] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                          className="text-zinc-500 transition-colors duration-300 group-hover:text-[#38bdf8]"
                        />
                      </div>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#0866ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <h3 className="mt-8 text-lg font-medium tracking-[-0.02em] text-white">
                      {technology.category}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {technology.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs leading-5 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-zinc-600">
              <Server size={14} />
              <span>
                Architecture and technology selected for each product&apos;s
                requirements.
              </span>
            </div>
          </div>
        </div>

        {/* engineering statement */}
        <div className="mt-28 border-t border-white/[0.07] pt-12 lg:mt-36">
          <div className="flex items-start gap-5">
            <Boxes
              size={20}
              strokeWidth={1.4}
              className="mt-1 shrink-0 text-[#38bdf8]"
            />

            <p className="max-w-4xl text-2xl font-medium leading-[1.4] tracking-[-0.025em] text-zinc-300 sm:text-3xl">
              From the model to the API, from the interface to the cloud,
              <span className="text-white">
                {" "}
                we engineer the complete system.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}