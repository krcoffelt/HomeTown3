import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/pricing", "/contact", "/website-offer-800"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const allRoutes = [...routes, ...serviceRoutes];
  return allRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date()
  }));
}
