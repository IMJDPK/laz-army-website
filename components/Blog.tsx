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
      image: '/assets/Banner11.jpeg',
      slug: 'behind-the-scenes-latest-album',
      category: 'Music Production',
    },
    {
      id: '2',
      title: 'Balancing Medicine and Music: My Journey',
      excerpt: 'How I navigate being both a physician and a hip hop artist, and what drives me in both worlds.',
      date: '2024-09-28',
      image: '/assets/Banner12.jpeg',
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
          <a
            href="/blog"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}
