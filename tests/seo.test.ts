import { describe, expect, it } from "vitest";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
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

  it("adds entity knowledge, service areas, and offer catalog to organization schema", () => {
    const schema = organizationSchema();

    expect(schema.knowsAbout).toEqual(expect.arrayContaining(["Kansas City website design", "local SEO"]));
    expect(schema.areaServed).toEqual(expect.arrayContaining([{ "@type": "AdministrativeArea", name: "Leawood, KS" }]));
    expect(schema.hasOfferCatalog.itemListElement).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "Offer",
          description: "From $800",
          price: "800",
          priceCurrency: "USD"
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
      name: "Pricing",
      description: "Website, SEO, and ads pricing.",
      path: "/pricing"
    });

    expect(schema["@id"]).toBe(`${site.url}/pricing#webpage`);
    expect(schema.url).toBe(`${site.url}/pricing`);
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
