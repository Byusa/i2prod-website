import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[80vh] items-center bg-[#030712] pt-20 text-white">
        <Container>
          <p className="font-mono text-sm text-[#38bdf8]">404</p>

          <h1 className="mt-6 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
            Page not found.
          </h1>

          <p className="mt-6 max-w-lg leading-7 text-zinc-500">
            The page you&apos;re looking for does not exist or may have moved.
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-medium"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back home
          </Link>
        </Container>
      </main>

      <Footer />
    </>
  );
}