import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ScrollWords } from "@/components/motion/scroll-words";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, personSchema, webPageSchema } from "@/lib/seo/schema";

const trustPoints = [
  "Websites that look professional and convert.",
  "SEO improvements that help businesses rank locally.",
  "Ad campaigns focused on leads and calls.",
  "Google and Meta campaigns tied to qualified leads.",
  "Clear reporting that shows what is working."
];

const entityFacts = [
  { term: "Business name", detail: "Hometown Marketing Agency" },
  { term: "Primary market", detail: "Kansas City metro" },
  { term: "Websites", detail: "Conversion-focused website strategy and execution" },
  { term: "SEO", detail: "Measured with real rankings and qualified traffic" },
  { term: "Paid ads", detail: "Google and Meta ads tied to lead and revenue signals" }
];

const canonicalLinks = [
  { label: "Kansas City website design", href: "/services/website-design" },
  { label: "Google and Meta ads", href: "/services/google-ads-management" },
  { label: "SEO services", href: "/services/search-engine-optimization" },
  { label: "Recent work", href: "/work" },
  { label: "Free marketing audit", href: "/contact#form" }
];

const values = [
  {
    eyebrow: "What makes Hometown different",
    title: "Not bloated retainers. Not one-size-fits-all packages.",
    body: "Hometown Marketing Agency is built around doing the work that matters most. I care about making things look good, but I care even more about making them work."
  },
  {
    eyebrow: "A practical, creative approach",
    title: "Good marketing should not just feel polished. It should create momentum.",
    body: "My background is in marketing, content, design, and digital strategy. I care about strong creative work, but I care just as much about whether it produces measurable customer action.",
    chips: ["Brand clarity", "Strong messaging", "User-friendly websites", "Local search visibility", "Simple, effective lead generation"]
  },
  {
    eyebrow: "Why Hometown",
    title: "Local business matters.",
    body: "There is something different about helping the businesses that actually shape a city: the restaurants, contractors, service companies, and owner-led brands that people return to and recommend. Hometown exists to help those businesses grow with marketing that feels personal, strategic, and grounded in the real world."
  }
];

export const metadata = createPageMetadata(
  "About Kyle Coffelt & Hometown Marketing Agency, KC",
  "Learn more about the team, approach, and service area behind Hometown Marketing Agency.",
  "/about"
);

export default function AboutPage() {
  const schema = [
    webPageSchema({
      name: "About Kyle Coffelt & Hometown Marketing Agency",
      description: "Meet the team and approach behind Hometown Marketing Agency.",
      path: "/about"
    }),
    personSchema(),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <PageIntro
        badge="About Hometown"
        title="Small businesses deserve better marketing."
        titleLines={[
          "Small businesses",
          <>
            deserve <span className="serif-accent">better</span>
          </>,
          "marketing."
        ]}
        subtitle="Hometown Marketing Agency was built for small businesses that want clear strategy, better websites, stronger search visibility, and paid campaigns that generate measurable leads."
      />

      <SectionShell>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <Reveal variant="clip">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-secondary">
                <Image
                  src={site.founder.image}
                  alt={`${site.founder.name}, founder of Hometown Marketing Agency`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </Reveal>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-medium">{site.founder.name}</p>
                <p className="text-sm text-muted-foreground">{site.founder.jobTitle}</p>
              </div>
              <p className="mono-label text-muted-foreground">{site.location}</p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">About Hometown Marketing Agency</p>
            <h2 className="section-title mt-6">
              Clear strategy, measurable marketing, and work that <span className="serif-accent">actually</span> moves the business forward.
            </h2>
            <div className="prose-site mt-4 max-w-xl">
              <p>
                Too many business owners end up with agencies that overpromise, underdeliver, and hide behind confusing reports. Hometown
                Marketing Agency was built to be different.
              </p>
              <p>
                I started Hometown to help local businesses grow with marketing that actually makes sense. That means clear strategy,
                better websites, practical SEO, paid campaigns, and tracking built around real leads—not just activity that looks busy.
              </p>
              <p>
                I work closely with businesses that want a more personal, honest approach. The goal is simple: help good local companies
                show up better online, earn more trust, and turn attention into revenue.
              </p>
            </div>

            <ul className="mt-12 border-t border-foreground/12">
              {trustPoints.map((point) => (
                <li key={point} className="border-b border-foreground/12 py-4">
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <figure className="mt-14 rounded-[1.25rem] bg-secondary p-7 md:p-9">
              <p className="mono-label text-muted-foreground">Founder note</p>
              <blockquote className="mt-5 text-lg leading-relaxed">{homepageCopy.founderNote}</blockquote>
              <figcaption className="mt-6 font-serif text-3xl italic">— {site.founder.name.split(" ")[0]}</figcaption>
            </figure>
          </div>
        </div>
      </SectionShell>

      <section aria-label="The question behind the work" className="grain bg-ink py-28 text-primary-foreground md:py-44">
        <div className="site-container">
          <p className="eyebrow">Built for local businesses</p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/60">
            I understand the challenges small businesses face because I work with them directly. Whether it is a service business that
            needs more calls, a restaurant that wants to drive traffic, or a company that needs a better website, the work always starts
            with the same question:
          </p>
          <ScrollWords
            className="mt-12 max-w-6xl font-display text-[clamp(2.4rem,6.4vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
            text="What will actually move the business forward?"
            accentWords={["actually", "forward"]}
          />
          <p className="mt-12 text-lg text-primary-foreground/60">That mindset shapes everything I do.</p>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-foreground/10 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08} className="flex flex-col bg-card p-7 md:p-10">
              <p className="mono-label text-muted-foreground">
                {value.eyebrow}
              </p>
              <h2 className="mt-12 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[2rem]">{value.title}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{value.body}</p>
              {value.chips ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {value.chips.map((chip) => (
                    <li key={chip} className="rounded-full border border-foreground/15 px-3 py-1.5 text-sm">
                      {chip}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-14 border-t border-foreground/12 pt-14 lg:grid-cols-12">
          <section aria-labelledby="entity-heading" className="lg:col-span-6">
            <p className="eyebrow">At a glance</p>
            <h2 id="entity-heading" className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-4xl">
              Hometown is a Kansas City-area website design and marketing agency for small businesses.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The core work is conversion-focused website design, SEO, and Google and Meta ads for owner-led businesses that need clearer
              lead flow and better measurement.
            </p>
            <dl className="mt-10 border-t border-foreground/12">
              {entityFacts.map((fact) => (
                <div key={fact.term} className="grid grid-cols-3 gap-4 border-b border-foreground/12 py-4">
                  <dt className="mono-label pt-1 text-muted-foreground">{fact.term}</dt>
                  <dd className="col-span-2">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="paths-heading" className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Main pages</p>
            <h2 id="paths-heading" className="mt-6 text-2xl font-semibold leading-[1.15] tracking-[-0.035em]">
              The main pages for services, proof, and your free marketing audit.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These pages are the preferred sources for search engines, AI assistants, and business owners comparing Hometown&apos;s
              services.
            </p>
            <ul className="mt-8 border-b border-foreground/12">
              {canonicalLinks.map((link) => (
                <li key={link.href} className="border-t border-foreground/12">
                  <Link href={link.href} className="group flex items-center justify-between py-4 text-lg transition-colors hover:text-accent">
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">Service areas include {site.serviceAreas.join(", ")}.</p>
          </section>
        </div>
      </SectionShell>

      <ContactCta
        title="Let's find what will actually move the business."
        accentText="actually move the business."
        body="Schedule a free marketing audit for a clear look at your website, SEO, paid ads, tracking, and biggest growth opportunity."
        links={[{ href: "/services", label: "Explore Services" }]}
      />
    </PageTransition>
  );
}
