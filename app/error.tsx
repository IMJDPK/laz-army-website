'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-6'>
      <div className='max-w-2xl text-center'>
        <div className='mb-8'>
          <div className='text-6xl mb-6'>⚠️</div>
          <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent'>
            Something Went Wrong
          </h2>
          <p className='text-xl text-gray-400 mb-8'>
            Looks like we hit a wrong note. Let's try that again.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={reset}
            className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300'
          >
            Try Again
          </button>
          <a
            href='/'
            className='bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 inline-block'
          >
            Go Home
          </a>
        </div>

        {error.digest && (
          <div className='mt-8 pt-8 border-t border-neutral-800'>
            <p className='text-gray-500 text-sm'>Error ID: {error.digest}</p>
          </div>
        )}
      </div>
    </div>
  )
}
