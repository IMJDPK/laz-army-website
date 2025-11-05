# 📂 Laz Army Website - Complete File Index

*Generated: November 5, 2025*

## 🏗️ Project Structure Overview

```
laz_army_full_site/
├── .github/                     # GitHub configuration
├── app/                         # Next.js App Router pages
├── components/                  # React UI components
├── public/                      # Static assets
├── Configuration files         # Build, style, TypeScript configs
└── Documentation              # README, guides, summaries
```

---

## 📁 Directory Breakdown

### `.github/` - GitHub Integration
```
.github/
└── copilot-instructions.md     # AI agent guidance (this project)
```

### `app/` - Next.js App Router Pages
```
app/
├── blog/
│   └── page.tsx                # Blog listing page
├── privacy/
│   └── page.tsx                # Privacy policy page  
├── terms/
│   └── page.tsx                # Terms of service page
├── error.tsx                   # Error boundary component
├── globals.css                 # Global CSS styles
├── layout.tsx                  # Root layout with metadata & SEO
├── loading.tsx                 # Loading UI component
├── not-found.tsx               # 404 page component
├── page.tsx                    # Homepage (main landing page)
├── robots.ts                   # Robots.txt generation
└── sitemap.ts                  # XML sitemap generation
```

### `components/` - React UI Components
```
components/
├── About.tsx                   # Artist bio section
├── Analytics.tsx               # Google Analytics 4 integration
├── Blog.tsx                    # News/blog posts section
├── Contact.tsx                 # Contact form
├── Footer.tsx                  # Site footer with social links
├── Header.tsx                  # Navigation header with mobile menu
├── Hero.tsx                    # Hero section with banner
├── Join.tsx                    # Newsletter signup
├── LazArmyRecords.tsx          # Record label section
├── LazarusFrequency.tsx        # Artist frequency/brand section
├── Merch.tsx                   # Merchandise showcase
├── Music.tsx                   # Music videos & streaming links
├── OptimizedImage.tsx          # Next.js Image optimization wrapper
└── Tours.tsx                   # Tour dates with schema markup
```

### `public/` - Static Assets
```
public/
├── assets/                     # Images and media files
│   ├── Banner*.jpg/jpeg        # Various banner images (1-18)
│   ├── BannerN-*.jpg/JPG       # Additional banners (11-19)
│   ├── LAZARMY-A-Sqaure-highres.jpg  # High-res square logo
│   ├── Lazarmy-logo.png        # Main logo PNG
│   └── lazarmy-main-banner.jpg # Main website banner
└── site.webmanifest           # PWA manifest file
```

---

## 🔧 Configuration Files

| File | Purpose | Key Settings |
|------|---------|--------------|
| `next.config.js` | Next.js configuration | Image optimization, SWC disabled, compression |
| `tailwind.config.js` | Tailwind CSS setup | Custom `lazGold` color, content paths |
| `tsconfig.json` | TypeScript configuration | Strict mode, path mapping |
| `package.json` | Dependencies & scripts | Next.js 14, React 18, dev scripts |
| `postcss.config.js` | PostCSS for Tailwind | Tailwind and Autoprefixer plugins |
| `.env.example` | Environment template | GA ID, site URL, social handles |

---

## 📚 Documentation Files

| File | Description | Last Updated |
|------|-------------|--------------|
| `README.md` | Complete project documentation | ✅ Current |
| `QUICK_START.md` | Fast setup guide | ✅ Current |
| `IMPLEMENTATION_SUMMARY.md` | Feature completion status | ✅ Current |
| `PHASE2_COMPLETE.md` | Phase 2 implementation details | ✅ Current |
| `website-checklist.md` | Launch checklist | ✅ Current |
| `site-index.md` | Auto-generated file index | ✅ Current |

---

## 🎯 Key Entry Points for Development

### Primary Development Files
- **Homepage**: `app/page.tsx` - Main entry point, orchestrates all components
- **Root Layout**: `app/layout.tsx` - SEO metadata, Schema.org markup, Analytics
- **Navigation**: `components/Header.tsx` - Site navigation and mobile menu
- **Content Sections**: Individual components in `components/` directory

### Configuration Hotspots
- **Image Settings**: `next.config.js` - Image domains and optimization
- **Styling**: `tailwind.config.js` - Custom colors and design tokens
- **Environment**: `.env.example` - All required environment variables
- **SEO**: `app/layout.tsx` - Meta tags, Open Graph, Schema markup

### Asset Management
- **Images**: All in `public/assets/` directory (case-sensitive!)
- **Logo**: `Lazarmy-logo.png` (main brand logo)
- **Banners**: Multiple banner images for different sections

---

## 🚀 Build & Deployment Files

| File | Purpose | Notes |
|------|---------|-------|
| `package-lock.json` | Dependency lock file | Auto-generated, commit to repo |
| `next-env.d.ts` | Next.js TypeScript definitions | Auto-generated, do not edit |
| `generate-index.js` | File indexing utility | Run with `node generate-index.js` |

---

## 📊 File Count Summary

- **Total Files**: 79
- **React Components**: 15 (in `components/`)
- **App Router Pages**: 8 (in `app/`)
- **Image Assets**: 20+ (in `public/assets/`)
- **Config Files**: 6
- **Documentation**: 6

---

## 🔍 Quick File Finder

**Need to update...**
- **Content**: Look in `components/` directory
- **SEO/Metadata**: `app/layout.tsx`
- **Styling**: `tailwind.config.js` or component files
- **Images**: `public/assets/` directory
- **Analytics**: `components/Analytics.tsx`
- **Navigation**: `components/Header.tsx`
- **Build Settings**: `next.config.js`

**Documentation is in...**
- **Setup Guide**: `README.md` or `QUICK_START.md`
- **Feature Status**: `IMPLEMENTATION_SUMMARY.md`
- **Launch Checklist**: `website-checklist.md`
- **AI Guidance**: `.github/copilot-instructions.md`

---

*📝 This index is auto-generated. Run `node generate-index.js` to update `site-index.md` with current file structure.*