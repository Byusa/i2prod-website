"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white lg:hidden"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-20 border-b border-white/[0.08] bg-[#030712]/95 backdrop-blur-xl lg:hidden">
          <div className="px-5 py-6 sm:px-8">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/[0.06] py-4 text-base text-zinc-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0866ff] to-[#008cff] px-5 py-3 text-sm font-medium text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}