import type { IndustryItem } from "@/types";

export const industries: IndustryItem[] = [
  {
    title: "Construction Website Design Kansas City",
    slug: "construction-website-design-kansas-city",
    seoTitle: "Construction Website Design Kansas City | Contractor Websites",
    seoDescription:
      "Construction website design in Kansas City for contractors, carpenters, remodelers, and home-service companies that need more quote requests.",
    heroTitle: "Construction website design that turns project photos into quote requests",
    heroDescription:
      "Custom websites for Kansas City contractors and construction companies that need to show proof, explain services, and make it easy for homeowners to start a project.",
    primaryKeyword: "construction website design",
    secondaryKeywords: [
      "website design for construction company",
      "web design for construction company",
      "contractor website design Kansas City"
    ],
    proofProjectSlugs: ["zj-carpentry-and-more", "wrapped-up-moving"],
    sections: [
      {
        eyebrow: "Contractor Fit",
        title: "Built for businesses where proof matters before the call.",
        body:
          "Contractors need more than a nice homepage. The site has to show finished work, make service areas clear, and give homeowners enough confidence to request an estimate.",
        items: ["Project photo sections", "Service-line structure", "Quote-request CTAs", "Local service-area relevance"]
      },
      {
        eyebrow: "Lead Flow",
        title: "The path from project interest to estimate request should be short.",
        body:
          "A construction website should help visitors understand what you build, where you work, and how to start a conversation without digging through generic pages.",
        items: ["Call and form paths", "Trust signals", "Before-and-after proof", "Mobile-first layouts"]
      }
    ],
    faqItems: [
      {
        question: "What should a construction website include?",
        answer:
          "A strong construction website should include services, project photos, service areas, trust signals, a direct quote path, and clear explanations of the kinds of projects you want more of."
      },
      {
        question: "Can this work for smaller contractors?",
        answer:
          "Yes. Smaller contractors often benefit most because a stronger website helps them look credible before a homeowner calls or requests an estimate."
      },
      {
        question: "Can the site help with local SEO?",
        answer:
          "Yes. The structure can support contractor and construction searches by organizing services, locations, project proof, and FAQs around local buyer intent."
      }
    ],
    updatedAt: "2026-05-22"
  },
  {
    title: "Home Services Website Design Kansas City",
    slug: "home-services-website-design-kansas-city",
    seoTitle: "Home Services Website Design Kansas City | Service Business Websites",
    seoDescription:
      "Home services website design in Kansas City for movers, remodelers, contractors, cleaners, HVAC companies, and local service businesses.",
    heroTitle: "Home services website design for local businesses that need calls and quote requests",
    heroDescription:
      "Custom websites for Kansas City service businesses that need to look trustworthy, explain what they do, and turn mobile visitors into real leads.",
    primaryKeyword: "home services website design Kansas City",
    secondaryKeywords: [
      "website design for service businesses",
      "local service business website design",
      "contractor website design Kansas City"
    ],
    proofProjectSlugs: ["wrapped-up-moving", "zj-carpentry-and-more"],
    sections: [
      {
        eyebrow: "Service Business Fit",
        title: "Built for customers who want to know if they can trust you quickly.",
        body:
          "Home-service buyers usually compare credibility, availability, and clarity before they reach out. The website needs to make those answers obvious.",
        items: ["Service area clarity", "Trust and review sections", "Quote-focused structure", "Fast mobile calls"]
      },
      {
        eyebrow: "Local SEO Structure",
        title: "Organized around services, cities, and customer action.",
        body:
          "A home-service website should help search engines and customers understand what you offer, where you work, and what someone should do next.",
        items: ["Service pages", "City relevance", "Project proof", "Phone and form tracking"]
      }
    ],
    faqItems: [
      {
        question: "What home-service businesses is this for?",
        answer:
          "It fits movers, remodelers, carpenters, HVAC companies, cleaners, landscapers, roofers, and other local businesses that need calls, bookings, or quote requests."
      },
      {
        question: "Do home-service websites need SEO?",
        answer:
          "Yes. A stronger website and basic local SEO structure help Google understand services and locations, which supports future ranking work."
      },
      {
        question: "Can you use my project photos?",
        answer:
          "Yes. Real project photos are usually one of the strongest trust signals for home-service websites."
      }
    ],
    updatedAt: "2026-05-22"
  }
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
