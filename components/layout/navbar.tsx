import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-40 border-white/8 bg-[#05070b]/58 backdrop-blur-md">
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
