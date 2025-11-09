'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Google Analytics tracking ID - replace with your actual GA4 ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Page view tracking
export function pageview(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Event tracking
export function event({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Analytics tracking component
function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      pageview(url)
    }
  }, [pathname, searchParams])

  return null
}

// Analytics component to include in layout
export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Wrapped in Suspense for useSearchParams */}
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  )
}

// Custom hooks for tracking specific events
export function useTrackEvent() {
  return (action: string, category: string, label?: string, value?: number) => {
    event({ action, category, label, value })
  }
}

// Pre-defined event trackers for common actions
export const trackStreamClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Music',
    label: `Stream on ${platform}`,
  })
}

export const trackGearClick = (item: string) => {
  event({
    action: 'click',
    category: 'Gear',
    label: item,
  })
}

export const trackEmailSignup = () => {
  event({
    action: 'signup',
    category: 'Newsletter',
    label: 'Email List Join',
  })
}

export const trackTicketPurchase = (venue: string, value?: number) => {
  event({
    action: 'purchase',
    category: 'Tour',
    label: venue,
    value: value,
  })
}

export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Social',
    label: platform,
  })
}

export const trackContactSubmit = () => {
  event({
    action: 'submit',
    category: 'Contact',
    label: 'Contact Form',
  })
}
