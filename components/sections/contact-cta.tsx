import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";

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
    <SectionShell className="page-section-cta relative overflow-hidden border-y-2 border-foreground bg-gradient-dark text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-24 hidden h-40 w-40 rounded-full border-[24px] border-accent/70 md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/3 hidden h-48 w-48 rotate-12 border-[22px] border-accent/55 md:block" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.22em] text-primary-foreground/60">Free · Practical · No-pressure</p>
        <h2 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-primary-foreground md:text-5xl lg:text-6xl">
          {titleParts[0]}
          {accentText && titleParts.length > 1 ? (
            <>
              <span className="gradient-text">{accentText}</span>
              {titleParts.slice(1).join(accentText)}
            </>
          ) : null}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/70">
          {body}
        </p>
        {links.length ? (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Button key={`${link.href}-${link.label}`} href={link.href} variant="secondary" className="border-primary-foreground/16 text-primary-foreground hover:text-primary-foreground">
                {link.label}
              </Button>
            ))}
          </div>
        ) : null}
        <div id="form" className="mt-12 text-left">
          <ContactForm dark />
        </div>
      </div>
    </SectionShell>
  );
}
