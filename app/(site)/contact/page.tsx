import Link from "next/link";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";
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
  "Let's talk about your business",
  "No pressure, no pitch deck, no 47-slide presentation. Just a real conversation about how we can help.",
  "/contact"
);

export default function ContactPage() {
  const schema = [
    webPageSchema({
      name: "Contact",
      description: "Talk through your business, website, or marketing goals with Hometown.",
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
            badge="Contact Us"
            title="Let's talk about your business"
            subtitle="No pressure, no pitch deck, no 47-slide presentation. Just a real conversation about how we can help."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <FounderNote />
            <Link href="/about" className="light-panel block p-5 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About Hometown</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Learn more about who you&apos;ll be working with and how Hometown approaches websites and marketing.
              </p>
            </Link>
            <Link href="/locations" className="light-panel block p-5 transition hover:-translate-y-0.5 hover:shadow-elevated">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Service Areas</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Explore the new local pages for Overland Park, Olathe, Leawood, Lenexa, and Shawnee.
              </p>
            </Link>
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
        </div>
      </SectionShell>
    </PageTransition>
  );
}
