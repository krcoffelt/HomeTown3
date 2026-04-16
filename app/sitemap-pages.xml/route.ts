import { getPagesSitemapXml } from "@/lib/seo/sitemaps";

export function GET() {
  return new Response(getPagesSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
