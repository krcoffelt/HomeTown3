import { buildSitemapIndex } from "@/lib/seo/sitemaps";

const sitemapPaths = ["/sitemap-pages.xml", "/sitemap-services.xml", "/sitemap-locations.xml", "/sitemap-content.xml", "/sitemap-images.xml"];

export function GET() {
  return new Response(buildSitemapIndex(sitemapPaths), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
