import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section className="bg-[#f5f7fb] py-28 text-[#07101f] sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#0866ff]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#65758b]">
                About I2Prod
              </span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              A Canadian software and AI engineering company building
              <span className="text-[#9aa7ba]">
                {" "}
                technology for the real world.
              </span>
            </h2>

            <div className="mt-12 grid gap-10 border-t border-black/[0.08] pt-10 md:grid-cols-2">
              <p className="max-w-lg text-base leading-8 text-[#65758b]">
                I2Prod works across software engineering, artificial
                intelligence, web, mobile and cloud infrastructure to turn
                ideas into complete digital products.
              </p>

              <p className="max-w-lg text-base leading-8 text-[#65758b]">
                We combine engineering with applied research and product
                thinking, from early architecture through deployment and
                continued evolution.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-12 inline-flex items-center gap-3 text-sm font-semibold"
            >
              More about I2Prod

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}