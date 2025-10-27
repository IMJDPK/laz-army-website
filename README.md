# 🎵 Laz Army Records - Official Website

Official website for **Lazarus** - Independent hip hop artist, rapper, and physician.

Built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

### ✅ Completed

- **SEO Optimized**
  - Comprehensive meta tags with keywords
  - JSON-LD Schema markup for MusicGroup
  - Open Graph and Twitter Card integration
  - Optimized titles and descriptions
  - XML sitemap and robots.txt

- **Music Integration**
  - Streaming platform links (Spotify, Apple Music, YouTube, SoundCloud)
  - Album/discography showcase
  - Music video embeds
  - Branded streaming buttons with icons

- **Content Sections**
  - Hero section with branding
  - About/Biography
  - Music/Discography with streaming links
  - Blog/News section
  - Tour dates with schema markup
  - Merch showcase
  - Newsletter signup
  - Contact form
  - Footer with social links

- **Analytics & Tracking**
  - Google Analytics 4 integration
  - Custom event tracking for user actions
  - Conversion tracking for signups, streams, purchases

- **Legal & Compliance**
  - Privacy Policy page
  - Terms of Service page
  - GDPR-ready email collection

- **Performance Optimizations**
  - Next.js Image optimization (WebP/AVIF)
  - Lazy loading images
  - Code splitting
  - Compressed assets
  - Optimized for Core Web Vitals

- **Modern Tech Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Responsive design (mobile-first)

---

## 📁 Project Structure

```
laz_army_full_site/
├── app/
│   ├── layout.tsx          # Root layout with metadata & schema
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── robots.ts           # Robots.txt configuration
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms of service
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/bio section
│   ├── Music.tsx           # Music/discography ⭐ NEW
│   ├── Blog.tsx            # News/blog section ⭐ NEW
│   ├── Tours.tsx           # Tour dates ⭐ NEW
│   ├── LazarusFrequency.tsx
│   ├── LazArmyRecords.tsx
│   ├── Merch.tsx           # Merchandise
│   ├── Join.tsx            # Newsletter signup
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with links
│   ├── Analytics.tsx       # GA4 tracking ⭐ NEW
│   └── OptimizedImage.tsx  # Image optimization ⭐ NEW
├── assets/
│   ├── Lazarmy-logo.png    # Logo
│   └── Banner*.jpg/jpeg    # Banner images
├── .env.example            # Environment variables template ⭐ NEW
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
└── generate-index.js       # Site indexing script

⭐ = New additions
```

---

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laz_army_full_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SPOTIFY_ARTIST_ID=your_spotify_id
   # ... etc
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 🎯 Configuration Checklist

### Required Updates

Before deploying, update these items with your actual information:

#### 1. Environment Variables (`.env.local`)
- [ ] `NEXT_PUBLIC_SITE_URL` - Your domain
- [ ] `NEXT_PUBLIC_GA_ID` - Google Analytics 4 ID
- [ ] All social media handles and platform IDs

#### 2. Schema Markup (`app/layout.tsx`)
- [ ] Founding date
- [ ] Spotify artist ID
- [ ] Apple Music artist ID
- [ ] YouTube channel URL
- [ ] Instagram handle
- [ ] Twitter handle
- [ ] SoundCloud profile

#### 3. Music Component (`components/Music.tsx`)
- [ ] Replace placeholder album data with real albums
- [ ] Add actual cover art images
- [ ] Add streaming URLs
- [ ] Add Spotify embed code

#### 4. Blog Component (`components/Blog.tsx`)
- [ ] Add real blog posts
- [ ] Update images
- [ ] Create actual blog pages

#### 5. Tours Component (`components/Tours.tsx`)
- [ ] Add actual tour dates
- [ ] Add ticket URLs
- [ ] Update venue information

#### 6. Analytics (`components/Analytics.tsx`)
- [ ] Verify Google Analytics tracking ID
- [ ] Test event tracking
- [ ] Set up conversion goals in GA4

#### 7. Legal Pages
- [ ] Update privacy policy with actual business info
- [ ] Update terms of service with actual business info
- [ ] Add contact email addresses

---

## 📊 SEO Checklist

### Technical SEO ✅
- [x] Meta titles with keywords (60 chars)
- [x] Meta descriptions (155-160 chars)
- [x] Schema.org JSON-LD markup
- [x] Open Graph tags
- [x] Twitter Cards
- [x] XML sitemap
- [x] Robots.txt
- [x] Canonical URLs
- [x] SSL/HTTPS ready
- [x] Mobile responsive
- [x] Fast page load
- [x] Image optimization with alt text

### Content SEO (To Do)
- [ ] Write keyword-rich content
- [ ] Add internal linking
- [ ] Create blog posts (1000+ words)
- [ ] Add video transcriptions
- [ ] Optimize image alt text with keywords
- [ ] Create location-specific content (if applicable)

### Off-Site SEO (To Do)
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Build backlinks
- [ ] Submit to music directories
- [ ] Get playlist placements
- [ ] Get press coverage

---

## 🚀 Performance Optimization

### Implemented ✅
- [x] Next.js automatic code splitting
- [x] Image optimization (WebP/AVIF)
- [x] Lazy loading images
- [x] Compressed assets
- [x] Minified CSS/JS
- [x] Tree-shaking unused code

### Recommended Next Steps
- [ ] Implement CDN (Vercel, CloudFlare)
- [ ] Enable HTTP/2
- [ ] Set up caching headers
- [ ] Optimize web fonts
- [ ] Implement service worker for PWA
- [ ] Monitor Core Web Vitals

---

## 📱 Social Media Integration

Update these links throughout the site:

- **Spotify**: Add artist ID to streaming links
- **Apple Music**: Add artist ID
- **YouTube**: Add channel URL
- **Instagram**: Update handle in footer
- **Twitter/X**: Update handle
- **TikTok**: Add profile link
- **Facebook**: Add page URL
- **SoundCloud**: Add profile URL

---

## 📧 Email Marketing Setup

Recommended email service providers:
- **Mailchimp** - Easy to use, free tier available
- **ConvertKit** - Great for creators
- **Klaviyo** - Advanced segmentation

Steps:
1. Create account with provider
2. Generate API key
3. Add to `.env.local`
4. Update Join component with API integration
5. Create welcome email series

---

## 🎤 Music Platform Setup

### Streaming Platforms
- [ ] Spotify for Artists (claim profile)
- [ ] Apple Music for Artists
- [ ] YouTube Music
- [ ] Amazon Music for Artists
- [ ] Get verification badges

### Distribution
Use a distributor to get music on all platforms:
- **DistroKid**
- **CD Baby**
- **TuneCore**

---

## 🛒 E-commerce Integration (Optional)

For merchandise sales, consider:

- **Shopify** - Full e-commerce platform
- **Printful** - Print-on-demand
- **Big Cartel** - Simple artist-friendly store
- **Bandcamp** - Music + merch combined

---

## 📈 Analytics & Tracking

### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`
4. Verify tracking in GA4 real-time view

### Google Search Console
1. Add property at [search.google.com/search-console](https://search.google.com/search-console)
2. Verify domain ownership
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`
4. Monitor search performance

### Key Metrics to Track
- Organic search traffic
- Bounce rate
- Session duration
- Email signups
- Streaming clicks
- Ticket purchases
- Social media referrals

---

## 🚀 Deployment

### Recommended: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy!

Benefits:
- Automatic deployments on push
- Preview deployments for branches
- Built-in CDN
- Optimized for Next.js
- Free SSL certificate

### Alternative: Netlify, AWS, DigitalOcean

Follow their respective Next.js deployment guides.

---

## 🔧 Development Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm start            # Start production server

# Utilities
node generate-index.js  # Generate site index
```

---

## 📝 Content Management

### Adding New Blog Posts
1. Update `components/Blog.tsx` with new posts
2. Consider migrating to MDX or CMS for easier management
3. Create individual blog post pages in `app/blog/[slug]/`

### Adding New Albums
1. Update `components/Music.tsx` albums array
2. Add cover art to `assets/` folder
3. Add streaming platform URLs

### Adding Tour Dates
1. Update `components/Tours.tsx` tourDates array
2. Include venue, date, city, ticket URL
3. Add schema markup for SEO

---

## 🎨 Customization

### Colors
Update brand colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      brand: {
        purple: '#8b5cf6',
        pink: '#ec4899',
        // Add your colors
      },
    },
  },
}
```

### Fonts
Add custom fonts in `app/layout.tsx` or `globals.css`

### Images
Replace placeholder images in `assets/` folder with your own

---

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in `public/assets/` or `assets/`
- Check file paths (case-sensitive)
- Verify Next.js image domains in `next.config.js`

### Environment variables not working
- Prefix public vars with `NEXT_PUBLIC_`
- Restart dev server after changes
- Check `.env.local` exists

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### SEO Tools
- Google Search Console
- Google Analytics
- Ahrefs / SEMrush
- Screaming Frog

### Music Industry
- Spotify for Artists
- Apple Music for Artists
- DistroKid / CD Baby

---

## 📄 License

© 2025 Laz Army Records. All rights reserved.

---

## 🤝 Support

For questions or support:
- Email: contact@lazarmyrecords.com
- Website: [lazarmyrecords.com](https://lazarmyrecords.com)

---

**Built with ❤️ for the music community**
