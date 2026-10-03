import Image from "next/image";
import { ContactForm } from "@/components/sections/contact-form";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";
import { analyticsEvents } from "@/lib/analytics/events";

interface ContactCtaLink {
  href: string;
  label: string;
}

interface ContactCtaProps {
  title?: string;
  accentText?: string;
  body?: string;
  links?: ContactCtaLink[];
}

export function ContactCta({
  title = "Find out what is actually driving your growth.",
  accentText = "actually driving your growth.",
  body = "Schedule a free marketing audit. We'll review the available data, find the biggest opportunity, and give you a clear next step for your website, SEO, or paid ads.",
  links = [{ href: "/services", label: "Explore Our Services" }]
}: ContactCtaProps) {
  const titleParts = accentText ? title.split(accentText) : [title];

  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-primary-foreground md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[60vw] w-[60vw] glow [--glow-alpha:0.40]"
      />
      <div className="site-container relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-6">
          <p className="eyebrow">Free marketing audit · No pressure</p>
          <Reveal>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,5.4vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
              {titleParts[0]}
              {accentText && titleParts.length > 1 ? (
                <>
                  <span className="serif-accent text-[1.06em] text-[hsl(229_100%_75%)]">{accentText}</span>
                  {titleParts.slice(1).join(accentText)}
                </>
              ) : null}
            </h2>
          </Reveal>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/65">{body}</p>

          <div className="mt-12 flex items-center gap-4 border-t border-primary-foreground/12 pt-8">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src={site.founder.image}
                alt={`${site.founder.name}, founder of Hometown`}
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div className="text-sm leading-relaxed">
              <p className="font-medium text-primary-foreground">You&apos;ll talk directly to {site.founder.name.split(" ")[0]}.</p>
              <p className="text-primary-foreground/55">
                No sales team, no hand-offs · {site.contactDisplay.responseTime.toLowerCase()}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-primary-foreground/80">
            <TrackedAnchor href={`tel:${site.contactPhone}`} eventName={analyticsEvents.phoneClick} className="link-underline">
              {site.contactPhone}
            </TrackedAnchor>
            <TrackedAnchor href={`mailto:${site.contactEmail}`} eventName={analyticsEvents.emailClick} className="link-underline">
              {site.contactEmail}
            </TrackedAnchor>
          </div>

          {links.length ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {links.map((link) => (
                <Button key={`${link.href}-${link.label}`} href={link.href} variant="outline-light" className="h-11 text-sm">
                  {link.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        <div id="form" className="scroll-mt-28 lg:col-span-6">
          <ContactForm dark />
        </div>
      </div>
    </section>
  );
}
