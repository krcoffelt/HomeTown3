"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-white/8 bg-[#000103]/96 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-shell items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" aria-label="Hometown home" className="inline-flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HometownLogoWhite2026-sm.png"
              alt="Hometown"
              width={180}
              height={72}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-[3.75rem] w-[9.375rem] md:h-[4.5rem] md:w-[11.25rem]"
            />
          </Link>
          <nav className="hidden items-center gap-10 md:flex lg:gap-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.03] text-white transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
          <Button href="/contact#form" className="hidden bg-accent text-white md:inline-flex">
            Get Started
          </Button>
        </div>
        {isOpen ? (
          <div className="border-t border-white/10 md:hidden">
            <div id="mobile-nav" className="mx-auto flex w-full max-w-shell flex-col gap-2 px-5 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base font-medium text-white transition hover:bg-white/[0.08]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact#form"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-[0.98rem] font-medium tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d67e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
