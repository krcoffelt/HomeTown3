import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Website Design",
    slug: "website-design",
    shortDescription: "Custom websites built to turn local traffic into inquiries.",
    fullDescription: "Custom websites designed to make your business look credible and convert visitors into leads.",
    price: "$800",
    isFeatured: true,
    sortOrder: 1
  },
  {
    title: "Google Business Profile Setup",
    slug: "google-business-profile-setup",
    shortDescription: "Optimize your local profile for stronger discovery.",
    fullDescription: "Setup and optimization of your Google Business Profile for stronger local visibility.",
    price: "$250",
    sortOrder: 2
  },
  {
    title: "Social Media",
    slug: "social-media",
    shortDescription: "Consistent social support that aligns with your website.",
    fullDescription: "Social media support focused on consistency and lead-quality messaging.",
    price: "$499/mo",
    sortOrder: 3
  },
  {
    title: "Graphic Design",
    slug: "graphic-design",
    shortDescription: "Marketing visuals that support your brand and campaigns.",
    fullDescription: "Marketing graphics for social, web, and promotional materials.",
    price: "Custom quote",
    sortOrder: 4
  },
  {
    title: "Logo and Brand Work",
    slug: "logo-and-brand-work",
    shortDescription: "Identity foundations for a stronger local brand.",
    fullDescription: "Logo and brand direction to keep your business visuals consistent.",
    price: "$250",
    sortOrder: 5
  }
];
