import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Website Design",
    slug: "website-design",
    shortDescription: "Custom websites built to turn local traffic into inquiries.",
    fullDescription:
      "A strategic, custom-built website designed for local service businesses that need to look legitimate and convert visitors into leads.",
    price: "$800 this month ($999 regular)",
    isFeatured: true,
    sortOrder: 1
  },
  {
    title: "Google Business Profile Setup",
    slug: "google-business-profile-setup",
    shortDescription: "Optimize your local profile for stronger discovery.",
    fullDescription:
      "Complete setup and optimization of your Google Business Profile so your business appears stronger in local map and search results.",
    price: "$250",
    sortOrder: 2
  },
  {
    title: "Logo Design + Mini Brand Kit",
    slug: "logo-design-mini-brand-kit",
    shortDescription: "A clean, credible visual identity for small businesses.",
    fullDescription:
      "A polished logo and small brand kit with practical usage guidance so your website, social, and print assets stay consistent.",
    price: "$250",
    sortOrder: 3
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    shortDescription: "Consistent social execution that supports your website funnel.",
    fullDescription:
      "Monthly social media management for local service businesses that need cleaner messaging, stronger consistency, and better lead alignment.",
    price: "$499/month",
    sortOrder: 4
  }
];

