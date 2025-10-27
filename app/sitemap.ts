import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (globalThis as any)?.process?.env?.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const baseUrl = base.replace(/\/$/, '')
  return [
    {
      url: `${baseUrl}/`,
      priority: 1,
      changeFrequency: 'weekly',
      lastModified: new Date(),
    },
  ]
}
