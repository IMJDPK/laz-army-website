import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Analytics from '../components/Analytics'

const base = (globalThis as any)?.process?.env?.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const baseUrl = base.replace(/\/$/, '')

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Lazarus - Hip Hop Artist, Rapper & Physician | Laz Army Records',
    template: '%s | Laz Army Records',
  },
  description: 'Official website of Lazarus (Kamran Rashid Khan) — Detroit-born American rapper, songwriter, and practicing physician of Pakistani descent. Stream music, shop merch, join the community, and follow tours, releases, and news.',
  keywords: ['Lazarus rapper', 'Kamran Rashid Khan', 'Laz Army Records', 'Detroit hip hop', 'physician rapper', 'rap music', 'new hip hop', 'underground hip hop', 'Wu-Tang tour'],
  authors: [{ name: 'Lazarus' }],
  creator: 'Lazarus',
  publisher: 'Laz Army Records',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Lazarus - Hip Hop Artist, Rapper & Physician | Laz Army Records',
    description: 'Official website of Lazarus (Kamran Rashid Khan) — rapper, songwriter, and physician. Stream releases, shop Laz Army merch, and follow tours.',
    url: baseUrl,
    siteName: 'Laz Army Records',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/assets/Lazarmy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Laz Army Records - Lazarus Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lazarus - Hip Hop Artist, Rapper & Physician | Laz Army Records',
    description: 'Official website of Lazarus — Detroit-born rapper and physician. Stream music, shop merch, and follow new releases.',
    images: [`${baseUrl}/assets/Lazarmy-logo.png`],
    creator: '@lazarus', // Update with actual Twitter handle
  },
  icons: {
    // Use existing logo as placeholder icon until dedicated icons are generated
    icon: '/assets/Lazarmy-logo.png',
    apple: '/assets/Lazarmy-logo.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Lazarus',
              alternateName: ['Kamran Rashid Khan', 'Laz Army'],
              url: baseUrl,
              image: `${baseUrl}/assets/Lazarmy-logo.png`,
              description: 'Detroit-born American rapper, songwriter, and physician of Pakistani descent.',
              jobTitle: ['Rapper', 'Songwriter', 'Physician'],
              knowsLanguage: ['English', 'Urdu'],
              sameAs: [
                'http://www.lazarmy.com/',
                'https://en.wikipedia.org/wiki/Lazarus_(rapper)',
                'https://www.youtube.com/@LazDetroit',
                'https://open.spotify.com/artist/5KZfRaQHfjizCZsoRV9vqA',
                'https://www.instagram.com/lazdetroit/',
                'https://www.facebook.com/LazDetroit',
                'https://www.tiktok.com/@lazdetroit',
              ],
              affiliation: {
                '@type': 'Organization',
                name: 'Laz Army Records',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}