import type { Metadata } from "next";
import { site } from "@/data/site";

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: site.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

