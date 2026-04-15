import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";

const publicRoutes = [
  { path: "/", changeFrequency: "weekly" as const },
  { path: "/services", changeFrequency: "weekly" as const },
  { path: "/work", changeFrequency: "monthly" as const },
  { path: "/pricing", changeFrequency: "weekly" as const },
  { path: "/contact", changeFrequency: "monthly" as const },
  { path: "/website-offer-800", changeFrequency: "weekly" as const },
  { path: "/privacy-policy", changeFrequency: "yearly" as const },
  { path: "/terms-of-service", changeFrequency: "yearly" as const },
  { path: "/cookie-policy", changeFrequency: "yearly" as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...publicRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const
    }))
  ];
}
