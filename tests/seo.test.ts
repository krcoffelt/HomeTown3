import { describe, expect, it } from "vitest";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqItemsSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import { getContentSitemapXml, getLocationsSitemapXml, getPagesSitemapXml, getServicesSitemapXml } from "@/lib/seo/sitemaps";

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

describe("structured data helpers", () => {
  it("builds FAQPage schema from supplied questions", () => {
    const schema = faqItemsSchema([{ question: "How much does a website cost?", answer: "Hometown websites start at $800." }]);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity[0]).toMatchObject({
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hometown websites start at $800."
      }
    });
  });

  it("extracts numeric starting prices for priced services", () => {
    const websiteDesign = services.find((service) => service.slug === "website-design");
    expect(websiteDesign).toBeDefined();

    const schema = serviceSchema(websiteDesign!);

    expect(schema.offers).toMatchObject({
      "@type": "Offer",
      price: "800",
      priceCurrency: "USD",
      description: "From $800"
    });
  });

  it("builds WebPage schema with absolute URLs", () => {
    const schema = webPageSchema({
      name: "Pricing",
      description: "Website, SEO, and ads pricing.",
      path: "/pricing"
    });

    expect(schema["@id"]).toBe(`${site.url}/pricing#webpage`);
    expect(schema.url).toBe(`${site.url}/pricing`);
    expect(schema.isPartOf).toEqual({ "@id": `${site.url}/#website` });
  });
});

describe("sitemaps", () => {
  it("includes priority core pages", () => {
    const pagesSitemap = getPagesSitemapXml();

    expect(pagesSitemap).toContain(`${site.url}/pricing`);
    expect(pagesSitemap).toContain(`${site.url}/website-design-cost-kansas-city`);
    expect(pagesSitemap).toContain(`${site.url}/blog`);
  });

  it("includes priority service, location, and content pages", () => {
    expect(getServicesSitemapXml()).toContain(`${site.url}/services/website-design`);
    expect(getServicesSitemapXml()).toContain(`${site.url}/services/small-business-websites`);
    expect(getLocationsSitemapXml()).toContain(`${site.url}/locations/kansas-city-mo`);

    const contentSitemap = getContentSitemapXml();
    expect(contentSitemap).toContain(`${site.url}/industries/construction-website-design-kansas-city`);
    expect(contentSitemap).toContain(`${site.url}/deck-contractor-website-design-kansas-city`);
    expect(contentSitemap).toContain(`${site.url}/case-studies/project-salvation`);
  });
});
