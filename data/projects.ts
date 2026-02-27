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
      "/images/work/plate-kc.jpg",
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
      "/images/work/lupi-docs.png",
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
      "/images/work/jose-isai-valdez.jpg",
    liveUrl: "https://example.com",
    isFeatured: true,
    sortOrder: 3
  }
];
