import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { coreRouteSeoEntries, getServiceShareImage } from "@/lib/seo/routes";

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

  const projectEntries = projects.map((project) => ({
    pageLoc: "/work",
    imageLoc: project.featuredImageUrl,
    title: project.clientName,
    caption: project.summary
  }));

  return buildImageSitemap([...shareImageEntries, ...serviceImageEntries, ...projectEntries]);
}
