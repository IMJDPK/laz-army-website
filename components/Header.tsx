'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header({ siteTitle }: { siteTitle: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Music', href: '#music' },
    { name: 'News', href: '#blog' },
    { name: 'Tour', href: '#tour' },
    { name: 'Merch', href: '#merch' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className='sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neutral-800'>
      <nav className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='group'>
            <h1 className='text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
              {siteTitle}
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className='text-neutral-300 hover:text-white font-medium transition-colors duration-300 relative group'
              >
                {link.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300' />
              </a>
            ))}
            <a
              href='#join'
              onClick={(e) => handleNavClick(e, '#join')}
              className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 py-2 rounded-full transition-all duration-300'
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-white p-2'
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-neutral-800 pt-4'>
            <div className='flex flex-col gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className='text-neutral-300 hover:text-white font-medium transition-colors duration-300 py-2'
                >
                  {link.name}
                </a>
              ))}
              <a
                href='#join'
                onClick={(e) => handleNavClick(e, '#join')}
                className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-3 rounded-full text-center transition-all duration-300'
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}