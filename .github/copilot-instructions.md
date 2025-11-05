## Laz Army Website — Copilot / AI Agent Instructions

This file gives concise, actionable guidance to AI coding agents working on this repository. Refer to the specific files below for examples and authoritative behavior.

### 1. Architecture Overview
This is a **musician's promotional website** for Lazarus (hip-hop artist and physician) built with:
- **Next.js 14 App Router** with TypeScript (`app/` directory structure)
- **Single-page layout** composed from modular components (`components/`)
- **SEO-first approach**: comprehensive metadata, Schema.org markup, analytics tracking
- **Performance optimized**: Next.js Image, lazy loading, WebP/AVIF formats

Key architectural decisions:
- Homepage (`app/page.tsx`) orchestrates all sections in a single scrollable layout
- Each major section is a standalone component (Music, Tours, Blog, etc.)
- Client-side navigation uses scroll-to-anchor pattern for smooth UX

### 2. Build & Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm start           # Start production server
node generate-index.js  # Generate site content index
```

**Production Deployment:**
- **Live on Vercel** - Auto-deploys from main branch commits
- **Environment variables** must be set in Vercel dashboard (not just `.env.local`)
- **Preview deployments** generated for all pull requests
- **Domain**: Check Vercel dashboard for current production URL

### 3. Critical Patterns & Conventions

**Component Architecture:**
- **Client vs Server Components**: Most components are client-side (`'use client'`) due to interactivity. Server components only in `app/` directory
- **Single Page Layout**: All sections rendered in `app/page.tsx` using CSS Grid (see 3-column layout pattern)
- **Fragment-based Navigation**: Header navigation uses `#music`, `#blog`, `#tour` anchors with `scrollIntoView()` - preserve these IDs

**SEO & Metadata Strategy:**
- **Root metadata** in `app/layout.tsx` includes Schema.org Person/MusicGroup markup for Lazarus
- **Dynamic base URL** via `NEXT_PUBLIC_SITE_URL` env var (critical for OG images, canonicals)
- **Analytics integration** via `components/Analytics.tsx` with GA4 tracking and custom events

**Image & Asset Patterns:**
- All assets in `/public/assets/` with **case-sensitive** filenames
- Use `OptimizedImage.tsx` wrapper for automatic WebP/AVIF conversion
- **Image changes deploy immediately** via Vercel-GitHub integration
- YouTube video IDs embedded directly in components (see `Music.tsx` videos array)
- **IMPORTANT**: Test image paths locally before committing (broken images go live instantly)
- **Unused assets**: New images in `/public/` may not be referenced in code yet - check usage before cleanup

**Styling Conventions:**
- **Tailwind CSS** with custom `lazGold` color (`#FFD700`)
- **Gradient text effects** extensively used (`bg-gradient-to-r from-yellow-400 to-orange-500`)
- **Dark theme** with black backgrounds and white/gold accents throughout

### 4. Key Files for Common Tasks

**Content Updates:**
- **Music/Videos**: `components/Music.tsx` - update `videos` array with YouTube video IDs
- **Tour dates**: `components/Tours.tsx` - modify `tourDates` array with venue/ticket info
- **Blog posts**: `components/Blog.tsx` - currently static, consider `app/blog/[slug]/` for dynamic routing
- **Merch items**: `components/Merch.tsx` - update product arrays

**Configuration & SEO:**
- **Artist metadata**: `app/layout.tsx` - Schema.org markup, social links, SEO meta tags
- **Analytics**: `components/Analytics.tsx` - GA4 integration with custom event tracking
- **Images**: `next.config.js` - allowed domains for external images (Spotify, YouTube, etc.)

### 5. Critical Implementation Details

**Build Configuration:**
- `swcMinify: false` in `next.config.js` - **DO NOT enable SWC minification** (causes build crashes)
- **Case-sensitive assets** - `/public/assets/` filenames must match exactly in imports
- **Environment variables** - All client vars need `NEXT_PUBLIC_` prefix, restart dev server after changes

**Data Flow Patterns:**
- **Static data arrays** in components (tours, videos, blog posts) - no external CMS currently
- **Analytics event tracking** - use `event()` function from `Analytics.tsx` for user interactions
- **Responsive layouts** - CSS Grid used in `app/page.tsx` (1-column mobile, 3-column desktop)

### 6. Development Workflow

**Making Changes:**
- Always test with `npm run dev` locally before committing
- Run `npm run build` to catch production-only issues
- **Vercel auto-deploys** from main branch via GitHub integration - commits go live immediately
- **Preview deployments** available for feature branches/PRs
- **For image changes**: Verify file paths and optimization locally first
- Update `IMPLEMENTATION_SUMMARY.md` when adding new features
- Add new environment variables to both `.env.example` AND Vercel dashboard

**Component Development:**
- Most new components should be client-side (`'use client'`) unless purely static
- Follow existing patterns in `components/` directory for styling and structure
- Maintain fragment IDs for navigation (music, blog, tour, contact, etc.)

### 7. Code Examples

**Replace/Add images safely:**
```bash
# 1. Add new image to /public/assets/ directory
# 2. Update component to reference new image path
# 3. Test locally: npm run dev
# 4. Verify image loads at http://localhost:3000
# 5. Commit - deploys immediately to production via Vercel
```

**Check for unused assets:**
```bash
# Find images in /public/assets/ not referenced in code
grep -r "Banner" components/ app/  # Search for image usage
node generate-index.js  # Update file inventory
```

**Add YouTube video to Music section:**
```tsx
// In components/Music.tsx, add to videos array:
{ id: '23', videoId: 'YOUR_YOUTUBE_ID', title: 'Song Title' }
```

**Add tour date:**
```tsx
// In components/Tours.tsx, add to tourDates array:
{
  id: '4',
  date: '2024-12-15',
  venue: 'Red Rocks Amphitheatre',
  city: 'Morrison',
  state: 'CO',
  country: 'USA',
  ticketUrl: 'https://ticketmaster.com/event/YOUR_EVENT_ID',
  status: 'on-sale'
}
```

**Track analytics event:**
```tsx
// Import from Analytics.tsx and call:
import { event } from './Analytics'
event({ action: 'stream_click', category: 'music', label: 'Spotify' })
```

### 8. Reference Documentation
- **Project status**: `README.md`, `IMPLEMENTATION_SUMMARY.md`, `PHASE2_COMPLETE.md`
- **Configuration**: `next.config.js`, `tailwind.config.js`, `package.json`
- **Asset management**: `/public/assets/` directory structure

**Need more detail?** Ask about: architecture patterns, SEO implementation, component structure, or build processes.
