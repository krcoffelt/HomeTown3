import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, TargetIcon, TrendingUpIcon, ZapIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "small-business-websites": GlobeIcon,
  "google-ads-management": TargetIcon,
  "social-media-management": ZapIcon,
  "graphic-design": CheckCircleIcon,
  "search-engine-optimization": GlobeIcon,
  "analytics-and-tracking": TrendingUpIcon,
  "brand-identity": ZapIcon
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
        title={"Websites, SEO,\nand paid ads"}
        subtitle="The core growth stack for small businesses: a stronger website, better search visibility, and paid campaigns when you are ready to drive traffic."
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
                  price={service.price}
                />
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <MagneticButton>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
          >
            View All Services
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </MagneticButton>
        <Link
          href="/locations"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Explore Service Areas
        </Link>
      </div>
    </SectionShell>
  );
}
