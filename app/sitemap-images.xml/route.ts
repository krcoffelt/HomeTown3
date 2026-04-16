import { getImagesSitemapXml } from "@/lib/seo/sitemaps";

export function GET() {
  return new Response(getImagesSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
