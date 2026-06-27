import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { FounderNote } from "@/components/sections/founder-note";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { CheckCircleIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const trustPoints = [
  "Websites that look professional and convert.",
  "SEO improvements that help businesses rank locally.",
  "Ad campaigns focused on leads and calls.",
  "Social media content that fits the brand.",
  "Clear messaging that helps businesses stand out."
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
            title="Small businesses deserve better marketing."
            subtitle="Hometown Marketing Agency was built for local businesses that want honest strategy, strong creative, better websites, and marketing that actually helps generate leads."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About Hometown Marketing Agency</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Clear strategy, strong creative, and work that actually moves the business forward.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Too many business owners end up with agencies that overpromise, underdeliver, and hide behind confusing reports. Hometown Marketing Agency was built to be different.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I started Hometown to help local businesses grow with marketing that actually makes sense. That means clear strategy, strong creative, better websites, practical SEO, and campaigns built to generate real leads, not just make things look busy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I work closely with businesses that want a more personal, honest approach. The goal is simple: help good local companies show up better online, earn more trust, and turn attention into revenue.
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Built for local businesses</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">The work starts with what will actually move the business forward.</h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              I understand the challenges small businesses face because I work with them directly. Whether it is a service business that needs more calls, a restaurant that wants to drive traffic, or a company that needs a better website, the work always starts with the same question:
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-primary-foreground">
              What will actually move the business forward?
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/74">
              That mindset shapes everything I do.
            </p>
          </div>

          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What makes Hometown different</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Not bloated retainers. Not one-size-fits-all packages.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Hometown Marketing Agency is built around doing the work that matters most. I care about making things look good, but I care even more about making them work.
            </p>
            <div className="mt-6 grid gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-secondary px-5 py-4">
                  <p className="text-sm font-semibold text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">A practical, creative approach</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Good marketing should not just feel polished. It should create momentum.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              My background is in marketing, content, design, and digital strategy. I enjoy the creative side of branding and content, but I also care deeply about performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Brand clarity",
                "Strong messaging",
                "User-friendly websites",
                "Local search visibility",
                "Simple, effective lead generation"
              ].map((item) => (
                <span key={item} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Why Hometown</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
              Local business matters.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              There is something different about helping the businesses that actually shape a city: the restaurants, contractors, service companies, and owner-led brands that people return to and recommend.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/74">
              Hometown exists to help those businesses grow with marketing that feels personal, strategic, and grounded in the real world.
            </p>
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title="Let's build something that works."
        accentText="works."
        body="If you are a local business looking for a better website, better marketing, and a partner who cares about results, send the basics here."
        links={[{ href: "/services", label: "View Services" }]}
      />
    </PageTransition>
  );
}
