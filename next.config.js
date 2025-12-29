const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Workaround for rare SWC SIGBUS crashes during build
  
  // Security headers
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()'
      },
    ]
  }],
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'open.spotify.com',
      'i.scdn.co',
      'is1-ssl.mzstatic.com',
      'img.youtube.com',
      'i.ytimg.com',
    ],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Internationalization (if needed in future)
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
}

module.exports = nextConfig
