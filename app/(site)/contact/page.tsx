import Image from "next/image";
import Link from "next/link";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { SplitLines } from "@/components/motion/split-lines";
import { LocalTime } from "@/components/motion/local-time";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";
import { createPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { analyticsEvents } from "@/lib/analytics/events";

const nextSteps = [
  {
    title: "We review the evidence",
    body: "Before we talk, we look at your website, search visibility, ads, and tracking so the call starts with useful context."
  },
  {
    title: "A focused conversation",
    body: "We walk through what is working, what is leaking leads, and which channel should come first. No pitch deck."
  },
  {
    title: "A clear next step",
    body: "You leave with a prioritized plan—whether that's a focused fix, a rebuild, SEO, or paid campaigns."
  }
];

export const metadata = createPageMetadata(
  "Free Small Business Marketing Audit",
  "Schedule a free marketing audit to see what is working, what is costing leads, and where websites, SEO, or paid ads can create the most growth.",
  "/contact"
);

export default function ContactPage() {
  const schema = [
    webPageSchema({
      name: "Free Small Business Marketing Audit",
      description: "Request a free audit of your website, SEO, paid ads, conversion tracking, and lead flow.",
      path: "/contact"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-36 text-primary-foreground md:pb-28 md:pt-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[20%] -top-[30%] h-[70vw] w-[70vw] glow [--glow-alpha:0.32]"
        />
        <div className="site-container relative grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="hero-rise eyebrow">Free marketing audit</p>
            <SplitLines
              as="h1"
              trigger="load"
              lines={[
                "Find the clearest",
                <>
                  path to <span className="serif-accent">more</span>
                </>,
                "qualified leads."
              ]}
              className="mt-8 font-display text-[clamp(2.8rem,6.4vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
            />
            <p className="hero-rise hero-rise-delay-2 mt-8 max-w-lg text-lg leading-relaxed text-primary-foreground/65">
              We&apos;ll review the available evidence across your website, SEO, ads, and tracking—then explain what is working, what is
              leaking opportunities, and what to do next.
            </p>

            <dl className="hero-rise hero-rise-delay-3 mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] bg-primary-foreground/10">
              <div className="bg-ink p-5">
                <dt className="mono-label text-primary-foreground/45">{site.contactDisplay.emailLabel}</dt>
                <dd className="mt-3 break-all">
                  <TrackedAnchor href={`mailto:${site.contactEmail}`} eventName={analyticsEvents.emailClick} className="link-underline">
                    {site.contactEmail}
                  </TrackedAnchor>
                </dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="mono-label text-primary-foreground/45">{site.contactDisplay.phoneLabel}</dt>
                <dd className="mt-3">
                  <TrackedAnchor href={`tel:${site.contactPhone}`} eventName={analyticsEvents.phoneClick} className="link-underline">
                    {site.contactPhone}
                  </TrackedAnchor>
                </dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="mono-label text-primary-foreground/45">Location</dt>
                <dd className="mt-3">{site.location}</dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="mono-label text-primary-foreground/45">Response time</dt>
                <dd className="mt-3">
                  {site.contactDisplay.responseTime}
                  <span className="mt-1 block text-sm text-primary-foreground/45">
                    It&apos;s <LocalTime /> in KC
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div id="form" className="hero-rise hero-rise-delay-2 scroll-mt-28 lg:col-span-6">
            <ContactForm dark />
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">What happens next</p>
          <h2 className="section-title md:col-span-8">
            A conversation that starts with <span className="serif-accent">your data</span>, not a sales script.
          </h2>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-foreground/10 md:mt-20 md:grid-cols-3">
          {nextSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.08} className="flex min-h-[18rem] flex-col bg-card p-7 md:p-9">
              <h3 className="mt-auto text-2xl font-semibold tracking-[-0.035em]">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-12 border-t border-foreground/12 pt-14 lg:grid-cols-12">
          <div className="flex gap-6 lg:col-span-6">
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-[1rem] bg-secondary">
              <Image
                src={site.founder.image}
                alt={`${site.founder.name}, founder of Hometown Marketing Agency`}
                fill
                sizes="96px"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <div>
              <p className="mono-label text-muted-foreground">Founder note</p>
              <p className="mt-4 text-lg leading-relaxed">{homepageCopy.founderNote}</p>
            </div>
          </div>
          <ul className="border-b border-foreground/12 lg:col-span-5 lg:col-start-8">
            {[
              {
                href: "/about",
                label: "About Hometown",
                body: "Learn more about who you'll be working with and how Hometown approaches websites and marketing."
              },
              {
                href: "/locations",
                label: "Service areas",
                body: "Local pages for Kansas City, Johnson County, Jackson County, and nearby metro businesses."
              },
              { href: "/work", label: "Recent work", body: "Case studies and live websites for Kansas City small businesses." }
            ].map((link) => (
              <li key={link.href} className="border-t border-foreground/12">
                <Link href={link.href} className="group flex items-start justify-between gap-6 py-5">
                  <span>
                    <span className="block text-xl font-medium tracking-[-0.02em] transition-colors group-hover:text-accent">{link.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{link.body}</span>
                  </span>
                  <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
