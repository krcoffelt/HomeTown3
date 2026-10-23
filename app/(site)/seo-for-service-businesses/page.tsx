import { GuideArticlePage } from "@/components/sections/guide-article-page";
import { serviceBusinessSeoGuide as guide } from "@/data/service-business-seo-guide";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(guide.seoTitle, guide.description, guide.path, undefined, {
  image: guide.image,
  openGraphType: "article"
});

export default function ServiceBusinessSeoPage() {
  return <GuideArticlePage guide={guide} />;
}
