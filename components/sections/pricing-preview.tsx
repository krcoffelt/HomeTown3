import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/site-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageCopy } from "@/data/copy";
import { services } from "@/data/services";

export function PricingPreview() {
  const additionalServices = services.filter((service) => service.slug !== "website-design");

  return (
    <SectionShell className="noise bg-gradient-subtle">
      <SectionHeading
        badge="Pricing"
        title={"Transparent pricing.\nNo surprise invoices."}
        subtitle="One clean website package to get your business online fast, plus the rest of the marketing support we offer when you need it."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="gradient-border relative overflow-hidden rounded-2xl bg-card p-8 shadow-elevated transition duration-300 hover:-translate-y-1">
          <div aria-hidden="true" className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-48 w-48 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow" />
          <span className="relative z-10 inline-flex rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">
            Most Popular
          </span>
          <h3 className="mt-6 text-2xl font-bold text-foreground">Custom Website</h3>
          <div className="mt-6 flex items-end gap-3">
            <p className="gradient-text text-6xl font-bold tracking-tight">$800</p>
            <p className="pb-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">one-time</p>
          </div>
          <ul className="mt-8 space-y-4">
            {homepageCopy.pricingFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button href="/contact#form" className="mt-8 h-12 w-full rounded-xl bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(var(--primary-glow))_100%)]">
            Get Started
          </Button>
        </div>

        <div className="light-panel p-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Other Services</p>
          <div className="mt-6 space-y-5">
            {additionalServices.map((service) => (
              <div key={service.slug} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-bold text-foreground">{service.title}</p>
                  <p className="text-sm font-bold text-foreground">{service.price}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
