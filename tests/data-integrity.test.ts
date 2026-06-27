import { describe, expect, it } from "vitest";
import { blogPosts, plannedBlogTopics } from "@/data/blog";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { coreRouteSeoEntries } from "@/lib/seo/routes";

function expectUnique(values: string[], label: string) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  expect(duplicates, `${label} should be unique`).toEqual([]);
}

function stripHash(path: string) {
  return path.split("#")[0] ?? path;
}

const serviceRoutes = services.map((service) => `/services/${service.slug}`);
const locationRoutes = locations.map((location) => `/locations/${location.slug}`);
const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);
const caseStudyRoutes = projects
  .filter((project) => project.problem && project.solution && project.result)
  .map((project) => `/case-studies/${project.slug}`);
const blogRoutes = blogPosts.map((post) => post.href);
const knownInternalRoutes = new Set([
  ...coreRouteSeoEntries.map((entry) => entry.path),
  ...serviceRoutes,
  ...locationRoutes,
  ...industryRoutes,
  ...caseStudyRoutes,
  ...blogRoutes
]);
const projectSlugs = new Set(projects.map((project) => project.slug));
const serviceSlugs = new Set(services.map((service) => service.slug));

describe("content slugs", () => {
  it("keeps service, location, blog, industry, and project slugs unique", () => {
    expectUnique(services.map((service) => service.slug), "Service slugs");
    expectUnique(locations.map((location) => location.slug), "Location slugs");
    expectUnique(blogPosts.map((post) => post.slug), "Blog slugs");
    expectUnique(industries.map((industry) => industry.slug), "Industry slugs");
    expectUnique(projects.map((project) => project.slug), "Project slugs");
  });
});

describe("priority SEO routes", () => {
  it("keeps important services, industries, blogs, and core routes configured", () => {
    expect(Array.from(serviceSlugs)).toEqual(
      expect.arrayContaining([
        "website-design",
        "small-business-websites",
        "website-redesign",
        "search-engine-optimization",
        "google-ads-management"
      ])
    );
    expect(industries.map((industry) => industry.slug)).toEqual(
      expect.arrayContaining([
        "construction-website-design-kansas-city",
        "home-services-website-design-kansas-city",
        "restaurant-website-design-kansas-city"
      ])
    );
    expect(blogPosts.map((post) => post.href)).toEqual(
      expect.arrayContaining([
        "/website-design-cost-kansas-city",
        "/deck-contractor-website-design-kansas-city",
        "/website-builder-vs-custom-website-for-small-businesses"
      ])
    );
    expect(coreRouteSeoEntries.map((entry) => entry.path)).toEqual(
      expect.arrayContaining(["/", "/services", "/pricing", "/work", "/blog", "/contact"])
    );
  });
});

describe("required SEO fields", () => {
  it("requires service SEO fields", () => {
    for (const service of services) {
      expect(service.seoTitle, `${service.slug} seoTitle`).toBeTruthy();
      expect(service.seoDescription, `${service.slug} seoDescription`).toBeTruthy();
      expect(service.title, `${service.slug} title`).toBeTruthy();
      expect(service.shortDescription, `${service.slug} shortDescription`).toBeTruthy();
      expect(service.updatedAt, `${service.slug} updatedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("requires location, blog, and industry SEO fields", () => {
    for (const location of locations) {
      expect(location.seoTitle, `${location.slug} seoTitle`).toBeTruthy();
      expect(location.seoDescription, `${location.slug} seoDescription`).toBeTruthy();
      expect(location.updatedAt, `${location.slug} updatedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(location.faqItems.length, `${location.slug} FAQ items`).toBeGreaterThan(0);
    }

    for (const post of blogPosts) {
      expect(post.title, `${post.slug} title`).toBeTruthy();
      expect(post.href, `${post.slug} href`).toMatch(/^\//);
      expect(post.excerpt, `${post.slug} excerpt`).toBeTruthy();
      expect(post.publishedAt, `${post.slug} publishedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.readingTime, `${post.slug} readingTime`).toBeTruthy();
      expect(post.targetKeywords.length, `${post.slug} targetKeywords`).toBeGreaterThan(0);
    }

    for (const industry of industries) {
      expect(industry.seoTitle, `${industry.slug} seoTitle`).toBeTruthy();
      expect(industry.seoDescription, `${industry.slug} seoDescription`).toBeTruthy();
      expect(industry.updatedAt, `${industry.slug} updatedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(industry.faqItems.length, `${industry.slug} FAQ items`).toBeGreaterThan(0);
    }
  });
});

describe("configured internal links", () => {
  it("points service related links and planned blog topics to known internal routes", () => {
    const configuredLinks = [
      ...services.flatMap((service) => service.relatedLinks?.map((link) => link.href) ?? []),
      ...plannedBlogTopics.map((topic) => topic.target)
    ];

    for (const href of configuredLinks) {
      if (href.startsWith("#")) {
        expect(href, `${href} should be a valid same-page anchor`).toMatch(/^#[A-Za-z][A-Za-z0-9_-]*$/);
        continue;
      }

      expect(knownInternalRoutes.has(stripHash(href)), `${href} should be a known route`).toBe(true);
    }
  });

  it("points project and service references to known data records", () => {
    for (const service of services) {
      for (const slug of service.proofProjectSlugs ?? []) {
        expect(projectSlugs.has(slug), `${service.slug} proof project ${slug}`).toBe(true);
      }
    }

    for (const location of locations) {
      for (const slug of location.priorityServices) {
        expect(serviceSlugs.has(slug), `${location.slug} priority service ${slug}`).toBe(true);
      }
      for (const slug of location.relatedProjectSlugs ?? []) {
        expect(projectSlugs.has(slug), `${location.slug} related project ${slug}`).toBe(true);
      }
    }

    for (const industry of industries) {
      for (const slug of industry.proofProjectSlugs ?? []) {
        expect(projectSlugs.has(slug), `${industry.slug} proof project ${slug}`).toBe(true);
      }
    }
  });
});

describe("pricing alignment", () => {
  it("keeps current public offer pricing in service data", () => {
    expect(services.find((service) => service.slug === "website-design")?.price).toBe("From $800");
    expect(services.find((service) => service.slug === "small-business-websites")?.price).toBe("From $800");
    expect(services.find((service) => service.slug === "search-engine-optimization")?.price).toBe("$250/mo");
    expect(services.find((service) => service.slug === "google-ads-management")?.price).toBe("20% of ad spend");
  });
});
