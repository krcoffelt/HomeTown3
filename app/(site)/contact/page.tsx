import Link from "next/link";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { FounderNote } from "@/components/sections/founder-note";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { analyticsEvents } from "@/lib/analytics/events";

const infoCards = [
  { label: site.contactDisplay.emailLabel, value: site.contactEmail, href: `mailto:${site.contactEmail}`, icon: MailIcon },
  { label: site.contactDisplay.phoneLabel, value: site.contactPhone, href: `tel:${site.contactPhone}`, icon: PhoneIcon },
  { label: "Location", value: site.location, icon: MapPinIcon },
  { label: "Response Time", value: site.contactDisplay.responseTime, icon: MailIcon }
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
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Free Marketing Audit"
            title="Find the clearest path to more qualified leads"
            subtitle="We’ll review the available evidence across your website, SEO, ads, and tracking—then explain what is working, what is leaking opportunities, and what to do next."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <FounderNote />
            <div className="grid gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="light-panel p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{card.label}</p>
                        <p className="mt-2 text-sm font-medium text-foreground">{card.value}</p>
                      </div>
                    </div>
                  </div>
                );

                if (!card.href) return <div key={card.label}>{content}</div>;

                const trackingEvent =
                  card.label === site.contactDisplay.emailLabel
                    ? analyticsEvents.emailClick
                    : card.label === site.contactDisplay.phoneLabel
                      ? analyticsEvents.phoneClick
                      : null;

                return (
                  <TrackedAnchor key={card.label} href={card.href} eventName={trackingEvent ?? undefined}>
                    {content}
                  </TrackedAnchor>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <Link href="/about" className="light-panel block p-7 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About Hometown</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Learn more about who you&apos;ll be working with and how Hometown approaches websites and marketing.
              </p>
            </Link>
            <Link href="/locations" className="light-panel block p-7 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Service Areas</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Explore local pages for Kansas City, Johnson County, Jackson County, and nearby metro businesses.
              </p>
            </Link>
            <Link href="#form" className="dark-panel block p-7 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Start Your Audit</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">
                Share the basics below. We&apos;ll review them before the consultation so the conversation starts with useful context.
              </p>
            </Link>
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title="Schedule your free marketing audit."
        accentText="free marketing audit."
        body="Tell us what your business sells, how leads arrive today, and what you are unsure is working. We’ll follow up to schedule the consultation."
        links={[
          { href: "/services", label: "View Services" },
          { href: "/locations", label: "Service Areas" }
        ]}
      />
    </PageTransition>
  );
}
