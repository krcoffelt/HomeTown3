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
  title = "Ready to stop losing customers to competitors with better websites?",
  accentText = "better websites?",
  body = "Tell us about your business. We'll put together a free, no-pressure game plan to get you more customers.",
  links = [{ href: "/about", label: "Meet Hometown" }]
}: ContactCtaProps) {
  const titleParts = accentText ? title.split(accentText) : [title];

  return (
    <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] md:block" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
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
