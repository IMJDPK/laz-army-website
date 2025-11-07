import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Collaboration Stories | Lazarus',
  description: 'Working with talented artists and producers to create something truly special.',
}

export default function CollaborationStoriesPost() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/#blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>

        <header className="mb-12">
          <span className="bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Music Production
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-4">
            Collaboration Stories
          </h1>
          <time className="text-gray-400" dateTime="2024-07-18">
            July 18, 2024
          </time>
        </header>

        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/assets/collaboration.png"
            alt="In the lab cooking something epic with Grammy Award-winning Aftermath producer Fred Wreck"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            In the lab cooking something epic with Grammy Award-winning Aftermath producer @fredwreck. When legends collaborate, magic happens. Let me take you behind the scenes of some game-changing musical partnerships.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Working with Fred Wreck</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Fred Wreck—Grammy Award winner, Aftermath Records legend, the man behind hits for Snoop, Eminem, Dr. Dre, and countless others. Being in the studio with him is like medical school for music production. Every session is a masterclass.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            What struck me immediately was his attention to detail. He approaches beats like I approach patient diagnoses—methodically, precisely, leaving nothing to chance. We spent hours on a single snare sound, making sure it hit exactly right. That's the level of excellence required when you're working at the top.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Rakim Experience</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            "Not To Be Defined" featuring Rakim—one of the greatest moments of my career. Rakim is literally one of the founding fathers of complex lyricism in hip-hop. To have him on my track? That's validation on a whole different level.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            What I learned from Rakim: simplicity is sophistication. He doesn't overcomplicate bars. Every word serves a purpose. Every rhyme advances the narrative. That surgical precision in his flow influenced how I approach my own verses.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Rick Ross & Gucci Mane</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            "You Already Know" with Rick Ross and Gucci Mane dropped in 2020, right as the world was shutting down from COVID. I was treating patients on the front lines while promoting a single with two of rap's biggest names. Talk about balance.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Ross taught me about commanding presence. When he walks in a room, when his voice hits a track—instant authority. Gucci showed me relentless work ethic. The man's output is legendary. Both collaborations pushed me to raise my game.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Ghostface Killah</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Working with Ghostface Killah, touring with Wu-Tang Clan—these were bucket list moments. Wu-Tang changed hip-hop forever. Being accepted by those legends, earning their respect—that meant everything.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Ghost's storytelling ability is unmatched. The way he paints pictures with words, creates entire scenes with just bars—that's artistry at its peak. Every collaboration is a chance to learn, to absorb, to evolve.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Royce da 5'9"</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Royce is Detroit royalty. Working with him meant coming full circle—from battling in Detroit's underground scene to collaborating with one of the city's finest lyricists. His technical skill, his dedication to the craft, his growth as an artist—all inspiration.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            He showed me that you can evolve without losing your core. You can mature your message while maintaining your edge. That balance between growth and authenticity is crucial.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Chemistry Factor</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Great collaborations require chemistry. It's not just about combining big names—it's about complementary styles, shared vision, mutual respect. When egos disappear and everyone serves the music, that's when magic happens.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I approach collaborations like I approach medical teams. In the hospital, surgeons work with anesthesiologists, nurses, specialists. Everyone has a role. Everyone's expertise matters. Same in music—producers, engineers, featured artists, each bringing their A-game.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What These Legends Taught Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every collaboration left me better than I came in. Fred Wreck taught me production excellence. Rakim taught me lyrical precision. Rick Ross taught me presence. Gucci taught me work ethic. Ghostface taught me storytelling. Royce taught me evolution.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            But beyond technical skills, they all showed me one thing: stay humble, stay hungry. These are legends who could coast on their names, but they still bring maximum effort to every session. That's the standard.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Future Collaborations</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm always looking for the next great collaboration. Established legends, rising stars, unexpected combinations—if the chemistry's right and the vision aligns, let's create.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            To my fellow artists: if you're about excellence, if you're willing to push boundaries, if you want to make music that matters—hit me. Let's build something legendary together.
          </p>

          <div className="bg-gradient-to-r from-purple-900/50 to-red-900/50 border border-purple-500/30 rounded-xl p-8 mt-12">
            <p className="text-xl text-white font-semibold mb-2">
              Cooking Up Magic
            </p>
            <p className="text-gray-300 mb-4">
              Every collaboration is a chance to create something bigger than yourself. When talent meets vision, when experience meets innovation—that's where the magic lives.
            </p>
            <Link 
              href="/#music"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              Hear the Collaborations
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            — Lazarus | Building Bridges Through Music
          </p>
        </footer>
      </article>
    </div>
  )
}
