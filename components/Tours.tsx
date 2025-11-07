'use client'

import Image from 'next/image'

interface TourDate {
  id: string
  date: string
  venue: string
  city: string
  state: string
  country: string
  ticketUrl?: string
  status: 'on-sale' | 'sold-out' | 'upcoming'
  backgroundImage?: string
}

export default function Tours() {
  // TODO: Replace with actual tour dates
  const tourDates: TourDate[] = [
    {
      id: '1',
      date: '2024-11-01',
      venue: 'Fox Theatre',
      city: 'Detroit',
      state: 'MI',
      country: 'USA',
      status: 'sold-out',
  backgroundImage: '/assets/Banner11.jpeg',
    },
    {
      id: '2',
      date: '2024-11-08',
      venue: 'The Metro',
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-12.JPG',
    },
    {
      id: '3',
      date: '2024-11-15',
      venue: 'Brooklyn Steel',
      city: 'Brooklyn',
      state: 'NY',
      country: 'USA',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-13.JPG',
    },
    {
      id: '4',
      date: '2024-11-22',
      venue: 'Coca-Cola Arena',
      city: 'Dubai',
      state: 'Dubai',
      country: 'UAE',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-14.JPEG',
    },
    {
      id: '5',
      date: '2024-11-29',
      venue: 'Pakistan National Council of Arts',
      city: 'Islamabad',
      state: 'ICT',
      country: 'Pakistan',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-15.jpg',
    },
    {
      id: '6',
      date: '2024-12-05',
      venue: 'Doha Exhibition Center',
      city: 'Doha',
      state: 'Doha',
      country: 'Qatar',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-16.jpg',
    },
    {
      id: '7',
      date: '2024-12-12',
      venue: 'Afrika Shrine',
      city: 'Lagos',
      state: 'Lagos',
      country: 'Nigeria',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-17.jpg',
    },
    {
      id: '8',
      date: '2024-12-19',
      venue: 'Carnivore Grounds',
      city: 'Nairobi',
      state: 'Nairobi',
      country: 'Kenya',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-18.jpg',
    },
    {
      id: '9',
      date: '2024-12-27',
      venue: 'Cape Town International Convention Centre',
      city: 'Cape Town',
      state: 'Western Cape',
      country: 'South Africa',
      status: 'sold-out',
      backgroundImage: '/assets/BannerN-19.jpg',
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const day = date.getDate()
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
    return { month, day, weekday }
  }

  const statusStyles = {
    'on-sale': 'bg-green-600 text-white',
    'sold-out': 'bg-gradient-to-r from-red-600 to-red-700 text-white animate-pulse',
    'upcoming': 'bg-blue-600 text-white',
  }

  const statusLabels = {
    'on-sale': 'Tickets Available',
    'sold-out': 'SOLD OUT',
    'upcoming': 'Tickets Coming Soon',
  }

  return (
    <section id="tour" className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
            Tour Dates
          </h2>
          <p className="text-gray-400 text-lg">
            Catch Lazarus live - get your tickets before they're gone!
          </p>
        </div>

        {tourDates.length > 0 ? (
          <div className="space-y-4">
            {tourDates.map((show) => {
              const { month, day, weekday } = formatDate(show.date)
              
              return (
                <div
                  key={show.id}
                  className="relative bg-gray-800 rounded-lg overflow-hidden p-6 hover:bg-gray-750 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  itemScope
                  itemType="https://schema.org/MusicEvent"
                >
                  {/* Background Image */}
                  {show.backgroundImage && (
                    <>
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={show.backgroundImage}
                          alt={`${show.venue} - ${show.city}`}
                          fill
                          className="object-cover opacity-20"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-1"></div>
                    </>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Date */}
                    <div className="flex items-center gap-6">
                      <div className="text-center min-w-[80px]">
                        <div className="text-4xl font-bold text-white">
                          <time itemProp="startDate" dateTime={show.date}>
                            {day}
                          </time>
                        </div>
                        <div className="text-sm text-gray-400 uppercase">{month}</div>
                        <div className="text-xs text-gray-500">{weekday}</div>
                      </div>

                      {/* Venue Details */}
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-bold text-white mb-1"
                          itemProp="name"
                        >
                          {show.venue}
                        </h3>
                        <div
                          className="text-gray-400 flex flex-wrap items-center gap-1"
                          itemProp="location"
                          itemScope
                          itemType="https://schema.org/Place"
                        >
                          <span itemProp="address" className="">
                            {show.city}, {show.state}
                          </span>
                          <span className="text-gray-500">• {show.country}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status and Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:min-w-[250px] md:justify-end">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          statusStyles[show.status]
                        }`}
                      >
                        {statusLabels[show.status]}
                      </span>
                      
                      {show.status === 'on-sale' && show.ticketUrl && (
                        <a
                          href={show.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                          itemProp="url"
                        >
                          Get Tickets
                        </a>
                      )}
                      
                      {show.status === 'sold-out' && (
                        <div
                          aria-label="Sold Out"
                          className="relative inline-flex items-center gap-2 bg-red-700/20 text-red-400 font-bold py-2 px-5 rounded-full border border-red-600/40"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="tracking-wider">SOLD OUT</span>
                        </div>
                      )}
                      
                      {show.status === 'upcoming' && (
                        <button
                          disabled
                          className="bg-gray-600 text-gray-400 font-bold py-2 px-6 rounded-full cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Tour Dates Scheduled
            </h3>
            <p className="text-gray-400 mb-6">
              Check back soon for upcoming shows or join our mailing list to be notified first!
            </p>
            <a
              href="#join"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Join Mailing List
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
