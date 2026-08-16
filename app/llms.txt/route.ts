import { getLlmsTxt } from "@/lib/seo/llms";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  return new Response(getLlmsTxt(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
