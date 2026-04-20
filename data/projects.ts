import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    title: "Plate KC",
    slug: "plate-kc",
    clientName: "Plate KC",
    category: "Restaurant",
    summary: "Full website for a modern Italian restaurant in Leawood.",
    description: "A hospitality-focused build with stronger navigation, bolder visuals, and clearer reservation paths.",
    servicesProvided: ["Website Design", "Creative Direction"],
    featuredImageUrl: "/images/work/PlateKCScreenshot.png",
    imageAlt: "Homepage design preview for Plate KC restaurant website",
    liveUrl: "https://platekc.com",
    quote: "A modern restaurant site that feels premium without losing warmth.",
    updatedAt: "2026-04-16"
  },
  {
    title: "Lupi Docs & Designs",
    slug: "lupi-docs",
    clientName: "Lupi Docs & Designs",
    category: "Publishing",
    summary: "Clean, professional site for a boutique book publishing company.",
    description: "A credibility-first publishing site with stronger service explanations and cleaner conversion flow.",
    servicesProvided: ["Website Design", "Brand Identity"],
    featuredImageUrl: "/images/work/LupiDocsScreenshot.png",
    imageAlt: "Homepage preview for Lupi Docs & Designs publishing website",
    liveUrl: "https://lupidocs.com",
    quote: "Built to feel polished, trustworthy, and easy to navigate.",
    updatedAt: "2026-04-16"
  },
  {
    title: "José Isaí Valdez",
    slug: "jose-isai-valdez",
    clientName: "José Isaí Valdez",
    category: "Music",
    summary: "Bold artist portfolio site with strong imagery and clear booking paths.",
    description: "A personal brand build that balances performance footage, personality, and conversion moments.",
    servicesProvided: ["Website Design"],
    featuredImageUrl: "/images/work/JoseIsaiValdezScreenshot.png",
    imageAlt: "Portfolio homepage preview for Jose Isai Valdez music website",
    liveUrl: "https://joseisaivaldez.com",
    quote: "A portfolio that feels like the artist, not a template.",
    updatedAt: "2026-04-16"
  },
  {
    title: "Voxwhite",
    slug: "voxwhite",
    clientName: "Voxwhite",
    category: "Music",
    summary: "Artist website for a KC-native pop, R&B, and soul musician.",
    description: "A cinematic music site with strong contrast, immersive imagery, and direct listening CTAs.",
    servicesProvided: ["Website Design", "Creative Direction"],
    featuredImageUrl: "/images/work/VoxwhiteScreenshot.png",
    imageAlt: "Homepage preview for Voxwhite artist website",
    liveUrl: "https://voxwhite.com",
    updatedAt: "2026-04-16"
  },
  {
    title: "Wrapped Up Moving",
    slug: "wrapped-up-moving",
    clientName: "Wrapped Up Moving",
    category: "Home Services",
    summary: "Quote-focused website for a Kansas City moving company.",
    description: "A service-business build with strong local credibility, bold hero messaging, and a direct quote-request flow.",
    servicesProvided: ["Website Design", "Lead Generation"],
    featuredImageUrl: "/images/WrappedUpMoving_screenshot.png",
    imageAlt: "Homepage preview for Wrapped Up Moving website",
    liveUrl: "https://wrappedupmoving.com",
    quote: "Built to feel trustworthy, local, and ready to turn visitors into quote requests.",
    updatedAt: "2026-04-16"
  },
  {
    title: "ZJ Carpentry & More",
    slug: "zj-carpentry-and-more",
    clientName: "ZJ Carpentry & More",
    category: "Home Services",
    summary: "Craftsmanship-focused website for a Kansas City deck and remodeling contractor.",
    description: "A home-services build that highlights project photography, clear service lines, and a direct quote path for local homeowners.",
    servicesProvided: ["Website Design", "Creative Direction"],
    featuredImageUrl: "/images/ZJCarpentry_Screenshot.png",
    imageAlt: "Homepage preview for ZJ Carpentry and More contractor website",
    liveUrl: "https://zjcarpentry.com",
    quote: "Built to feel polished, trustworthy, and ready to turn homeowner interest into quote requests.",
    updatedAt: "2026-04-16"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
