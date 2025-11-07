export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'Spotify',
      url: process.env.NEXT_PUBLIC_SPOTIFY_URL || 'https://open.spotify.com/artist/5KZfRaQHfjizCZsoRV9vqA',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#1DB954"/>
        </svg>
      ),
    },
    {
      name: 'Apple Music',
      url: process.env.NEXT_PUBLIC_APPLE_MUSIC_URL || 'https://music.apple.com/us/artist/lazarus/1558898100',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="appleMusicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fa57c1" />
              <stop offset="50%" stopColor="#7b72ff" />
              <stop offset="100%" stopColor="#46cdfb" />
            </linearGradient>
          </defs>
          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043a5.98 5.98 0 0 0-1.529-.707 7.505 7.505 0 0 0-2.117-.18c-1.87.04-3.74.022-5.608.012a5.33 5.33 0 0 0-2.186.365c-1.564.648-2.61 1.885-3.14 3.527-.225.693-.32 1.41-.32 2.133.004 3.095.005 6.19 0 9.285a6.001 6.001 0 0 0 .28 1.913c.399 1.308 1.247 2.257 2.427 2.917.742.416 1.547.62 2.389.68.456.032.913.018 1.37.018h5.693c.717 0 1.428-.04 2.123-.235 1.259-.354 2.21-1.09 2.836-2.245.434-.8.62-1.67.668-2.572.012-.228.017-.456.017-.684V6.124h-.003zm-11.957 8.923c-.868 1.075-2.4 1.167-3.328.207-.928-.96-.867-2.654.132-3.673a2.524 2.524 0 0 1 1.742-.774c.457-.019.893.086 1.296.315.174.099.291.025.417-.104.459-.469.928-.928 1.39-1.39.11-.11.167-.228.098-.395a3.729 3.729 0 0 0-.878-1.15c-.943-.827-2.068-1.118-3.291-1.02a5.072 5.072 0 0 0-3.516 1.809 4.675 4.675 0 0 0-1.059 2.904c-.084 1.458.474 2.686 1.608 3.66.956.821 2.064 1.13 3.302 1.06 1.155-.065 2.157-.553 2.96-1.429.098-.107.198-.213.3-.316.096-.097.098-.18.004-.278-.485-.503-.963-1.013-1.444-1.519a.315.315 0 0 0-.233-.089v.002zm8.336-5.674c-.003.095-.016.182-.04.267a1.15 1.15 0 0 1-.238.456c-.09.1-.207.13-.335.085a.548.548 0 0 1-.313-.376 1.015 1.015 0 0 1-.033-.238c0-1.515 0-3.03.002-4.544 0-.179-.05-.286-.226-.37-.618-.296-1.237-.59-1.859-.877a.296.296 0 0 0-.23-.008c-.79.287-1.58.577-2.368.87-.155.058-.234.152-.233.32.003 2.584 0 5.166.005 7.75 0 .08-.012.159-.03.237a1.124 1.124 0 0 1-.26.503c-.09.097-.204.124-.33.076a.548.548 0 0 1-.315-.38 1.12 1.12 0 0 1-.031-.258c0-2.584 0-5.168-.002-7.752 0-.253.087-.42.324-.53 1.22-.567 2.437-1.143 3.657-1.712.145-.068.274-.063.42.005.596.28 1.195.557 1.794.833.59.272 1.18.545 1.774.81.157.07.246.178.245.354-.002 1.617 0 3.233-.003 4.85l.004-.002z" fill="url(#appleMusicGrad)"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/lazdetroit/',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <defs>
            <radialGradient id="instagramGrad" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" fill="url(#instagramGrad)"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@LazDetroit',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/LazDetroit',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://www.tiktok.com/@lazdetroit',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#EE1D52"/>
          <path d="M9.68 12.77a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.83 4.83 0 0 1-3.77-4.25h-3.45v13.67a2.89 2.89 0 0 1-3.73 2.77z" fill="#69C9D0"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className='mt-16 pt-8 border-t border-neutral-800'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Social Links */}
        <div className='flex justify-center gap-6 mb-6'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='transform hover:scale-110 transition-transform duration-300'
              aria-label={`Follow us on ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className='flex flex-wrap justify-center gap-6 mb-6 text-sm'>
          <a href='#music' className='text-neutral-400 hover:text-white transition-colors'>Music</a>
          <a href='#blog' className='text-neutral-400 hover:text-white transition-colors'>News</a>
          <a href='#tour' className='text-neutral-400 hover:text-white transition-colors'>Tour</a>
          <a href='#merch' className='text-neutral-400 hover:text-white transition-colors'>Merch</a>
          <a href='#contact' className='text-neutral-400 hover:text-white transition-colors'>Contact</a>
          <a href='/privacy' className='text-neutral-400 hover:text-white transition-colors'>Privacy</a>
          <a href='/terms' className='text-neutral-400 hover:text-white transition-colors'>Terms</a>
        </div>

        {/* Copyright */}
        <div className='text-center text-neutral-500 text-sm pb-6'>
          <p>© {currentYear} Laz Army Records. All rights reserved.</p>
          <p className='text-xs mt-2'>Made with ❤️ for the culture</p>
          <p className='text-xs mt-3'>
            <span className='text-neutral-600'>Site crafted by </span>
            <a 
              href='https://www.imjd.asia' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-purple-400 hover:text-purple-300 font-medium transition-colors'
            >
              IMJD.asia
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}