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

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#030712]/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center"
            aria-label="I2Prod home"
          >
            <Image
              src="/I2ProdLogo.png"
              alt="I2Prod"
              width={150}
              height={50}
              priority
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0866ff] to-[#00c6ff] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#1688ff]/30
              bg-gradient-to-r
              from-[#0866ff]
              to-[#008cff]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-[0_0_30px_rgba(8,102,255,0.18)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-[#00c6ff]/50
              hover:shadow-[0_0_40px_rgba(8,102,255,0.35)]
            "
          >
            <span className="hidden sm:inline">Start a Project</span>
            <span className="sm:hidden">Start</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>

      {/* Subtle blue glow underneath navbar */}
      <div className="pointer-events-none absolute bottom-[-1px] left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0866ff]/40 to-transparent" />
    </header>
  );
}