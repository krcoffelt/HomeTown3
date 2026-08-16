import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, TargetIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "google-ads-management": TargetIcon,
  "search-engine-optimization": GlobeIcon
};

const homepageServiceSlugs = ["website-design", "search-engine-optimization", "google-ads-management"];

export function ServicesPreview() {
  const homepageServices = homepageServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <SectionShell className="noise bg-gradient-subtle">
      <SectionHeading
        badge="Services"
        title={"Websites, SEO,\nand paid ads that convert"}
        subtitle="Three connected growth channels for small businesses, measured by the calls, forms, qualified leads, rankings, and revenue signals they create."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {homepageServices.map((service, index) => {
          const Icon = iconMap[service.slug] ?? CheckCircleIcon;
          return (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <ServiceCard
                  icon={<Icon className="h-5 w-5" />}
                  title={service.title}
                  description={service.shortDescription}
                />
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <MagneticButton>
          <Link
            href="/services/website-design"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
          >
            Website Design Kansas City
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </MagneticButton>
        <Link
          href="/services/search-engine-optimization"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Small Business SEO Kansas City
        </Link>
        <Link
          href="/services/google-ads-management"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Google &amp; Meta Ads
        </Link>
        <Link
          href="/industries/restaurant-website-design-kansas-city"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Restaurant Website Design
        </Link>
        <Link
          href="/locations/leawood-ks"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Leawood Website Design
        </Link>
      </div>
    </SectionShell>
  );
}
