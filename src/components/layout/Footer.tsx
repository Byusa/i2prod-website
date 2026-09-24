import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#010409] text-white">
      <Container>
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="I2Prod home">
              <Image
                src="/I2ProdLogo.png"
                alt="I2Prod"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-zinc-500">
              Canadian software and AI engineering company building intelligent
              applications, digital products and scalable platforms.
            </p>

            <a
              href="mailto:contact@i2prod.ca"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              contact@i2prod.ca
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
              Capabilities
            </p>

            <div className="mt-6 space-y-4 text-sm text-zinc-500">
              <p>AI Engineering</p>
              <p>Software Engineering</p>
              <p>Web & Platforms</p>
              <p>Mobile Applications</p>
              <p>Cloud Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.07] py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} I2Prod Inc. All rights reserved.</p>

          <p>Software · AI · Products</p>
        </div>
      </Container>
    </footer>
  );
}