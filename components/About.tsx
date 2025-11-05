import Image from 'next/image'

export default function About() {
  return (
    <aside className='p-6 bg-neutral-900 rounded-xl border border-neutral-800'>
      <div className='flex flex-col items-center mb-4'>
        <div className='relative w-32 h-32 rounded-2xl overflow-hidden mb-4 ring-4 ring-yellow-400/20'>
          <Image
            src='/assets/LAZARMY-A-Sqaure-highres.jpg'
            alt='Lazarus - Laz Army Records Logo'
            fill
            className='object-cover'
            sizes='128px'
          />
        </div>
        <h3 className='text-2xl font-bold text-center'>About Lazarus</h3>
      </div>
      
      <div className='space-y-3 text-neutral-300'>
        <p>
          <strong className='text-white'>Lazarus</strong> is Kamran Rashid Khan — a Detroit, Michigan–born American rapper, songwriter, and practicing physician of Pakistani descent. He’s known for surgical-level lyricism and a career that bridges medicine and hip‑hop.
        </p>
        <p className='text-sm'>
          He earned a B.S. in Biological Sciences from Wayne State University and a medical degree from the Michigan State University College of Osteopathic Medicine (2010), later specializing in hospital medicine. While in school, he built a reputation in Detroit’s freestyle and battle circuits and appeared in Discovery Channel’s documentary "The Real 8 Mile." 
        </p>
        <p className='text-sm'>
          Highlights include his debut album <em>Chapter One: The Prince Who Would Be King</em> (2007), collaborations with Bizarre (D12), Royce da 5'9", and Ghostface Killah, touring with Wu‑Tang Clan, and the award‑winning single "Open Heart Surgery" (Underground Music Awards, 2015). In 2020 he released "You Already Know" featuring Rick Ross and Gucci Mane and concurrently served on the front lines as a physician during COVID‑19.
        </p>
        <p className='text-sm text-yellow-400 font-semibold'>
          Founder of Laz Army Records · <a href='https://en.wikipedia.org/wiki/Lazarus_(rapper)' target='_blank' rel='noopener noreferrer' className='underline decoration-dotted hover:text-yellow-300'>Source: Wikipedia</a>
        </p>
      </div>
    </aside>
  )
}