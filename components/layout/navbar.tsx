"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/layout/wordmark";
import { LocalTime } from "@/components/motion/local-time";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
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
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const auditHref = hasEmbeddedContactForm(pathname) ? "#form" : "/contact#form";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 240 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y <= 240) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-primary-foreground transition-transform duration-700 ease-out-expo",
          hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="site-container pt-3 md:pt-4">
          <div
            className={cn(
              "relative flex h-14 items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-500 md:h-16 md:pl-6",
              scrolled && !isOpen ? "glass-dark shadow-[0_16px_40px_-24px_rgb(0_0_0/0.6)]" : "bg-transparent"
            )}
          >
            <Link href="/" aria-label="Hometown Marketing Agency home" className="relative z-10 text-[1.55rem] md:text-[1.7rem]">
              <Wordmark />
            </Link>

            <nav aria-label="Main navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {links.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative rounded-full px-4 py-2 text-[0.95rem] transition-colors duration-300",
                      active ? "text-primary-foreground" : "text-primary-foreground/65 hover:text-primary-foreground"
                    )}
                  >
                    <span className="roll" data-text={link.label}>
                      <span>{link.label}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-300",
                        active ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="relative z-10 flex items-center gap-4">
              <span className="mono-label hidden items-center gap-2 text-primary-foreground/55 xl:inline-flex">
                <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#3ddc84]" />
                KC <LocalTime />
              </span>
              <Button href={auditHref} variant="light" className="hidden h-11 text-sm md:inline-flex" dataAnalytics="nav-audit">
                Free audit
              </Button>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="group inline-flex h-11 items-center gap-3 rounded-full bg-primary-foreground pl-5 pr-4 text-sm font-medium text-ink lg:hidden"
                onClick={() => setIsOpen((current) => !current)}
              >
                {isOpen ? "Close" : "Menu"}
                <span aria-hidden="true" className="relative block h-2.5 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-500 ease-out-expo",
                      isOpen && "translate-y-[4.5px] rotate-45"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-500 ease-out-expo",
                      isOpen && "-translate-y-[4.5px] -rotate-45"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink text-primary-foreground transition-[clip-path] duration-700 ease-in-out-quart lg:hidden",
          isOpen ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        )}
      >
        <div className="site-container flex flex-1 flex-col justify-between pb-8 pt-28">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...links].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={isOpen ? 0 : -1}
                aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                className="group flex items-baseline justify-between border-b border-primary-foreground/10 py-3"
              >
                <span className="line-mask">
                  <span
                    className={cn(
                      "block text-[2.6rem] font-semibold leading-none tracking-[-0.05em] transition-transform duration-700 ease-out-expo sm:text-6xl",
                      isOpen ? "translate-y-0" : "translate-y-full"
                    )}
                    style={{ transitionDelay: isOpen ? `${150 + index * 50}ms` : "0ms" }}
                  >
                    {link.label}
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-10 grid gap-6">
            <Button href={auditHref} variant="primary" className="h-14 w-full justify-between text-base">
              Get a free marketing audit
            </Button>
            <div className="flex flex-wrap justify-between gap-4 text-sm text-primary-foreground/60">
              <a
                href={`tel:${site.contactPhone}`}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => pushDataLayerEvent(analyticsEvents.phoneClick)}
              >
                {site.contactPhone}
              </a>
              <a
                href={`mailto:${site.contactEmail}`}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => pushDataLayerEvent(analyticsEvents.emailClick)}
              >
                {site.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
