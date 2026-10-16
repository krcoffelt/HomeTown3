import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { articlePhotography, getBlogCardPhoto } from "@/data/article-photography";
import { blogPosts } from "@/data/blog";
import { guidesBySlug } from "@/data/guides";
import { getImagesSitemapXml } from "@/lib/seo/sitemaps";

describe("editorial photography provenance and coverage", () => {
  it("gives every published article a local optimized photo and named Pexels provenance", () => {
    expect(Object.keys(articlePhotography).sort()).toEqual(blogPosts.map((post) => post.slug).sort());
    for (const post of blogPosts) {
      const photo = articlePhotography[post.slug];
      const asset = join(process.cwd(), "public", photo.src);
      expect(existsSync(asset), photo.src).toBe(true);
      expect(statSync(asset).size, `${photo.src} byte budget`).toBeLessThan(200_000);
      expect(photo.src).toMatch(/^\/images\/blog\/pexels\/\d+\.webp$/);
      expect(photo.alt.length).toBeGreaterThan(20);
      expect(photo.caption).toBeTruthy();
      expect(photo.photographer).toBeTruthy();
      expect(photo.photographerHref).toMatch(/^https:\/\/www\.pexels\.com\/@[^/]+\/$/);
      expect(photo.sourceHref).toMatch(/^https:\/\/www\.pexels\.com\/photo\/.+-\d+\/$/);
      expect(photo.sourceHref).toContain(photo.src.split("/").at(-1)!.replace(".webp", "/"));
      expect(photo.licenseHref).toBe("https://www.pexels.com/license/");
      expect(photo.verifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(existsSync(join(process.cwd(), "app", "(site)", post.slug, "page.tsx"))).toBe(true);
    }
  });

  it("places guide photos after real sections and keeps client screenshots on project cards", () => {
    for (const [slug, guide] of Object.entries(guidesBySlug)) {
      expect(guide.sections.some((section) => section.id === articlePhotography[slug].afterSection), slug).toBe(true);
    }
    expect(getBlogCardPhoto("ministry-website-design-project-salvation")).toBeUndefined();
    expect(getBlogCardPhoto("deck-contractor-website-design-kansas-city")).toBeUndefined();
  });

  it("includes each contextual article photograph in the image sitemap", () => {
    const sitemap = getImagesSitemapXml();
    for (const photo of Object.values(articlePhotography)) {
      expect(sitemap).toContain(photo.src);
    }
  });
});
