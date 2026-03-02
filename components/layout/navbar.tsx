import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base backdrop-blur-md">
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
  );
}
