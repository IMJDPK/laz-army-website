/**
 * Environment Variable Validation and Centralized Access
 * 
 * This file provides type-safe access to environment variables
 * and validates them during development.
 */

export const env = {
  // Site Configuration
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  // Analytics
  GA_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-XLSDCP2LE0',
  
  // API Keys
  YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  
  // Social Media
  SPOTIFY_ARTIST_ID: process.env.NEXT_PUBLIC_SPOTIFY_ARTIST_ID || '5KZfRaQHfjizCZsoRV9vqA',
  APPLE_MUSIC_ARTIST_ID: process.env.NEXT_PUBLIC_APPLE_MUSIC_ARTIST_ID,
  YOUTUBE_CHANNEL_ID: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID,
  
  // Contact
  WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567',
  
  // Environment
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
}

// Validate environment variables in development
if (env.IS_DEVELOPMENT) {
  const warnings: string[] = []
  
  if (!process.env.NEXT_PUBLIC_YOUTUBE_API_KEY) {
    warnings.push('⚠️  NEXT_PUBLIC_YOUTUBE_API_KEY is not set - video data will use fallback counts')
  }
  
  if (!process.env.NEXT_PUBLIC_APPLE_MUSIC_ARTIST_ID) {
    warnings.push('⚠️  NEXT_PUBLIC_APPLE_MUSIC_ARTIST_ID is not set')
  }
  
  if (!process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID) {
    warnings.push('⚠️  NEXT_PUBLIC_YOUTUBE_CHANNEL_ID is not set')
  }
  
  if (warnings.length > 0) {
    console.log('\n🔧 Environment Variable Warnings:')
    warnings.forEach(w => console.log(w))
    console.log('\nTo fix: Create .env.local and add the missing variables\n')
  }
}

// Type-safe helper to check if an env var exists
export function hasEnvVar(key: keyof typeof env): boolean {
  return env[key] !== undefined && env[key] !== ''
}
