import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils/cn";

interface PricingSectionProps {
  className?: string;
  showIntro?: boolean;
}

const websiteService = services.find((service) => service.slug === "website-design");
const additionalServices = services.filter((service) => service.slug !== "website-design");

const includedItems = [
  "Custom design and core page structure",
  "Mobile-ready build",
  "Basic SEO setup",
  "Lead capture and contact flow",
  "Launch support and revisions"
];

export function PricingSection({ className, showIntro = true }: PricingSectionProps) {
  return (
    <SectionShell className={cn("noise bg-gradient-subtle", className)}>
      <div className="mx-auto max-w-6xl">
        {showIntro ? (
          <div className="max-w-2xl">
            <span className="section-badge">Pricing</span>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl">
              One clear starting point.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Start with a stronger website. Add ads, SEO, social, or design only when it makes sense.
            </p>
          </div>
        ) : null}

        <div className={cn("overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elevated)]", showIntro ? "mt-12" : "")}>
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.75fr)]">
            <section className="bg-foreground px-7 py-8 text-primary-foreground md:px-10 md:py-10 lg:px-12 lg:py-12">
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/10 bg-primary-foreground/[0.06] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary-foreground/72">
                    <ClockIcon className="h-3.5 w-3.5 text-accent" />
                    Most businesses start here
                  </div>

                  <div className="mt-7 max-w-xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/45">Custom Website</p>
                    <h3 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl">
                      {site.heroPrice}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-primary-foreground/72">
                      A clean, credible small business website with the essentials already handled.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="grid gap-3 border-y border-primary-foreground/10 py-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xl font-bold text-primary-foreground">{site.turnaround}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/42">Typical timeline</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary-foreground">2 rounds</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/42">Revisions</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-primary-foreground">No contract</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/42">Simple scope</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href="/website-offer-800" className="h-12 px-7">
                      See the offer
                      <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      href="/contact#form"
                      variant="secondary"
                      className="h-12 border-primary-foreground/18 px-7 text-primary-foreground hover:border-primary-foreground/50 hover:text-primary-foreground"
                    >
                      Ask a question
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <aside className="px-7 py-8 md:px-10 md:py-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Included</p>
                <div className="mt-5 grid gap-3">
                  {(websiteService?.deliverables ?? includedItems).slice(0, 5).map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Add when ready</p>
                <div className="mt-4 divide-y divide-border">
                  {additionalServices.map((service) => (
                    <div
                      key={service.slug}
                      className="group flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
                    >
                      <p className="text-sm font-bold text-foreground transition group-hover:text-accent">{service.title}</p>
                      <p className="text-sm font-semibold text-muted-foreground sm:text-right">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
