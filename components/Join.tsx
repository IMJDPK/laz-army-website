'use client'

import { useState, FormEvent } from 'react'
import { trackEmailSignup } from './Analytics'

export default function Join() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    try {
      // TODO: Replace with your actual email service API
      // Examples:
      // - Mailchimp: POST to /api/mailchimp
      // - ConvertKit: POST to /api/convertkit
      // - Your own backend: POST to /api/subscribe
      
      // Simulated API call - replace with real implementation
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Track signup event in analytics
      trackEmailSignup()
      
      setStatus('success')
      setMessage('Welcome to Laz Army! Check your email for confirmation.')
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className='p-8 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-700/30'>
      <div className='text-center mb-6'>
        <h4 className='text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
          Join the Laz Army
        </h4>
        <p className='text-neutral-300'>
          Get exclusive updates, early access to new releases, and special offers
        </p>
      </div>

      {/* Benefits */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <div className='text-center p-3 bg-black/30 rounded-lg'>
          <span className='text-2xl mb-2 block'>🎵</span>
          <p className='text-sm text-neutral-300'>Early Access to Music</p>
        </div>
        <div className='text-center p-3 bg-black/30 rounded-lg'>
          <span className='text-2xl mb-2 block'>🎟️</span>
          <p className='text-sm text-neutral-300'>Pre-sale Tickets</p>
        </div>
        <div className='text-center p-3 bg-black/30 rounded-lg'>
          <span className='text-2xl mb-2 block'>🎁</span>
          <p className='text-sm text-neutral-300'>Exclusive Gear Drops</p>
        </div>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className='mt-6'>
        <div className='flex flex-col sm:flex-row gap-3'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='your@email.com'
            required
            disabled={status === 'loading'}
            className='flex-1 p-3 rounded-lg bg-black border border-neutral-700 focus:border-yellow-400 focus:outline-none transition-colors disabled:opacity-50'
          />
          <button
            type='submit'
            disabled={status === 'loading'}
            className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {status === 'loading' ? 'Joining...' : 'Join Now'}
          </button>
        </div>

        {/* Status Messages */}
        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-center text-sm ${
              status === 'success'
                ? 'bg-green-900/30 border border-green-700 text-green-300'
                : 'bg-red-900/30 border border-red-700 text-red-300'
            }`}
          >
            {message}
          </div>
        )}
      </form>

      <p className='text-xs text-neutral-500 mt-4 text-center'>
        We respect your privacy. Unsubscribe anytime. Read our{' '}
        <a href='/privacy' className='text-yellow-400 hover:text-yellow-300 underline'>
          privacy policy
        </a>
        .
      </p>
    </section>
  )
}