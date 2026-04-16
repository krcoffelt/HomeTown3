import { site } from "@/data/site";

export type CoreRoutePath =
  | "/"
  | "/services"
  | "/work"
  | "/pricing"
  | "/contact"
  | "/about"
  | "/website-offer-800"
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
  { id: "services", path: "/services", changeFrequency: "weekly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/services"] },
  { id: "work", path: "/work", changeFrequency: "monthly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/work"] },
  { id: "pricing", path: "/pricing", changeFrequency: "weekly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/pricing"] },
  { id: "contact", path: "/contact", changeFrequency: "monthly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/contact"] },
  { id: "about", path: "/about", changeFrequency: "monthly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/about"] },
  { id: "offer", path: "/website-offer-800", changeFrequency: "weekly", updatedAt: "2026-04-16", shareImage: site.routeShareImages["/website-offer-800"] },
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
