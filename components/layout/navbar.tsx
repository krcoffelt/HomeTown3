"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition duration-300",
          isScrolled
            ? "border-white/12 bg-[#05070b]/75 backdrop-blur-xl"
            : "bg-[#05070b]/96 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex w-full max-w-shell items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" aria-label="Hometown home" className="inline-flex items-center">
          <Image
            src="/images/HometownLogoWhite2026.png"
            alt="Hometown"
            width={333}
            height={72}
            sizes="(min-width: 768px) 333px, 278px"
            priority
            className="h-[3.75rem] w-auto md:h-[4.5rem]"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
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
        <Button href="/contact#form" className="hidden bg-accent text-white md:inline-flex">
          Get Started
        </Button>
        </div>
      </header>
      <Link
        href="/contact#form"
        className="fixed bottom-5 right-5 z-50 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/15 md:inline-flex"
      >
        Let&apos;s Talk
      </Link>
    </>
  );
}
