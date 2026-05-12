import { getContentSitemapXml } from "@/lib/seo/sitemaps";

export function GET() {
  return new Response(getContentSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
