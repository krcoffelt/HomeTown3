import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";

const shortNames: Record<string, { name: string; accent: string; image: string; alt: string }> = {
  "website-design": {
    name: "Websites",
    accent: "that convert",
    image: "/images/work/noble-hardwoods/homepage.jpg",
    alt: "Noble Hardwoods website homepage"
  },
  "search-engine-optimization": {
    name: "SEO",
    accent: "that ranks",
    image: "/images/work/PlateKCScreenshot.webp",
    alt: "Plate KC restaurant website homepage"
  },
  "google-ads-management": {
    name: "Paid ads",
    accent: "that pay back",
    image: "/images/WrappedUpMoving_screenshot.webp",
    alt: "Wrapped Up Moving website homepage"
  }
};

/** Service rows linking to each service page. */
export function ServicesList() {
  return (
    <section aria-labelledby="services-heading" className="grain relative overflow-hidden bg-ink py-24 text-primary-foreground md:py-36">
      <div className="site-container">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">What we do</p>
          <div className="md:col-span-8">
            <h2 id="services-heading" data-reveal="up" className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.035em] md:text-[2.75rem]">
              Three connected channels.{" "}
              <span className="text-primary-foreground/50">One system, measured by the leads it creates.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <ul className="border-b border-primary-foreground/12">
            {services.map((service) => {
              const meta = shortNames[service.slug] ?? { name: service.title, accent: "", image: "", alt: "" };
              return (
                <li key={service.slug} className="border-t border-primary-foreground/12">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid items-center gap-4 py-8 md:grid-cols-12 md:gap-6 md:py-12"
                  >
                    <span className="font-display text-[clamp(2.75rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em] transition-transform duration-700 ease-out-expo md:col-span-7 md:group-hover:translate-x-4">
                      {meta.name}{" "}
                      <span className="serif-accent text-primary-foreground/40 transition-colors duration-500 group-hover:text-[hsl(229_100%_75%)]">
                        {meta.accent}
                      </span>
                    </span>
                    <span className="max-w-sm text-base leading-relaxed text-primary-foreground/60 md:col-span-4">
                      {service.shortDescription}
                      <span className="mt-4 flex flex-wrap gap-2">
                        {service.metaTags.map((tag) => (
                          <span key={tag} className="rounded-full border border-primary-foreground/15 px-3 py-1 text-xs text-primary-foreground/70">
                            {tag}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span className="hidden justify-end md:col-span-1 md:flex">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/20 transition-all duration-500 group-hover:border-accent group-hover:bg-accent">
                        <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </span>
                    {meta.image ? (
                      <span className="relative mt-2 block aspect-[16/9] overflow-hidden rounded-xl md:hidden">
                        <Image src={meta.image} alt={meta.alt} fill sizes="92vw" className="object-cover object-top" />
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
