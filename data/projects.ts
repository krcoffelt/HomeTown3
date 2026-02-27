import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    title: "Plate KC",
    slug: "plate-kc",
    clientName: "Plate KC",
    industry: "Restaurant",
    summary: "Refreshed site architecture and booking flow for stronger local inquiries.",
    servicesProvided: ["Website Design", "Local SEO Structure"],
    featuredImageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "https://example.com",
    isFeatured: true,
    sortOrder: 1
  },
  {
    title: "Lupi Docs",
    slug: "lupi-docs",
    clientName: "Lupi Docs",
    industry: "Healthcare",
    summary: "Built a cleaner trust-focused website with appointment conversion emphasis.",
    servicesProvided: ["Website Design", "Brand Refresh"],
    featuredImageUrl:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "https://example.com",
    isFeatured: true,
    sortOrder: 2
  },
  {
    title: "Jose Isai Valdez",
    slug: "jose-isai-valdez",
    clientName: "Jose Isai Valdez",
    industry: "Personal Brand",
    summary: "Created a modern portfolio and service page system with stronger CTA clarity.",
    servicesProvided: ["Website Design"],
    featuredImageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "https://example.com",
    isFeatured: true,
    sortOrder: 3
  }
];
