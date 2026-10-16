import { GuideArticlePage } from "@/components/sections/guide-article-page";
import { websiteQuoteGuide as guide } from "@/data/website-quote-guide";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(guide.seoTitle, guide.description, guide.path, undefined, {
  image: guide.image,
  openGraphType: "article"
});

export default function SmallBusinessWebsiteQuotePage() {
  return <GuideArticlePage guide={guide} />;
}
