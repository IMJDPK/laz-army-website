import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-6'>
      <div className='max-w-2xl text-center'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4'>
            404
          </h1>
          <h2 className='text-4xl font-bold mb-4'>Page Not Found</h2>
          <p className='text-xl text-gray-400 mb-8'>
            Looks like this track got lost in the mix. Let's get you back to the music.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 inline-block'
          >
            Go Home
          </Link>
          <Link
            href='/#music'
            className='bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 inline-block'
          >
            Explore Music
          </Link>
        </div>

        <div className='mt-12 pt-8 border-t border-neutral-800'>
          <p className='text-gray-500 text-sm'>
            Error Code: 404 • Page Not Found
          </p>
        </div>
      </div>
    </div>
  )
}
