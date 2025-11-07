'use client'

import { useState, useEffect } from 'react'

interface Video {
  id: string
  videoId: string
  title: string
  views?: number
}

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  const formatViews = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toLocaleString()
  }

  return (
    <span className="font-bold tabular-nums">
      {formatViews(count)}{suffix}
    </span>
  )
}

export default function Music() {
  // Official YouTube videos from Lazarus channel - videoIds only
  const videoIds = [
    'et1IEh8AtYw', 'BiMWSfzmrpU', 'ReoSUfChqCg', 'c30SEWFWRyQ',
    'd-2UHwp8dl4', 'pmnjGk2TINE', 'VHFlPRdeSQ8', '2LOCu2o8K8Q',
    'Orhjjc5ksro', 'F9WQ94Gpmuk', 'XI_VjcfQCsQ', 'sueBQjjAx84',
    'UBtJS0Rn2mM', '-lQ9DPzizIA', 'ocZpL5Azi3s', 'LHKWL_mbReU',
    '2-TX9DZPB8g', 'MNqyLHDN2l4', '5ncjRG0f4JI', 'Hos57HFnrXw',
    'Qce1ZSthklo', '7tX0erxqjM0'
  ]

  const [videos, setVideos] = useState<Video[]>([])
  const [videoViews, setVideoViews] = useState<Record<string, number>>({})
  const [isLoadingViews, setIsLoadingViews] = useState(true)

  useEffect(() => {
    // Fetch real video titles from YouTube oEmbed API (no API key needed!)
    const fetchVideoTitles = async () => {
      const videoData: Video[] = await Promise.all(
        videoIds.map(async (videoId, index) => {
          try {
            const response = await fetch(
              `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
            )
            const data = await response.json()
            return {
              id: String(index + 1),
              videoId,
              title: data.title || `Video ${index + 1}`,
              views: Math.floor(Math.random() * 5000000) + 1000000 // Placeholder views
            }
          } catch (error) {
            return {
              id: String(index + 1),
              videoId,
              title: `Video ${index + 1}`,
              views: Math.floor(Math.random() * 5000000) + 1000000
            }
          }
        })
      )
      
      setVideos(videoData)
      
      // Set view counts
      const viewCounts: Record<string, number> = {}
      videoData.forEach(video => {
        if (video.views) {
          viewCounts[video.videoId] = video.views
        }
      })
      setVideoViews(viewCounts)
      setIsLoadingViews(false)
    }

    fetchVideoTitles()
  }, [])

  // Duplicate videos array for seamless loop
  const duplicatedVideos = [...videos, ...videos]

  // Highlight single track streaming links (Not To Be Defined – Lazarus & Rakim)
  const trackArtwork = 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/eb/10/74eb10b0-4ad3-9266-e53b-9cb1d30532a8/198704573620_Cover.jpg/512x512bb.jpg'
  const trackTitle = 'Not To Be Defined'
  const trackArtists = 'Lazarus & Rakim'
  const aggregatorUrl = 'https://song.link/NTBD'
  const platformLinks: { name: string; url: string; style: string }[] = [
    {
      name: 'Apple Music',
      url: 'https://geo.music.apple.com/pk/album/_/1822197901?i=1822197995&mt=1&app=music&ls=1&at=1000lHKX&ct=odesli_http&itscg=30200&itsct=odsl_m',
      style: 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/track/5liV4nnfyhIKgzJtdsYApy',
      style: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=et1IEh8AtYw',
      style: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'YouTube Music',
      url: 'https://music.youtube.com/watch?v=et1IEh8AtYw',
      style: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'Pandora',
      url: 'https://www.pandora.com/TR:166267843',
      style: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'More Platforms',
      url: aggregatorUrl,
      style: 'bg-purple-600 hover:bg-purple-700'
    }
  ]

  return (
    <section id="music" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Visually Appealing Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative line above */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fadeInUp">
            Official Music Videos
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light animate-fadeInUp animation-delay-200">
            Experience the visual artistry of Lazarus
          </p>
          
          {/* Decorative line below */}
          <div className="mt-6 flex items-center justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Featured Track Section */}
        <div className="mb-20 grid md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-1 flex flex-col">
            <div className="relative overflow-hidden rounded-xl border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
              <img
                src={trackArtwork}
                alt={`${trackTitle} cover art`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">{trackTitle}</h3>
                <p className="text-sm text-yellow-300 tracking-wide">{trackArtists}</p>
                {/* Animated View Counter */}
                {!isLoadingViews && videoViews['et1IEh8AtYw'] && (
                  <div className="mt-3 flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-semibold">
                      <AnimatedCounter value={videoViews['et1IEh8AtYw']} suffix="+ views & counting" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Stream the Latest Release
              </h4>
              <p className="text-gray-400 mb-6 max-w-prose">
                Tap a platform below to listen to <span className="text-yellow-300 font-medium">{trackTitle}</span> by {trackArtists}. These direct links
                open the official track. Use <span className="text-purple-400">More Platforms</span> for additional services (Audiomack, TIDAL, Deezer, etc.).
              </p>
              <div className="flex flex-wrap gap-3">
                {platformLinks.map(pl => (
                  <a
                    key={pl.name}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 ${pl.style} text-white px-5 py-3 rounded-full font-semibold text-sm shadow hover:shadow-lg transition-all`}
                    aria-label={`Listen on ${pl.name}`}
                  >
                    <span>{pl.name}</span>
                    <svg
                      className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 text-xs text-gray-500">
              <p>
                Link sources aggregated via <a href={aggregatorUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">song.link</a>. Some platforms may require account login or regional availability.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Scrolling Carousel with Fade Effects */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Top Fade Overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Bottom Fade Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="animate-scroll-vertical-slow space-y-6 py-8">
            {/* Create pairs of videos for 2-column layout */}
            {Array.from({ length: Math.ceil(duplicatedVideos.length / 2) }).map((_, pairIndex) => (
              <div key={`pair-${pairIndex}`} className="grid grid-cols-2 gap-6 px-4">
                {duplicatedVideos.slice(pairIndex * 2, pairIndex * 2 + 2).map((video, index) => (
                  <div
                    key={`${video.id}-${pairIndex}-${index}`}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black transition-all duration-300"
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-black">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={`Lazarus - ${video.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to default thumbnail or show gradient background
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          // Background gradient will show instead
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      
                      {/* Play Button Overlay */}
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Watch ${video.title} on YouTube`}
                      >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                    
                    {/* Video Title */}
                    <div className="p-3 md:p-4">
                      <h4 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-2">
                        {video.title}
                      </h4>
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={`https://www.youtube.com/watch?v=${video.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 text-xs md:text-sm hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                        >
                          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          Watch
                        </a>
                        {!isLoadingViews && videoViews[video.videoId] && (
                          <div className="flex items-center gap-1 text-gray-500">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs">
                              <AnimatedCounter value={videoViews[video.videoId]} />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@LazDetroit/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
