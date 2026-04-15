"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
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
        <div className="site-container flex min-h-[78px] items-center justify-between gap-4 py-4">
          <Link href="/" aria-label="Hometown home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HometownLogo2026_white.png"
              alt="Hometown Marketing Agency"
              width={220}
              height={60}
              className="h-9 w-auto md:h-10"
            />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.contactPhone}`}
              className="hidden text-sm font-medium text-primary-foreground/75 transition hover:text-primary-foreground md:inline-flex"
            >
              {site.contactPhone}
            </a>
            <Link
              href="#examples"
              className="hidden text-sm font-medium text-primary-foreground/75 transition hover:text-primary-foreground md:inline-flex"
            >
              View Examples
            </Link>
            <Button href="#claim-form" className="h-11 px-5 md:px-6" dataAnalytics="cta-offer-800">
              Get My $800 Website
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("site-container transition-all duration-300", scrolled ? "pt-3 pb-3" : "pt-6 pb-5")}>
        <div className="relative flex min-h-16 items-center justify-between">
          <motion.div
            animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -12 : 0, pointerEvents: scrolled ? "none" : "auto" }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Link href="/" aria-label="Hometown home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/HometownLogo2026_white.png"
                alt="Hometown Marketing Agency"
                width={260}
                height={70}
                className="h-10 w-auto md:h-14"
              />
            </Link>
          </motion.div>

          <nav
            aria-label="Main navigation"
            className={cn(
              "mx-auto hidden items-center gap-1.5 rounded-full border px-1.5 py-1.5 backdrop-blur-xl md:absolute md:left-1/2 md:flex md:-translate-x-1/2",
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
                    "relative rounded-full px-5 py-2 text-sm font-medium transition",
                    active ? "text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground/80"
                  )}
                >
                  {active ? (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent shadow-[0_2px_12px_hsl(var(--accent)/0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <motion.div
            animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? 12 : 0, pointerEvents: scrolled ? "none" : "auto" }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Button href="/contact#form" className="h-10 px-6">
              Get a Free Quote
            </Button>
          </motion.div>

          <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/" aria-label="Hometown home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/HometownLogo2026_white.png"
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

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
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
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
