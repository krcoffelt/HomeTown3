import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";
import { coreRouteSeoEntries, getLocationShareImage, getServiceShareImage } from "@/lib/seo/routes";

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

export function buildUrlSet(
  entries: Array<{
    loc: string;
    lastmod?: string;
    changefreq?: string;
  }>
) {
  const urls = entries
    .map(
      (entry) => `<url>
  <loc>${xmlEscape(absoluteUrl(entry.loc))}</loc>${entry.lastmod ? `
  <lastmod>${entry.lastmod}</lastmod>` : ""}${entry.changefreq ? `
  <changefreq>${entry.changefreq}</changefreq>` : ""}
</url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function buildImageSitemap(
  entries: Array<{
    pageLoc: string;
    imageLoc: string;
    title?: string;
    caption?: string;
  }>
) {
  const urls = entries
    .map(
      (entry) => `<url>
  <loc>${xmlEscape(absoluteUrl(entry.pageLoc))}</loc>
  <image:image>
    <image:loc>${xmlEscape(absoluteUrl(entry.imageLoc))}</image:loc>${entry.title ? `
    <image:title>${xmlEscape(entry.title)}</image:title>` : ""}${entry.caption ? `
    <image:caption>${xmlEscape(entry.caption)}</image:caption>` : ""}
  </image:image>
</url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
}

export function buildSitemapIndex(paths: string[]) {
  const maps = paths
    .map((path) => `<sitemap><loc>${xmlEscape(absoluteUrl(path))}</loc></sitemap>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${maps}
</sitemapindex>`;
}

export function getPagesSitemapXml() {
  return buildUrlSet(
    coreRouteSeoEntries.map((entry) => ({
      loc: entry.path,
      lastmod: entry.updatedAt,
      changefreq: entry.changeFrequency
    }))
  );
}

export function getServicesSitemapXml() {
  return buildUrlSet(
    services.map((service) => ({
      loc: `/services/${service.slug}`,
      lastmod: service.updatedAt,
      changefreq: "monthly"
    }))
  );
}

export function getLocationsSitemapXml() {
  return buildUrlSet(
    locations.map((location) => ({
      loc: `/locations/${location.slug}`,
      lastmod: location.updatedAt,
      changefreq: "monthly"
    }))
  );
}

export function getContentSitemapXml() {
  const industryEntries = industries.map((industry) => ({
    loc: `/industries/${industry.slug}`,
    lastmod: industry.updatedAt,
    changefreq: "monthly"
  }));

  const caseStudyEntries = projects
    .filter((project) => project.problem && project.solution && project.result)
    .map((project) => ({
      loc: `/case-studies/${project.slug}`,
      lastmod: project.updatedAt,
      changefreq: "monthly"
    }));

  const articleEntries = blogPosts.map((post) => ({
    loc: post.href,
    lastmod: post.updatedAt ?? post.publishedAt,
    changefreq: "monthly"
  }));

  return buildUrlSet([...industryEntries, ...caseStudyEntries, ...articleEntries]);
}

export function getImagesSitemapXml() {
  const shareImageEntries = coreRouteSeoEntries.map((entry) => ({
    pageLoc: entry.path,
    imageLoc: entry.shareImage,
    title: `${site.brand.fullName} ${entry.id} page preview`
  }));

  const serviceImageEntries = services.map((service) => ({
    pageLoc: `/services/${service.slug}`,
    imageLoc: getServiceShareImage(service.slug),
    title: `${service.title} service preview`,
    caption: service.shortDescription
  }));

  const locationImageEntries = locations.map((location) => ({
    pageLoc: `/locations/${location.slug}`,
    imageLoc: getLocationShareImage(location.slug),
    title: `${location.title} location page preview`,
    caption: location.heroDescription
  }));

  const projectEntries = projects.map((project) => ({
    pageLoc: "/work",
    imageLoc: project.featuredImageUrl,
    title: project.clientName,
    caption: project.summary
  }));
  const caseStudyEntries = projects
    .filter((project) => project.problem && project.solution && project.result)
    .map((project) => ({
      pageLoc: `/case-studies/${project.slug}`,
      imageLoc: project.featuredImageUrl,
      title: `${project.clientName} website case study`,
      caption: project.result ?? project.summary
    }));

  return buildImageSitemap([...shareImageEntries, ...serviceImageEntries, ...locationImageEntries, ...projectEntries, ...caseStudyEntries]);
}
