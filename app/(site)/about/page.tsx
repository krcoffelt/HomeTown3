import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { FounderNote } from "@/components/sections/founder-note";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/ui/page-transition";
import { CheckCircleIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const trustPoints = [
  "You work directly with the person shaping the website and the marketing.",
  "The process stays practical, fast, and built around small-business realities.",
  "Every project is designed to help you look more credible and get more leads."
];

export const metadata = createPageMetadata(
  "About Hometown",
  "Learn more about the team, approach, and service area behind Hometown Marketing Agency.",
  "/about"
);

export default function AboutPage() {
  const schema = [
    webPageSchema({
      name: "About Hometown",
      description: "Meet the team and approach behind Hometown Marketing Agency.",
      path: "/about"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="About Hometown"
            title="Small-business marketing without the agency bloat."
            subtitle="Hometown was built for businesses that want clear communication, strong work, and a real person who understands what small businesses actually need."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What We Believe</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">The goal is not more marketing noise. The goal is a clearer path to customers.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Hometown exists because too many small businesses get overcharged for work that looks decent on the surface but does not help them look more established or get more leads.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The work here stays practical: stronger websites, cleaner messaging, better visibility, and direct communication from start to finish.
            </p>
            <div className="mt-8 grid gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <FounderNote />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Service Area</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">Built for Kansas City businesses first.</h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              Hometown is based around the Kansas City metro and works best with businesses that need a more credible online presence, faster lead flow, and a partner who understands the local market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {site.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-primary-foreground/12 bg-primary-foreground/[0.04] px-4 py-2 text-sm text-primary-foreground/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">How We Help</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">The core services most small businesses actually need.</h2>
            <div className="mt-6 grid gap-3">
              {services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-2xl border border-border bg-secondary px-5 py-4 transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <p className="text-sm font-bold text-foreground">{service.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Next Step</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              If you want a stronger website, cleaner positioning, or better lead flow, the easiest next step is to start the conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/services">View Services</Button>
            <Button href="/contact#form" variant="secondary">
              Contact Hometown
            </Button>
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
