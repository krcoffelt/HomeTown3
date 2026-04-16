"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isOfferPage = pathname === "/website-offer-800";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (isOfferPage) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="site-container flex min-h-[74px] items-center justify-between gap-3 py-3 sm:min-h-[78px] sm:gap-4 sm:py-4">
          <Link href="/" aria-label="Hometown home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HometownLogoWhite2026-sm.png"
              srcSet="/images/HometownLogoWhite2026-sm.png 360w, /images/HometownLogoWhite2026.png 2000w"
              sizes="(max-width: 640px) 140px, 220px"
              alt="Hometown Marketing Agency"
              width={220}
              height={60}
              className="h-7 w-auto sm:h-9 md:h-10"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.contactPhone}`}
              data-analytics="phone_click"
              className="hidden text-sm font-medium text-primary-foreground/75 transition hover:text-primary-foreground md:inline-flex"
              onClick={() => pushDataLayerEvent(analyticsEvents.phoneClick)}
            >
              {site.contactPhone}
            </a>
            <Link
              href="#examples"
              className="hidden text-sm font-medium text-primary-foreground/75 transition hover:text-primary-foreground md:inline-flex"
            >
              View Examples
            </Link>
            <Button href="#claim-form" className="h-10 px-4 text-xs sm:h-11 sm:px-5 sm:text-sm md:px-6" dataAnalytics="cta-offer-800">
              <span className="sm:hidden">Get Started</span>
              <span className="hidden sm:inline">Get My $800 Website</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }

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
                srcSet="/images/HometownLogoWhite2026-sm.png 360w, /images/HometownLogoWhite2026.png 2000w"
                sizes="220px"
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
              "mx-auto hidden items-center gap-2 rounded-full border px-2 py-2 backdrop-blur-xl md:absolute md:left-1/2 md:flex md:-translate-x-1/2",
              scrolled
                ? "border-primary-foreground/10 bg-foreground/90 shadow-[0_12px_30px_hsl(var(--foreground)/0.35)]"
                : "border-primary-foreground/[0.08] bg-foreground/30"
            )}
          >
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-6 py-3 text-base font-medium transition",
                    active ? "text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground/80"
                  )}
                >
                  {active ? <span className="absolute inset-0 rounded-full bg-accent shadow-[0_2px_12px_hsl(var(--accent)/0.4)]" /> : null}
                  <span className="relative z-10">{link.label}</span>
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
            <Button href="/contact#form" className="h-12 px-7 text-base">
              Get a Free Quote
            </Button>
          </div>

          <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/" aria-label="Hometown home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/HometownLogoWhite2026-sm.png"
                srcSet="/images/HometownLogoWhite2026-sm.png 360w, /images/HometownLogoWhite2026.png 2000w"
                sizes="140px"
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
            className="mt-4 rounded-[1.5rem] border border-primary-foreground/5 bg-foreground/98 p-4 text-primary-foreground backdrop-blur-xl md:hidden"
          >
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
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
              <Button href="/contact#form" className="mt-4 w-full">
                Get a Free Quote
              </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
