import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative h-80 rounded-xl overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/assets/lazarmy-main-banner.jpg'
        alt='Lazarus - Hip Hop Artist and Physician'
        fill
        priority
        className='object-cover'
        sizes='(max-width: 1280px) 100vw, 1280px'
      />
      
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80' />
    </section>
  )
}