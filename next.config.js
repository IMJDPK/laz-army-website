const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Workaround for rare SWC SIGBUS crashes during build
  
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
