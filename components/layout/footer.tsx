"use client";

import Link from "next/link";
import { LocalTime } from "@/components/motion/local-time";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Journal" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Services",
    links: [
      { href: "/services/website-design", label: "Website design" },
      { href: "/services/search-engine-optimization", label: "SEO" },
      { href: "/services/google-ads-management", label: "Google & Meta ads" },
      { href: "/services", label: "All services" }
    ]
  },
  {
    title: "Local",
    links: [
      { href: "/locations", label: "Service areas" },
      { href: "/locations/leawood-ks", label: "Leawood" },
      { href: "/industries/restaurant-website-design-kansas-city", label: "Restaurants" },
      { href: "/industries/construction-website-design-kansas-city", label: "Contractors" }
    ]
  }
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-of-service", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink text-primary-foreground">
      <div className="site-container pt-20 md:pt-28">
        <div className="grid gap-14 border-b border-primary-foreground/10 pb-16 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Hometown Marketing Agency</p>
            <p className="mt-6 max-w-md text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-primary-foreground md:text-[2rem]">
              Built here, for the businesses that make Kansas City feel like{" "}
              <span className="serif-accent">home.</span>
            </p>
            <div className="mt-10 grid gap-2 text-primary-foreground/70">
              <a
                href={`mailto:${site.contactEmail}`}
                data-analytics="email_click"
                className="link-underline w-fit text-lg text-primary-foreground"
                onClick={() => pushDataLayerEvent(analyticsEvents.emailClick)}
              >
                {site.contactEmail}
              </a>
              <a
                href={`tel:${site.contactPhone}`}
                data-analytics="phone_click"
                className="link-underline w-fit text-lg text-primary-foreground"
                onClick={() => pushDataLayerEvent(analyticsEvents.phoneClick)}
              >
                {site.contactPhone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="mono-label text-primary-foreground/45">{column.title}</p>
                <ul className="mt-6 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-[0.98rem] text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                        <ArrowUpRightIcon className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-3">
              <p className="mono-label text-primary-foreground/45">Visit</p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-primary-foreground/70">
                {site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}{" "}
                {site.address.postalCode} · Serving the Kansas City metro · <LocalTime />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-sm text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Hometown Marketing Agency</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary-foreground">
                {link.label}
              </Link>
            ))}
            <a href="#main-content" className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.2em] whitespace-nowrap text-center leading-[0.8] text-primary-foreground" style={{ fontSize: "22vw" }}>
          <span className="font-display font-extrabold tracking-[-0.07em]">HOME</span>
          <span className="font-serif italic tracking-[-0.04em]">town</span>
        </p>
      </div>
    </footer>
  );
}
