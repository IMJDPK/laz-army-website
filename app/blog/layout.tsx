import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Laz Army Records',
  description: 'Latest news, updates, and stories from Lazarus - behind the scenes, tour announcements, and insights into music and medicine.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
