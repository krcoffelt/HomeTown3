import { site } from "@/data/site";

export type CoreRoutePath =
  | "/"
  | "/services"
  | "/locations"
  | "/work"
  | "/pricing"
  | "/contact"
  | "/about"
  | "/blog"
  | "/website-offer-800"
  | "/website-design-cost-kansas-city"
  | "/privacy-policy"
  | "/terms-of-service"
  | "/cookie-policy";

export interface CoreRouteSeoEntry {
  id: string;
  path: CoreRoutePath;
  changeFrequency: "weekly" | "monthly" | "yearly";
  updatedAt: string;
  shareImage: string;
}

export const coreRouteSeoEntries: CoreRouteSeoEntry[] = [
  { id: "home", path: "/", changeFrequency: "weekly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/"] },
  { id: "services", path: "/services", changeFrequency: "weekly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/services"] },
  { id: "locations", path: "/locations", changeFrequency: "weekly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/locations"] },
  { id: "work", path: "/work", changeFrequency: "monthly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/work"] },
  { id: "pricing", path: "/pricing", changeFrequency: "weekly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/pricing"] },
  { id: "contact", path: "/contact", changeFrequency: "monthly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/contact"] },
  { id: "about", path: "/about", changeFrequency: "monthly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/about"] },
  { id: "blog", path: "/blog", changeFrequency: "weekly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/blog"] },
  { id: "offer", path: "/website-offer-800", changeFrequency: "weekly", updatedAt: "2026-05-22", shareImage: site.routeShareImages["/website-offer-800"] },
  { id: "website-cost", path: "/website-design-cost-kansas-city", changeFrequency: "monthly", updatedAt: "2026-05-12", shareImage: site.routeShareImages["/website-design-cost-kansas-city"] },
  { id: "privacy", path: "/privacy-policy", changeFrequency: "yearly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/privacy-policy"] },
  { id: "terms", path: "/terms-of-service", changeFrequency: "yearly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/terms-of-service"] },
  { id: "cookies", path: "/cookie-policy", changeFrequency: "yearly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/cookie-policy"] }
];

export function getCoreRouteSeo(path: string) {
  return coreRouteSeoEntries.find((entry) => entry.path === path);
}

export function getCoreShareImage(path: string) {
  return getCoreRouteSeo(path)?.shareImage ?? site.brand.socialImage;
}

export function getServiceShareImage(slug: string) {
  return `/og/service-${slug}`;
}

export function getLocationShareImage(slug: string) {
  return `/og/location-${slug}`;
}
