import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, TargetIcon, TrendingUpIcon, ZapIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "google-ads-management": TargetIcon,
  "social-media-management": ZapIcon,
  "graphic-design": ZapIcon,
  "search-engine-optimization": TrendingUpIcon,
  "analytics-and-tracking": CheckCircleIcon,
  "brand-identity": CheckCircleIcon
};

const websiteService = services.find((service) => service.slug === "website-design");
const growthServices = services.filter((service) =>
  ["google-ads-management", "search-engine-optimization", "social-media-management"].includes(service.slug)
);
const supportServices = services.filter((service) =>
  ["graphic-design", "brand-identity", "analytics-and-tracking"].includes(service.slug)
);

export function PricingPreview() {
  return (
    <SectionShell className="noise bg-gradient-subtle">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="section-badge">Pricing</span>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.04] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Start with the website.
            <br />
            Add what helps you grow.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Most businesses need the same thing first: a stronger online presence. After that, we layer in the channels
            and creative support that actually move the business forward.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <section className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-elevated)]">
            <div className="border-b border-border bg-foreground px-7 py-7 text-primary-foreground md:px-10 md:py-9">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground sm:text-xs">
                    Best Place to Start
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">Custom Website Package</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/65 md:text-base">
                    A stronger first impression, cleaner messaging, and a site built to make it easier for people to trust you and reach out.
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground/45">Starts at</p>
                  <div className="mt-2 flex items-end gap-3 md:justify-end">
                    <span className="font-display text-5xl font-bold leading-none text-primary-foreground md:text-6xl">$800</span>
                    <span className="pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/45">one-time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 px-7 py-7 md:px-10 md:py-9">
              <div className="grid gap-4 sm:grid-cols-2">
                {(websiteService?.deliverables ?? []).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ideal for businesses that need to look more established fast without getting dragged into a bloated agency project.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/website-offer-800" className="h-12 px-7">
                  See the $800 Offer
                </Button>
                <Button href="/contact#form" variant="secondary" className="h-12 px-7">
                  Talk Through Pricing
                </Button>
              </div>
            </div>
          </section>

          <div className="grid gap-8">
            <section className="rounded-[2rem] border border-border bg-card px-7 py-7 shadow-[var(--shadow-card)] md:px-8 md:py-8">
              <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">Growth Channels</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">What helps you get found and generate leads</h3>
                </div>
                <Button href="/services" variant="ghost" className="hidden px-0 text-sm sm:inline-flex">
                  All services
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-6 grid gap-5">
                {growthServices.map((service) => {
                  const Icon = iconMap[service.slug] ?? GlobeIcon;
                  return (
                    <div key={service.slug} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h4 className="text-base font-bold text-foreground">{service.title}</h4>
                          <p className="text-sm font-bold text-foreground">{service.price}</p>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[2rem] border border-border bg-card px-7 py-7 shadow-[var(--shadow-card)] md:px-8 md:py-8">
              <div className="border-b border-border pb-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">Brand and Support</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">The pieces that make the whole brand feel sharper</h3>
              </div>

              <div className="mt-6 grid gap-5">
                {supportServices.map((service) => {
                  const Icon = iconMap[service.slug] ?? CheckCircleIcon;
                  return (
                    <div key={service.slug} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h4 className="text-base font-bold text-foreground">{service.title}</h4>
                          <p className="text-sm font-bold text-foreground">{service.price}</p>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
