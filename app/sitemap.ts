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
    {
      url: `${baseUrl}/blog`,
      priority: 0.8,
      changeFrequency: 'weekly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/balancing-medicine-music`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: new Date('2024-03-15'),
    },
    {
      url: `${baseUrl}/blog/behind-the-scenes-latest-album`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: new Date('2024-03-10'),
    },
    {
      url: `${baseUrl}/blog/collaboration-stories`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: new Date('2024-03-05'),
    },
    {
      url: `${baseUrl}/blog/community-outreach-medical`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: new Date('2024-02-28'),
    },
    {
      url: `${baseUrl}/blog/new-tour-dates-announcement`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: new Date('2024-02-20'),
    },
    {
      url: `${baseUrl}/blog/studio-sessions-recording`,
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: new Date('2024-02-15'),
    },
    {
      url: `${baseUrl}/privacy`,
      priority: 0.3,
      changeFrequency: 'yearly',
      lastModified: new Date('2024-01-01'),
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.3,
      changeFrequency: 'yearly',
      lastModified: new Date('2024-01-01'),
    },
  ]
}
