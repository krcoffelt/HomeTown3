import { GuideArticlePage } from "@/components/sections/guide-article-page";
import { websiteRedesignChecklistGuide as guide } from "@/data/guides";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(guide.seoTitle, guide.description, guide.path, undefined, {
  image: guide.image,
  openGraphType: "article"
});

export default function WebsiteRedesignChecklistPage() {
  return <GuideArticlePage guide={guide} />;
}
