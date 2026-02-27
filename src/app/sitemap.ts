import type { MetadataRoute } from 'next';
import { localSeoCities } from '@/data/localSeoCities';
import { siteConfig } from '@/lib/seo';

const withAbsoluteUrl = (path: string): string =>
  `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: withAbsoluteUrl('/'),
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: now,
    },
    {
      url: withAbsoluteUrl('/contact'),
      changeFrequency: 'weekly',
      priority: 0.95,
      lastModified: now,
    },
  ];

  const localRoutes: MetadataRoute.Sitemap = localSeoCities.map((city) => ({
    url: withAbsoluteUrl(`/websites/${city.slug}`),
    changeFrequency: 'weekly',
    priority: 0.85,
    lastModified: now,
  }));

  return [...staticRoutes, ...localRoutes];
}
