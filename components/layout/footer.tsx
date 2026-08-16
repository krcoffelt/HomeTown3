"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute right-[-6rem] top-[-4rem] hidden h-[400px] w-[400px] rounded-full bg-primary/3 blur-[120px] md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-8rem] bottom-[-8rem] hidden h-[340px] w-[340px] rounded-full bg-accent/10 blur-[110px] md:block" />
      <div className="site-container pt-20 pb-10 md:pt-28">
        <Reveal>
          <p className="max-w-5xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-primary-foreground/14 sm:text-5xl md:text-6xl lg:text-7xl">
            Your next customer is searching right now.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-white/6 pt-14 md:grid-cols-[minmax(0,1.4fr)_0.7fr_0.95fr] md:pt-16">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HometownLogoWhite2026-sm.png"
              alt="Hometown Marketing Agency"
              width={260}
              height={70}
              className="h-9 w-auto md:h-10"
            />
            <p className="mt-8 max-w-md text-sm leading-8 text-primary-foreground/70">
              Websites, SEO, and Google and Meta ads for small businesses—built around real leads, clear reporting, and conversion data you can use.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-foreground/58">Pages</p>
            <ul className="mt-7 space-y-5 text-base text-primary-foreground/70">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary-foreground/58">Contact</p>
            <ul className="mt-7 space-y-5 text-base text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${site.contactEmail}`}
                  data-analytics="email_click"
                  className="transition hover:text-primary-foreground"
                  onClick={() => pushDataLayerEvent(analyticsEvents.emailClick)}
                >
                  {site.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${site.contactPhone}`}
                  data-analytics="phone_click"
                  className="transition hover:text-primary-foreground"
                  onClick={() => pushDataLayerEvent(analyticsEvents.phoneClick)}
                >
                  {site.contactPhone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/14 py-8 text-xs text-primary-foreground/60 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>© {year} Hometown Marketing Agency. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-primary-foreground/60">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
