import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts } from "@/data/blog";
import { guidesBySlug } from "@/data/guides";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { coreRouteSeoEntries } from "@/lib/seo/routes";
import { getContentSitemapXml, getImagesSitemapXml } from "@/lib/seo/sitemaps";

const guides = Object.entries(guidesBySlug);
const knownRoutes = new Set([
  ...coreRouteSeoEntries.map((entry) => entry.path),
  ...services.map((service) => `/services/${service.slug}`),
  ...locations.map((location) => `/locations/${location.slug}`),
  ...industries.map((industry) => `/industries/${industry.slug}`),
  ...projects
    .filter((project) => project.problem && project.solution && project.result)
    .map((project) => `/case-studies/${project.slug}`),
  ...blogPosts.map((post) => post.href)
]);

function stripHash(path: string) {
  return path.split("#")[0] ?? path;
}

describe("long-form Kansas City guides", () => {
  it("keeps all five guide records complete and connected to physical routes", () => {
    expect(guides).toHaveLength(5);

    for (const [slug, guide] of guides) {
      expect(guide.path).toBe(`/${slug}`);
      expect(`${guide.seoTitle} | Hometown`.length).toBeLessThanOrEqual(60);
      expect(guide.description.length).toBeLessThanOrEqual(160);
      expect(guide.sections.length).toBeGreaterThanOrEqual(6);
      expect(guide.faqItems.length).toBeGreaterThanOrEqual(4);
      expect(guide.keyTakeaways.length).toBeGreaterThanOrEqual(4);
      expect(guide.image).toMatch(/^\/images\//);
      expect(existsSync(join(process.cwd(), "public", guide.image))).toBe(true);
      expect(existsSync(join(process.cwd(), "app", "(site)", slug, "page.tsx"))).toBe(true);

      const post = blogPosts.find((item) => item.href === guide.path);
      expect(post, `${guide.path} blog record`).toBeDefined();
      expect(post?.image).toBe(guide.image);
    }
  });

  it("keeps every guide link pointed at a known canonical route", () => {
    for (const [, guide] of guides) {
      for (const link of [...guide.relatedLinks, ...guide.ctaLinks]) {
        expect(knownRoutes.has(stripHash(link.href)), `${guide.path} -> ${link.href}`).toBe(true);
      }
    }
  });

  it("includes every guide and its article image in the generated sitemaps", () => {
    const contentSitemap = getContentSitemapXml();
    const imageSitemap = getImagesSitemapXml();

    for (const [, guide] of guides) {
      expect(contentSitemap).toContain(`https://hometownkc.agency${guide.path}`);
      expect(imageSitemap).toContain(`https://hometownkc.agency${guide.path}`);
      expect(imageSitemap).toContain(`https://hometownkc.agency${guide.image}`);
    }
  });
});
