"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/site-icons";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasEmbeddedContactForm(pathname: string) {
  const staticPaths = new Set([
    "/",
    "/about",
    "/blog",
    "/contact",
    "/deck-contractor-website-design-kansas-city",
    "/locations",
    "/ministry-website-design-project-salvation",
    "/services",
    "/website-builder-vs-custom-website-for-small-businesses",
    "/what-should-a-contractor-website-include",
    "/work"
  ]);

  return (
    staticPaths.has(pathname) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/locations/") ||
    pathname.startsWith("/industries/")
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const auditHref = hasEmbeddedContactForm(pathname) ? "#form" : "/contact#form";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("site-container transition-all duration-300", scrolled ? "pt-4 pb-4" : "pt-7 pb-6")}>
        <div className="relative flex min-h-[4.5rem] items-center justify-between">
          <div
            className={cn(
              "hidden transition-all duration-150 md:block",
              scrolled ? "pointer-events-none -translate-x-3 opacity-0" : "translate-x-0 opacity-100"
            )}
          >
            <Link href="/" aria-label="Hometown home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/HometownLogoWhite2026-sm.png"
                alt="Hometown Marketing Agency"
                width={260}
                height={70}
                className="h-10 w-auto md:h-14"
              />
            </Link>
          </div>

          <nav
            aria-label="Main navigation"
            className={cn(
              "mx-auto hidden items-center gap-2 rounded-full border px-2 py-2 transition-[background-color,border-color,box-shadow,transform] duration-500 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:backdrop-blur-xl",
              scrolled
                ? "border-primary-foreground/10 bg-foreground/90 shadow-[0_12px_30px_hsl(var(--foreground)/0.35)]"
                : "border-primary-foreground/[0.08] bg-foreground/30"
            )}
          >
            {links.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-6 py-3 text-base font-medium transition-colors duration-300",
                    active
                      ? "bg-accent text-primary-foreground shadow-[0_2px_12px_hsl(var(--accent)/0.4)]"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div
            className={cn(
              "hidden transition-all duration-150 md:block",
              scrolled ? "pointer-events-none translate-x-3 opacity-0" : "translate-x-0 opacity-100"
            )}
          >
            <Button href={auditHref} className="h-12 px-7 text-base">
              Get a Free Audit
            </Button>
          </div>

          <div className="flex w-full items-center justify-between md:hidden">
            <Link
              href="/"
              aria-label="Hometown home"
              className={cn(
                "transition-all duration-300 ease-out",
                scrolled ? "pointer-events-none -translate-x-2 opacity-0" : "translate-x-0 opacity-100"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/HometownLogoWhite2026-sm.png"
                alt="Hometown Marketing Agency"
                width={210}
                height={56}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/10 bg-foreground/90 text-primary-foreground shadow-[0_12px_30px_hsl(var(--foreground)/0.35)]"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div
            id="mobile-nav"
            className="mt-4 rounded-[1.5rem] border border-primary-foreground/5 bg-foreground p-4 text-primary-foreground md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition",
                      active ? "bg-primary/10 text-primary" : "text-primary-foreground/50 hover:bg-primary/5 hover:text-primary-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button href={auditHref} className="mt-4 w-full">
              Get a Free Marketing Audit
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
