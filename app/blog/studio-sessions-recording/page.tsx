import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Studio Sessions: Recording Process | Lazarus',
  description: 'Inside the studio capturing the raw energy and creativity that goes into each track.',
}

export default function StudioSessionsPost() {
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
            Studio Sessions: Recording Process
          </h1>
          <time className="text-gray-400" dateTime="2024-08-22">
            August 22, 2024
          </time>
        </header>

        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="/assets/Banner-20.jpeg"
            alt="Studio recording session"
            fill
            className="object-contain"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Welcome to my second operating room. The studio is where medicine meets music, where precision meets passion. Let me show you what really goes down when we're crafting these tracks.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Setup</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            My studio time usually starts after hospital shifts. Most people are heading home to relax—I'm heading to the booth to create. That transition from white coat to microphone is my meditation, my therapy, my second calling.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The gear matters, but the mindset matters more. Pro Tools running, monitors calibrated, soundproofing keeping the outside world out. This is where raw thoughts become refined bars, where emotion becomes art.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Recording Process</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I approach recording like surgery—methodical but inspired. First, I warm up. Not just vocals, but mentally. I review my notes, the bars I wrote between patient rounds, the ideas that came to me at 3 AM during on-call shifts.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Then we lay down the foundation. Beat selection is critical. The right instrumental can elevate good lyrics to greatness. I work with producers who understand my vision—that blend of Detroit grit and medical precision.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Capturing the Energy</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The first take is always raw energy. No overthinking, just pure flow. Sometimes that's the keeper—that authentic, unfiltered expression. Other times, we refine it, punch in lines, perfect the delivery.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I learned from the Detroit battle scene that every word has weight. When you're standing on stage facing Eminem or Royce da 5'9", you can't waste syllables. That discipline carried into my recording style—every bar counts, every punch line lands.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Layering & Production</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Once the main vocals are down, we start building. Background vocals, ad-libs, harmony layers. This is where the track becomes dimensional. It's like treating a patient—you handle the primary issue, then you optimize everything else for complete healing.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            My engineer knows my preferences by now. I like my vocals crisp but warm, present but not overpowering the beat. We EQ, compress, add subtle effects. Technical precision meets artistic vision.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Marathon Sessions</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Some nights we're in the studio until sunrise. Those marathon sessions produce magic. There's something about pushing past exhaustion where the realest creativity emerges. No filters, no second-guessing, just pure creation.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I've recorded entire tracks in one sitting. Other songs took months to perfect. There's no formula—you follow the art where it leads. Sometimes I'll scrap a whole verse if it doesn't feel authentic. Medicine taught me that cutting out what doesn't work is sometimes the best treatment.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Collaboration in the Booth</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            When we have features recording, the energy multiplies. Watching Rick Ross lay down a verse, hearing Rakim perfect his flow, trading bars with Gucci Mane—those moments remind me why I do this.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Great collaborations happen when egos disappear and everyone serves the song. We push each other. "That line could hit harder." "Try a different inflection here." Constructive competition that elevates the final product.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Final Product</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            After recording comes mixing, mastering, final approvals. I'm involved in every step. This is my art, my message, my legacy. I can't delegate quality control any more than I can delegate a patient's diagnosis.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            When a track is finally done, when it sounds exactly how I envisioned it, that satisfaction rivals any successful surgery. Both are healing. Both make a difference. Both require excellence.
          </p>

          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-xl p-8 mt-12">
            <p className="text-xl text-white font-semibold mb-2">
              Behind the Music
            </p>
            <p className="text-gray-300">
              Every track you hear represents countless hours in the studio, balancing hospital shifts with creative sessions. The grind is real, but so is the passion.
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            — Lazarus | From the Studio to Your Speakers
          </p>
        </footer>
      </article>
    </div>
  )
}
