import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Latest news, updates, and behind-the-scenes content from Lazarus and Laz Army Records.',
}

// TODO: Replace with actual blog posts from CMS or MDX files
const blogPosts = [
  {
    slug: 'behind-the-scenes-latest-album',
    title: 'Behind the Scenes: Creating My Latest Album',
    excerpt: 'Take a look at the creative process behind my newest release, from writing to production to the final mix.',
    date: '2024-10-15',
    image: '/assets/Banner11.jpeg',
    category: 'Music Production',
  },
  {
    slug: 'balancing-medicine-music',
    title: 'Balancing Medicine and Music: My Journey',
    excerpt: 'How I navigate being both a physician and a hip hop artist, and what drives me in both worlds.',
    date: '2024-09-28',
    image: '/assets/Banner12.jpeg',
    category: 'Personal Story',
  },
  {
    slug: 'new-tour-dates-announcement',
    title: 'Announcing New Tour Dates',
    excerpt: 'Excited to announce upcoming shows in major cities. Get your tickets before they sell out!',
    date: '2024-09-10',
    image: '/assets/Banner13.jpeg',
    category: 'Tour',
  },
]

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
            Blog & News
          </h1>
          <p className='text-xl text-gray-400'>
            Behind-the-scenes, updates, and stories from the journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className='bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
            >
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                  loading='lazy'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className='p-6'>
                <time className='text-gray-500 text-sm' dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                
                <h2 className='text-2xl font-bold text-white mt-2 mb-3 line-clamp-2'>
                  {post.title}
                </h2>
                
                <p className='text-gray-400 mb-4 line-clamp-3'>
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className='inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300'
                >
                  Read More
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Home */}
        <div className='text-center'>
          <Link
            href='/'
            className='inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300'
          >
            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
