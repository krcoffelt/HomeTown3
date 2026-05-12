import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { cn } from "@/lib/utils/cn";

interface PricingSectionProps {
  className?: string;
  showIntro?: boolean;
}

const pricingItems = [
  {
    label: "Website Design",
    price: "From $800",
    description: "Custom, mobile-ready sites built to turn visitors into leads.",
    details: ["Custom design", "SEO basics", "Lead form"],
    featured: true
  },
  {
    label: "Paid Ads",
    price: "From $300/mo",
    description: "Google campaigns focused on local searches with buyer intent.",
    details: ["Campaign setup", "Keyword cleanup", "Monthly optimization"]
  },
  {
    label: "SEO",
    price: "From $300/mo",
    description: "Local search improvements that help customers find you.",
    details: ["On-page SEO", "Local visibility", "Content direction"]
  },
  {
    label: "Social Media Management",
    price: "From $400/mo",
    description: "Consistent content that keeps your business active online.",
    details: ["Post planning", "Graphics", "Captions"]
  }
];

export function PricingSection({ className, showIntro = true }: PricingSectionProps) {
  return (
    <SectionShell className={cn("bg-foreground text-primary-foreground", className)}>
      <div className="mx-auto max-w-6xl">
        {showIntro ? (
          <div className="flex flex-col gap-6 border-b border-primary-foreground/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Pricing
              </span>
              <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary-foreground md:text-5xl">
                Simple pricing.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/62">
                Pick the service you need now. Add more when the business is ready.
              </p>
            </div>
            <Button
              href="/contact#form"
              variant="secondary"
              className="h-12 w-full border-primary-foreground/18 px-7 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground sm:w-auto"
            >
              Get a Quote
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        ) : null}

        <div className={cn("overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03]", showIntro ? "mt-8" : "")}>
          {pricingItems.map((item) => (
            <article
              key={item.label}
              className={cn(
                "grid gap-6 border-b border-primary-foreground/10 p-6 transition duration-300 last:border-b-0 hover:bg-primary-foreground/[0.055] md:grid-cols-[1.05fr_1.2fr_0.95fr_auto] md:items-center md:p-7",
                item.featured ? "bg-primary-foreground text-foreground hover:bg-primary-foreground" : ""
              )}
            >
              <div>
                {item.featured ? (
                  <span className="mb-3 inline-flex rounded-full bg-foreground px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                    Best first step
                  </span>
                ) : null}
                <h3 className={cn("text-2xl font-bold tracking-tight", item.featured ? "text-foreground" : "text-primary-foreground")}>
                  {item.label}
                </h3>
              </div>

              <p className={cn("max-w-md text-sm leading-relaxed", item.featured ? "text-foreground/68" : "text-primary-foreground/62")}>
                {item.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-bold",
                      item.featured
                        ? "border-foreground/12 text-foreground/72"
                        : "border-primary-foreground/10 text-primary-foreground/72"
                    )}
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              <p className={cn("text-3xl font-bold tracking-tight md:text-right", item.featured ? "text-foreground" : "text-primary-foreground")}>
                {item.price}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/contact#form" className="h-12 px-7 md:hidden">
            Get a Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
