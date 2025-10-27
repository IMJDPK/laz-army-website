import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

/**
 * Optimized Image Component
 * Uses Next.js Image component for automatic optimization, lazy loading, and WebP conversion
 * 
 * Features:
 * - Automatic format optimization (WebP/AVIF)
 * - Lazy loading by default
 * - Responsive sizing
 * - Blur placeholder
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  objectFit = 'cover',
}: OptimizedImageProps) {
  // For external images or when dimensions are not provided
  if (!width || !height) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit }}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCIAA=="
        />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCIAA=="
    />
  )
}

// Helper function to generate optimized image URLs
export function getOptimizedImageUrl(src: string, width: number, quality = 75) {
  // Next.js will automatically optimize images in the public/assets folder
  return `${src}?w=${width}&q=${quality}`
}

// Preset image configurations for common use cases
export const ImagePresets = {
  hero: {
    width: 1920,
    height: 1080,
    quality: 90,
  },
  albumCover: {
    width: 800,
    height: 800,
    quality: 85,
  },
  thumbnail: {
    width: 400,
    height: 400,
    quality: 75,
  },
  banner: {
    width: 1200,
    height: 630,
    quality: 85,
  },
  logo: {
    width: 300,
    height: 300,
    quality: 90,
  },
}
