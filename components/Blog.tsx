'use client'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category: string
}

export default function Blog() {
  // TODO: Replace with actual blog posts - consider using MDX or a CMS
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Behind the Scenes: Creating My Latest Album',
      excerpt: 'Take a look at the creative process behind my newest release, from writing to production to the final mix.',
      date: '2024-10-15',
      image: '/assets/Banner-19.jpeg',
      slug: 'behind-the-scenes-latest-album',
      category: 'Music Production',
    },
    {
      id: '2',
      title: 'Balancing Medicine and Music: My Journey',
      excerpt: 'How I navigate being both a physician and a hip hop artist, and what drives me in both worlds.',
      date: '2024-09-28',
      image: '/assets/Balancing-medicine.jpeg',
      slug: 'balancing-medicine-music',
      category: 'Personal Story',
    },
    {
      id: '3',
      title: 'Announcing New Tour Dates',
      excerpt: 'Excited to announce upcoming shows in major cities. Get your tickets before they sell out!',
      date: '2024-09-10',
      image: '/assets/Banner13.jpeg',
      slug: 'new-tour-dates-announcement',
      category: 'Tour',
    },
    {
      id: '4',
      title: 'Studio Sessions: Recording Process',
      excerpt: 'Inside the studio capturing the raw energy and creativity that goes into each track.',
      date: '2024-08-22',
      image: '/assets/Banner-20.jpeg',
      slug: 'studio-sessions-recording',
      category: 'Music Production',
    },
    {
      id: '5',
      title: 'Community Outreach & Medical Work',
      excerpt: 'Giving back to the community through medical missions and health awareness campaigns.',
      date: '2024-08-05',
      image: '/assets/community-outreach.png',
      slug: 'community-outreach-medical',
      category: 'Community',
    },
    {
      id: '6',
      title: 'Collaboration Stories',
      excerpt: 'Working with talented artists and producers to create something truly special.',
      date: '2024-07-18',
      image: '/assets/collaboration.png',
      slug: 'collaboration-stories',
      category: 'Music Production',
    },
  ]

  return (
    <section id="blog" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            News & Updates
          </h2>
          <p className="text-gray-400 text-lg">
            Stay updated with the latest news, tour dates, and behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <time className="text-gray-500 text-sm" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                
                <h3 className="text-2xl font-bold text-white mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            More stories coming soon - Stay tuned!
          </p>
        </div>
      </div>
    </section>
  )
}
