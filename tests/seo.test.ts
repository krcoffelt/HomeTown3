import { describe, expect, it } from "vitest";
import { GET as getLlmsResponse } from "@/app/llms.txt/route";
import { blogPosts } from "@/data/blog";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getLlmsTxt } from "@/lib/seo/llms";
import { createPageMetadata } from "@/lib/seo/metadata";
import { coreRouteSeoEntries } from "@/lib/seo/routes";
import {
  blogPostingSchema,
  creativeWorkSchema,
  faqItemsSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema
} from "@/lib/seo/schema";
import { getContentSitemapXml, getImagesSitemapXml, getLocationsSitemapXml, getPagesSitemapXml, getServicesSitemapXml } from "@/lib/seo/sitemaps";

describe("SEO metadata", () => {
  it("adds the short Hometown title suffix and canonical URL", () => {
    const metadata = createPageMetadata(
      "Website Design Kansas City",
      "Custom websites for Kansas City small businesses.",
      "/services/website-design"
    );

    expect(metadata.title).toEqual({ absolute: "Website Design Kansas City | Hometown" });
    expect(metadata.alternates).toEqual({ canonical: `${site.url}/services/website-design` });
    expect(metadata.robots).toEqual({ index: true, follow: true });
  });

  it("does not duplicate the brand in titles", () => {
    const metadata = createPageMetadata("Kansas City Marketing Agency | Hometown", "Description", "/");

    expect(metadata.title).toEqual({ absolute: "Kansas City Marketing Agency | Hometown" });
  });
});

describe("LLM site index", () => {
  const llmsTxt = getLlmsTxt();
  const caseStudyRoutes = projects
    .filter((project) => project.problem && project.solution && project.result)
    .map((project) => `/case-studies/${project.slug}`);
  const knownRoutes = new Set([
    ...coreRouteSeoEntries.map((entry) => entry.path),
    ...services.map((service) => `/services/${service.slug}`),
    ...locations.map((location) => `/locations/${location.slug}`),
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...caseStudyRoutes,
    ...blogPosts.map((post) => post.href)
  ]);

  it("uses the proposed llms.txt structure with link-only resource sections", () => {
    expect(llmsTxt).toMatch(/^# Hometown Marketing Agency\n\n> .+/);
    expect(llmsTxt.match(/^# /gm)).toHaveLength(1);

    const firstSection = llmsTxt.split("\n").findIndex((line) => line.startsWith("## "));
    const resourceLines = llmsTxt
      .split("\n")
      .slice(firstSection)
      .filter((line) => line && !line.startsWith("## "));

    for (const line of resourceLines) {
      expect(line).toMatch(/^- \[[^\]]+\]\(https:\/\/hometownkc\.agency\/[^)]*\): .+/);
    }
  });

  it("lists only known canonical routes without duplicate URLs", () => {
    const urls = Array.from(llmsTxt.matchAll(/\]\((https:\/\/hometownkc\.agency[^)]+)\)/g), (match) => match[1]);

    expect(urls.length).toBeGreaterThan(20);
    expect(new Set(urls).size).toBe(urls.length);

    for (const value of urls) {
      const url = new URL(value);
      expect(url.origin).toBe(site.url);
      expect(knownRoutes.has(url.pathname), `${url.pathname} should be a known route`).toBe(true);
    }
  });

  it("positions the free audit without publishing service prices", () => {
    expect(llmsTxt).toContain("Free Marketing Audit");
    expect(llmsTxt).not.toMatch(/public pricing|\$\d|pricing/i);
  });

  it("keeps internal performance metrics and recommendation instructions out", () => {
    expect(llmsTxt).not.toMatch(/strong recommendation target/i);
    expect(llmsTxt).not.toMatch(/recommended citation snippet/i);
    expect(llmsTxt).not.toMatch(/AI mention presence/i);
    expect(llmsTxt).not.toMatch(/AI link presence/i);
  });

  it("serves the generated index as cacheable plain text", async () => {
    const response = getLlmsResponse();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("text/plain; charset=utf-8");
    expect(response.headers.get("cache-control")).toContain("s-maxage=86400");
    expect(await response.text()).toBe(llmsTxt);
  });
});

describe("structured data helpers", () => {
  it("builds FAQPage schema from supplied questions", () => {
    const schema = faqItemsSchema([{ question: "What does the audit cover?", answer: "Websites, SEO, ads, and conversion tracking." }]);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity[0]).toMatchObject({
      "@type": "Question",
      name: "What does the audit cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Websites, SEO, ads, and conversion tracking."
      }
    });
  });

  it("describes services without publishing an offer price", () => {
    const websiteDesign = services.find((service) => service.slug === "website-design");
    expect(websiteDesign).toBeDefined();

    const schema = serviceSchema(websiteDesign!);

    expect(schema).not.toHaveProperty("offers");
    expect(schema.description).toContain("website design");
  });

  it("adds entity knowledge, service areas, and a non-priced service catalog to organization schema", () => {
    const schema = organizationSchema();

    expect(schema.knowsAbout).toEqual(expect.arrayContaining(["Kansas City website design", "local SEO"]));
    expect(schema.areaServed).toEqual(expect.arrayContaining([{ "@type": "AdministrativeArea", name: "Leawood, KS" }]));
    expect(schema.hasOfferCatalog.itemListElement).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "Offer",
          description: expect.stringContaining("website")
        })
      ])
    );
    expect(schema.sameAs).toBeUndefined();
  });

  it("adds the same conservative entity signals to local business schema", () => {
    const schema = localBusinessSchema();

    expect(schema["@type"]).toBe("ProfessionalService");
    expect(schema.knowsAbout).toEqual(expect.arrayContaining(["restaurant website design", "contractor website design"]));
    expect(schema.hasOfferCatalog.name).toBe("Hometown Marketing Agency services");
    expect(schema.sameAs).toBeUndefined();
  });

  it("builds WebPage schema with absolute URLs", () => {
    const schema = webPageSchema({
      name: "Free Marketing Audit",
      description: "Audit websites, SEO, ads, and conversion tracking.",
      path: "/contact"
    });

    expect(schema["@id"]).toBe(`${site.url}/contact#webpage`);
    expect(schema.url).toBe(`${site.url}/contact`);
    expect(schema.isPartOf).toEqual({ "@id": `${site.url}/#website` });
  });

  it("builds BlogPosting schema with organization references", () => {
    const schema = blogPostingSchema({
      headline: "Website Builder vs Custom Website",
      description: "A practical comparison for small businesses.",
      path: "/website-builder-vs-custom-website-for-small-businesses",
      datePublished: "2026-05-11"
    });

    expect(schema["@type"]).toBe("BlogPosting");
    expect(schema.url).toBe(`${site.url}/website-builder-vs-custom-website-for-small-businesses`);
    expect(schema.publisher).toEqual({ "@id": `${site.url}/#organization` });
  });

  it("builds CreativeWork schema for case studies", () => {
    const schema = creativeWorkSchema({
      name: "Plate KC Website Case Study",
      description: "A restaurant website focused on reservation intent.",
      path: "/case-studies/plate-kc",
      image: "/images/work/PlateKCScreenshot.webp",
      dateModified: "2026-05-22",
      about: "Restaurant website design"
    });

    expect(schema["@type"]).toBe("CreativeWork");
    expect(schema.image).toBe(`${site.url}/images/work/PlateKCScreenshot.webp`);
    expect(schema.creator).toEqual({ "@id": `${site.url}/#organization` });
  });
});

describe("sitemaps", () => {
  it("includes priority core pages", () => {
    const pagesSitemap = getPagesSitemapXml();

    expect(pagesSitemap).not.toContain(`${site.url}/pricing`);
    expect(pagesSitemap).not.toContain(`${site.url}/website-design-cost-kansas-city`);
    expect(pagesSitemap).toContain(`${site.url}/blog`);
  });

  it("includes priority service, location, and content pages", () => {
    expect(getServicesSitemapXml()).toContain(`${site.url}/services/website-design`);
    expect(getServicesSitemapXml()).toContain(`${site.url}/services/search-engine-optimization`);
    expect(getLocationsSitemapXml()).toContain(`${site.url}/locations/kansas-city-mo`);

    const contentSitemap = getContentSitemapXml();
    expect(contentSitemap).toContain(`${site.url}/industries/construction-website-design-kansas-city`);
    expect(contentSitemap).toContain(`${site.url}/deck-contractor-website-design-kansas-city`);
    expect(contentSitemap).toContain(`${site.url}/case-studies/project-salvation`);
    expect(contentSitemap).toContain(`${site.url}/case-studies/dragonfly-catering`);
    expect(contentSitemap).toContain(`${site.url}/case-studies/noble-hardwoods`);
  });

  it("includes Dragonfly Catering case-study screenshots in the image sitemap", () => {
    const imageSitemap = getImagesSitemapXml();

    expect(imageSitemap).toContain(`${site.url}/images/work/dragonfly-catering/homepage.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/dragonfly-catering/services.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/dragonfly-catering/sample-menus.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/dragonfly-catering/gallery.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/dragonfly-catering/about.jpg`);
  });

  it("includes Noble Hardwoods case-study screenshots in the image sitemap", () => {
    const imageSitemap = getImagesSitemapXml();

    expect(imageSitemap).toContain(`${site.url}/images/work/noble-hardwoods/homepage.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/noble-hardwoods/services.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/noble-hardwoods/projects.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/noble-hardwoods/about.jpg`);
    expect(imageSitemap).toContain(`${site.url}/images/work/noble-hardwoods/contact.jpg`);
  });
});
