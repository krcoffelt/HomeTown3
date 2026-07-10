import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { blogPostingSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const pagePath = "/ministry-website-design-project-salvation";

const priorities = [
  {
    title: "A clear first impression",
    body: "Visitors need to understand the movement, the mission, and the next action within seconds."
  },
  {
    title: "Event-focused conversion paths",
    body: "For a touring ministry, the website has to make it easy to find a city, save a spot, and share the event."
  },
  {
    title: "Trust for churches and partners",
    body: "Pastors, donors, volunteers, and attendees all need enough context to feel confident taking the next step."
  },
  {
    title: "A flexible content structure",
    body: "The site needs to support new tour cities, updated media, giving campaigns, FAQs, and follow-up resources."
  }
];

const buildHighlights = [
  "Cinematic hero section with strong ministry positioning",
  "Tour-city structure built around quick registration decisions",
  "Donation and partner pathways for supporters",
  "FAQ content that answers pastor, church, and attendee questions",
  "Photo-forward proof section showing the movement in action",
  "Mobile-first layouts for social traffic and event promotion"
];

const seoLessons = [
  "Use the language your audience searches for, such as ministry website design, evangelist website design, church event website, and Christian event registration website.",
  "Build pages around real use cases instead of generic organization copy: events, giving, booking, volunteer interest, and follow-up.",
  "Show proof quickly. Photos, city names, partner language, and a clear mission help searchers and visitors understand credibility.",
  "Keep the primary call to action visible. For Project Salvation, that action is saving a spot for a tour city."
];

export const metadata = createPageMetadata(
  "Ministry Website Design for Project Salvation",
  "A Project Salvation website case study and guide for ministries, evangelists, churches, and Christian events that need stronger websites.",
  pagePath
);

export default function MinistryWebsiteDesignProjectSalvationPage() {
  const schema = [
    webPageSchema({
      name: "Ministry Website Design for Project Salvation",
      description:
        "A Project Salvation website case study and guide for ministries, evangelists, churches, and Christian events that need stronger websites.",
      path: pagePath
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Ministry Website Design for Project Salvation", path: pagePath }
    ]),
    blogPostingSchema({
      headline: "Ministry Website Design for Project Salvation",
      description:
        "A Project Salvation website case study and guide for ministries, evangelists, churches, and Christian events that need stronger websites.",
      path: pagePath,
      datePublished: "2026-06-08",
      dateModified: "2026-06-08",
      image: "/images/work/project-salvation.jpg"
    })
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-black pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="section-badge">Ministry Website Design</p>
              <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                Ministry website design for Project Salvation
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/72">
                Project Salvation needed more than a good-looking website. The site had to support a multi-city evangelistic movement,
                help people find tour dates, and give churches, donors, volunteers, and attendees a clear next step.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/case-studies/project-salvation" className="h-14 px-8">
                  View Case Study
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
                <Link
                  href="https://www.projectsalvation.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-white/12 px-8 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:border-accent"
                >
                  Visit Live Site
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_28px_100px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/work/project-salvation.jpg"
                alt="Project Salvation website homepage preview"
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
            A ministry website has to move people from inspiration to action.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              For a standard service business, the main conversion might be a quote request. For Project Salvation, the site needed to
              support several different actions at once: event registration, giving, church partnership, city discovery, and mission clarity.
            </p>
            <p>
              That makes ministry website design different from a simple brochure site. The design has to carry emotion, but the structure
              still has to be practical. Visitors should not have to dig to understand what the ministry does, where the next gathering is,
              or how to get involved.
            </p>
          </div>
        </article>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {priorities.map((priority) => (
            <article key={priority.title} className="light-panel p-7 md:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{priority.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{priority.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="noise bg-gradient-dark text-primary-foreground">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What We Built</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              A conversion-focused website for an evangelistic tour.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/68">
              The site balances bold ministry visuals with practical navigation. The goal is simple: help people understand the movement
              and take the next right step without friction.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {buildHighlights.map((item) => (
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">SEO Angle</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              This page should rank for ministry and evangelist website searches, not Kansas City local terms.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Project Salvation is not a Kansas City local client, so the SEO angle should not pretend it is. The better opportunity is
                topical authority: showing that Hometown can build websites for ministries, evangelists, churches, Christian events, and
                mission-driven organizations.
              </p>
              <p>
                That creates useful search relevance for terms like ministry website design, evangelist website design, Christian event
                website, church event registration website, and nonprofit ministry website design.
              </p>
            </div>
          </article>
          <aside className="light-panel p-7 md:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">Keyword Targets</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "ministry website design",
                "evangelist website design",
                "Christian event website",
                "church event registration website",
                "nonprofit ministry website design"
              ].map((keyword) => (
                <span key={keyword} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-muted-foreground">
                  {keyword}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Takeaways</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            What other ministries can learn from the Project Salvation build.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {seoLessons.map((lesson) => (
              <div key={lesson} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{lesson}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title="Need a website for a ministry, event, or mission-driven organization?"
        accentText="mission-driven organization?"
        body="Hometown builds clear, conversion-focused websites for organizations that need people to understand the mission and take action."
        links={[{ href: "/services/website-design", label: "Website Design Service" }]}
      />
    </div>
  );
}
