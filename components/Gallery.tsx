'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const images: GalleryImage[] = [
    { id: '1', src: '/assets/Banner1.jpg', alt: 'Lazarus Performance', category: 'performance' },
    { id: '2', src: '/assets/Banner2.jpg', alt: 'Studio Session', category: 'studio' },
    { id: '3', src: '/assets/Banner3.jpg', alt: 'Behind the Scenes', category: 'behind-scenes' },
    { id: '4', src: '/assets/Banner17.jpeg', alt: 'Live Concert', category: 'performance' },
    { id: '5', src: '/assets/Banner18.jpeg', alt: 'Recording Process', category: 'studio' },
    { id: '6', src: '/assets/BannerN-14.JPEG', alt: 'Music Video Shoot', category: 'video' },
    { id: '7', src: '/assets/BannerN-15.jpg', alt: 'Fan Meet & Greet', category: 'fans' },
    { id: '8', src: '/assets/BannerN-16.jpg', alt: 'Album Cover Shoot', category: 'studio' },
    { id: '9', src: '/assets/BannerN-17.jpg', alt: 'Live Performance', category: 'performance' },
    { id: '10', src: '/assets/BannerN-18.jpg', alt: 'Backstage Moments', category: 'behind-scenes' },
    { id: '11', src: '/assets/BannerN-19.jpg', alt: 'Community Event', category: 'community' },
  { id: '12', src: '/assets/New Banner1.JPG', alt: 'Professional Portrait', category: 'portrait' },
  ]
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'performance', label: 'Live Shows' },
    { id: 'studio', label: 'Studio' },
    { id: 'behind-scenes', label: 'Behind Scenes' },
    { id: 'video', label: 'Music Videos' },
    { id: 'fans', label: 'With Fans' },
    { id: 'community', label: 'Community' },
    { id: 'portrait', label: 'Portrait' },
  ]
  
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Visual Journey
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Capturing moments from the studio to the stage
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}