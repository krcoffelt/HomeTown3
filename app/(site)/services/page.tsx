import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/layout/page-hero";
import { Process } from "@/components/sections/home/process";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const serviceVisuals: Record<string, { image: string; alt: string; label: string }> = {
  "website-design": {
    image: "/images/work/noble-hardwoods/homepage.jpg",
    alt: "Noble Hardwoods conversion-focused website homepage",
    label: "Noble Hardwoods · +65% quote requests"
  },
  "search-engine-optimization": {
    image: "/images/work/PlateKCScreenshot.webp",
    alt: "Plate KC restaurant website homepage",
    label: "Plate KC · +34,478 organic impressions"
  },
  "google-ads-management": {
    image: "/images/WrappedUpMoving_screenshot.webp",
    alt: "Wrapped Up Moving website homepage",
    label: "Wrapped Up Moving · 12.7× blended ROI"
  }
};

export const metadata = createPageMetadata(
  "Small Business Marketing Services Kansas City",
  "Conversion-focused websites, SEO, and Google and Meta ads for Kansas City small businesses—with real lead and conversion tracking.",
  "/services"
);

export default function ServicesPage() {
  const description =
    "Websites, SEO, and Google and Meta ads for small businesses, connected by conversion tracking and clear reporting.";

  return (
    <PageTransition>
      <StructuredData
        data={[
          webPageSchema({ name: "Small Business Marketing Services", description, path: "/services" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" }
          ])
        ]}
      />

      <PageIntro
        badge="Small business marketing"
        title="Three services. One measurable growth system."
        titleLines={[
          "Three services.",
          <>
            One <span className="serif-accent">measurable</span>
          </>,
          "growth system."
        ]}
        subtitle="Build a website that converts, earn qualified visibility through SEO, and use Google and Meta ads to create demand—then track which work produces real leads."
        actions={
          <>
            <Button href="#form" variant="light">
              Get a free marketing audit
            </Button>
            <Button href="/work" variant="outline-light" arrow={false}>
              See the work
            </Button>
          </>
        }
      />

      <section aria-label="Services" className="bg-background py-24 md:py-36">
        <div className="site-container grid gap-24 md:gap-36">
          {services.map((service, index) => {
            const visual = serviceVisuals[service.slug];
            const flip = index % 2 === 1;
            return (
              <article key={service.slug} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className={flip ? "lg:order-2 lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                  <p className="mono-label text-muted-foreground">
                    {service.metaTags.join(" · ")}
                  </p>
                  <Reveal>
                    <h2 className="mt-6 font-display text-[clamp(2.4rem,4.4vw,4.25rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                      {service.title}
                    </h2>
                  </Reveal>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

                  <ul className="mt-10 border-t border-foreground/10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-baseline gap-4 border-b border-foreground/10 py-3.5">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Button href={`/services/${service.slug}`} variant="dark">
                      {`Explore ${service.seoTitle?.replace(" Kansas City", "") ?? service.title}`}
                    </Button>
                  </div>
                </div>

                {visual ? (
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group block lg:col-span-7 ${flip ? "lg:order-1" : ""}`}
                    aria-label={`${service.title} details`}
                  >
                    <Reveal variant="clip">
                      <div className="relative overflow-hidden rounded-[1.5rem] bg-ink p-4 sm:p-6 md:p-10">
                        <div className="browser-frame">
                          <div className="relative aspect-[16/10]">
                            <Image
                              src={visual.image}
                              alt={visual.alt}
                              fill
                              sizes="(max-width: 1024px) 92vw, 56vw"
                              className="object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.03]"
                            />
                          </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between text-sm text-primary-foreground/70 md:mt-8">
                          <span className="mono-label">{visual.label}</span>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-ink transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="connects-heading" className="grain bg-ink py-24 text-primary-foreground md:py-32">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="eyebrow md:col-span-4">How it connects</p>
            <h2 id="connects-heading" className="display-md md:col-span-8">
              Traffic only matters when the experience can <span className="serif-accent">convert it.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] bg-primary-foreground/10 md:mt-20 md:grid-cols-3">
            {[
              ["Website", "Turns attention into trust and action."],
              ["SEO", "Earns visibility from qualified searches."],
              ["Paid ads", "Creates demand and measures the response."]
            ].map(([title, body]) => (
              <div key={title} className="bg-ink p-7 md:p-9">
                <p className="text-3xl font-semibold tracking-[-0.04em]">{title}</p>
                <p className="mt-3 text-primary-foreground/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <ContactCta
        title="Not sure which channel is holding growth back?"
        accentText="holding growth back?"
        body="Start with a free marketing audit. We’ll look at the available data, identify the biggest opportunity, and explain what should come first."
        links={[{ href: "/work", label: "See Our Work" }]}
      />
    </PageTransition>
  );
}
