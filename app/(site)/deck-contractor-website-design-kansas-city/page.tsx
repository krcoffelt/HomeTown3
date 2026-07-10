import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { blogPostingSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { site } from "@/data/site";

const pagePath = "/deck-contractor-website-design-kansas-city";
const pageTitle = "Deck Contractor Website Design Kansas City | DecksRXKC";
const pageDescription =
  "A breakdown of the DecksRXKC website and what deck builders, contractors, and home-service businesses should include to earn more quote requests.";
const previewImage = "/images/work/decksrxkc-website-preview.webp";

const trustSignals = [
  {
    title: "Real project photography",
    body: "Decks, screened-in spaces, stairs, railings, and covered structures are visual decisions. Homeowners need to see the work before they ask for a quote."
  },
  {
    title: "Clear service categories",
    body: "A deck contractor website should quickly separate custom decks, screened-in decks, covered decks, and outdoor living upgrades so visitors can find their project type."
  },
  {
    title: "Local Kansas City context",
    body: "The page language should make it obvious who the contractor serves and why the offer fits Kansas City metro homeowners."
  },
  {
    title: "Quote-focused calls to action",
    body: "The next step should be direct. A free quote button in the hero and navigation helps homeowners move from interest to conversation."
  }
];

const deckWebsiteChecklist = [
  "Service sections for custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces",
  "Project gallery or work section with strong photos",
  "Material and option language for composite decking, pressure-treated wood, railing, lighting, and screen systems",
  "Kansas City service-area copy that stays natural",
  "FAQs that answer homeowner objections before the form",
  "Phone and form paths that make requesting a quote easy from mobile"
];

const seoLessons = [
  "Use homeowner search language like deck contractor Kansas City, screened-in decks Kansas City, covered decks Kansas City, and deck builder website design.",
  "Connect project photos to services so Google and visitors understand what each photo proves.",
  "Keep location language specific without stuffing city names into every sentence.",
  "Link contractor content back to website design, home services website design Kansas City, and related case studies."
];

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description: pageDescription,
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: `${site.url}${pagePath}`
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "article",
    url: `${site.url}${pagePath}`,
    siteName: site.brand.shortName,
    images: [
      {
        url: `${site.url}${previewImage}`,
        alt: "DecksRXKC website homepage preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${site.url}${previewImage}`]
  }
};

export default function DeckContractorWebsiteDesignKansasCityPage() {
  const schema = [
    webPageSchema({
      name: "Deck Contractor Website Design for DecksRXKC",
      description: pageDescription,
      path: pagePath
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Deck Contractor Website Design for DecksRXKC", path: pagePath }
    ]),
    blogPostingSchema({
      headline: "Deck Contractor Website Design for DecksRXKC",
      description: pageDescription,
      path: pagePath,
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      image: previewImage
    })
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-black pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="section-badge">Contractor Website Design</p>
              <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                Deck contractor website design for DecksRXKC
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/72">
                Deck builders need a site that makes project quality obvious, explains the services clearly, and moves homeowners toward a
                quote request. DecksRXKC is a useful example because the website is built around local trust, outdoor living visuals, and
                clear next steps.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services/website-design" className="h-14 px-8">
                  View Website Design Service
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Link
                  href="https://decksrxkc.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-white/12 px-8 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:border-accent"
                >
                  Visit DecksRXKC
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_28px_100px_rgba(0,0,0,0.4)]">
              <Image
                src={previewImage}
                alt="DecksRXKC website homepage preview"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 52vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <article className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">The Strategy</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            A deck contractor website has to sell trust before the quote.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              For deck builders and outdoor living contractors, the website has to do more than list services. Homeowners are comparing
              craftsmanship, budget fit, material options, and whether the contractor looks trustworthy enough to invite to their home.
            </p>
            <p>
              That is why contractor website design needs strong project photos, simple service language, local context, and a direct quote
              path. DecksRXKC presents custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces in a way
              that makes the service offering easy to understand.
            </p>
          </div>
        </article>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {trustSignals.map((signal) => (
            <article key={signal.title} className="light-panel p-7 md:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{signal.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{signal.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="noise bg-gradient-dark text-primary-foreground">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What Stands Out</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              What the DecksRXKC website gets right.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/68">
              The strongest parts are practical: Kansas City positioning, clear deck service categories, a visible free quote path, and
              project visuals that show homeowners the kind of work they can expect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Custom deck, screened-in deck, and covered deck messaging",
              "Prominent free quote calls to action",
              "Outdoor living photos that support trust",
              "Kansas City deck contractor language",
              "Navigation built around homeowner intent",
              "Mobile-friendly paths to services and contact"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-primary-foreground/78">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <article>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Website Checklist</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              What every deck builder website should include.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                The best deck builder websites make it easy for a homeowner to answer three questions: Do they build what I need? Can I
                trust the quality? How do I request a quote?
              </p>
              <p>
                A page should not force people to hunt for basic information. Put the services, examples, service-area cues, and quote path
                where a mobile visitor can reach them quickly.
              </p>
            </div>
          </article>
          <aside className="light-panel p-7 md:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">Deck Contractor Website Essentials</h3>
            <div className="mt-6 space-y-4">
              {deckWebsiteChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">SEO Lessons</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            SEO lessons for deck builders and contractors.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {seoLessons.map((lesson) => (
              <div key={lesson} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{lesson}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Contractor website checklist", href: "/what-should-a-contractor-website-include" },
              { label: "Contractor website design Kansas City", href: "/industries/construction-website-design-kansas-city" },
              { label: "Home services website design Kansas City", href: "/industries/home-services-website-design-kansas-city" },
              { label: "View website work", href: "/work" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title="Need a contractor website built around quote requests?"
        accentText="quote requests?"
        body="Hometown builds website pages that help contractors show proof, explain services, and give homeowners a clear path to start a project conversation."
        links={[{ href: "/industries/construction-website-design-kansas-city", label: "See Contractor Website Strategy" }]}
      />
    </div>
  );
}
