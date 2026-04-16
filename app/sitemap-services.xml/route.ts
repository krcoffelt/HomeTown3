import { getServicesSitemapXml } from "@/lib/seo/sitemaps";

export function GET() {
  return new Response(getServicesSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
