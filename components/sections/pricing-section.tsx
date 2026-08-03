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
    label: "Custom Websites",
    price: "From $800",
    description: "Custom, mobile-ready sites built to turn visitors into leads.",
    details: ["Custom design", "SEO basics", "Lead form"],
    featured: true
  },
  {
    label: "SEO",
    price: "$250/mo",
    description: "Monthly SEO support for better visibility, keyword tracking, Search Console review, and practical recommendations.",
    details: ["Keyword tracking", "GSC review", "Action plan"]
  },
  {
    label: "Paid Ads",
    price: "20% of ad spend",
    description: "Google Ads, Meta Ads, or another ad platform managed around budget, targeting, tracking, and lead quality.",
    details: ["$250 setup per platform", "Campaign management", "Tracking review"]
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
                Start with a website, add SEO for organic visibility, and use paid ads when you are ready to drive targeted traffic.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="/pricing"
                variant="secondary"
                className="h-12 w-full border-primary-foreground/18 px-7 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground sm:w-auto"
              >
                View Pricing
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button
                href="#form"
                variant="secondary"
                className="h-12 w-full border-primary-foreground/18 px-7 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground sm:w-auto"
              >
                Get a Quote
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
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

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            { label: "Website Design Kansas City", href: "/services/website-design" },
            { label: "Website design cost in Kansas City", href: "/website-design-cost-kansas-city" },
            { label: "Small business website design Kansas City", href: "/services/small-business-websites" },
            { label: "Website redesign Kansas City", href: "/services/website-redesign" },
            { label: "SEO agency Kansas City", href: "/services/search-engine-optimization" },
            { label: "Restaurant website design", href: "/industries/restaurant-website-design-kansas-city" },
            { label: "Leawood website design", href: "/locations/leawood-ks" },
            { label: "View Website Work", href: "/work" }
          ].map((link) => (
            <Button
              key={link.href}
              href={link.href}
              variant="secondary"
              className="h-11 border-primary-foreground/18 px-5 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground"
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="#form" className="h-12 px-7 md:hidden">
            Get a Quote
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
