import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";
import { FounderNote } from "@/components/sections/founder-note";
import { PageTransition } from "@/components/ui/page-transition";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/data/site";

const infoCards = [
  { label: "Email", value: site.contactEmail, href: `mailto:${site.contactEmail}`, icon: MailIcon },
  { label: "Phone/Text", value: site.contactPhone, href: `tel:${site.contactPhone}`, icon: PhoneIcon },
  { label: "Location", value: site.location, icon: MapPinIcon },
  { label: "Response Time", value: "Usually within a few hours", icon: MailIcon }
];

export const metadata = createPageMetadata(
  "Let's talk about your business",
  "No pressure, no pitch deck, no 47-slide presentation. Just a real conversation about how we can help.",
  "/contact"
);

export default function ContactPage() {
  return (
    <PageTransition>
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

                return (
                  <a key={card.label} href={card.href}>
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
