import { getLocationsSitemapXml } from "@/lib/seo/sitemaps";

export function GET() {
  return new Response(getLocationsSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
