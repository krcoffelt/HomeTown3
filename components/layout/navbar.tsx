"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#0b0d10] text-primary-foreground shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
        <div className="site-container flex min-h-[70px] items-center justify-between gap-3 py-3 sm:min-h-[78px] sm:gap-4 sm:py-4">
          <Link href="/" aria-label="Hometown home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HometownLogoWhite2026-sm.png"
              alt="Hometown Marketing Agency"
              width={220}
              height={60}
              className="h-7 w-auto sm:h-9"
            />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.contactPhone}`}
              data-analytics="phone_click"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white text-black shadow-[0_12px_30px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
              onClick={() => pushDataLayerEvent(analyticsEvents.phoneClick)}
              aria-label="Call Hometown Marketing Agency"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <Button href="#claim-form" className="hidden h-10 px-5 text-sm sm:inline-flex" dataAnalytics="cta-offer-800">
              Start My Website
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
                alt="Hometown Marketing Agency"
                width={260}
                height={70}
                className="h-10 w-auto md:h-14"
              />
            </Link>
          </div>

          <LayoutGroup id="site-nav">
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
                    className={cn(
                      "relative rounded-full px-6 py-3 text-base font-medium transition-colors duration-300",
                      active ? "text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground/85"
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-full bg-accent shadow-[0_2px_12px_hsl(var(--accent)/0.4)]"
                        transition={{
                          layout: {
                            type: "spring",
                            stiffness: 220,
                            damping: 28,
                            mass: 1.1
                          }
                        }}
                      />
                    ) : null}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

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

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-4 rounded-[1.5rem] border border-primary-foreground/5 bg-foreground p-4 text-primary-foreground md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const active = isActivePath(pathname, link.href);
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
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
