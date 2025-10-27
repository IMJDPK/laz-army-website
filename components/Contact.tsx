'use client'

import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const whatsappNumber = '17347782556' // +1 734 778 2556 formatted for WhatsApp

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}${formData.subject ? `%0A*Subject:* ${encodeURIComponent(formData.subject)}` : ''}%0A*Message:*%0A${encodeURIComponent(formData.message)}`

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id='contact' className='p-8 bg-neutral-900 rounded-xl border border-neutral-800'>
      <h4 className='text-2xl font-bold mb-2'>Contact & Booking</h4>
      <p className='text-sm text-neutral-400 mb-6'>
        Get in touch for bookings, collaborations, or press inquiries
      </p>

      {/* Quick Contact Info */}
      <div className='mb-6 p-4 bg-black/40 rounded-lg border border-yellow-400/20'>
        <p className='text-sm text-neutral-300 mb-2'>
          <strong className='text-yellow-400'>📱 WhatsApp:</strong>{' '}
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-yellow-400 transition-colors'
          >
            +1 734 778 2556
          </a>
        </p>
        <p className='text-xs text-neutral-400'>
          Click to chat directly on WhatsApp or use the form below
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>
              Name <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='w-full p-3 rounded-lg bg-black border border-neutral-700 focus:border-yellow-400 focus:outline-none transition-colors'
              placeholder='Your name'
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>
              Email <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='w-full p-3 rounded-lg bg-black border border-neutral-700 focus:border-yellow-400 focus:outline-none transition-colors'
              placeholder='your@email.com'
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-1'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className='w-full p-3 rounded-lg bg-black border border-neutral-700 focus:border-yellow-400 focus:outline-none transition-colors'
            placeholder='What is this about?'
          />
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>
            Message <span className='text-red-500'>*</span>
          </label>
          <textarea
            id='message'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className='w-full p-3 rounded-lg bg-black border border-neutral-700 focus:border-yellow-400 focus:outline-none transition-colors resize-none'
            placeholder='Your message...'
            required
          />
        </div>

        {/* Status Messages - Removed since form now redirects to WhatsApp */}

        <button
          type='submit'
          className='w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Send via WhatsApp
        </button>
      </form>

      <p className='text-xs text-neutral-500 mt-4 text-center'>
        Your message will open in WhatsApp for instant communication
      </p>
    </section>
  )
}