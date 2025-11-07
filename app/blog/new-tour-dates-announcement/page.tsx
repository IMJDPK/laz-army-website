import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Announcing New Tour Dates | Lazarus',
  description: 'Excited to announce upcoming shows in major cities. Get your tickets before they sell out!',
}

export default function NewTourDatesPost() {
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
            Tour
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-4">
            Announcing New Tour Dates
          </h1>
          <time className="text-gray-400" dateTime="2024-09-10">
            September 10, 2024
          </time>
        </header>

        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/assets/Banner13.jpeg"
            alt="Tour announcement"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Laz Army, it's time! I'm hitting the road and bringing that Detroit energy to stages across the country. This isn't just a tour—it's a movement. Medicine by day, mayhem on stage by night.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Vision Behind This Tour</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            After years of balancing hospital shifts with studio sessions, it's time to connect with you face-to-face. This tour is about breaking barriers, showing people that you can be a physician AND rock stages. No limits, no definitions.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're performing the full "Not To Be Defined" album live, plus classics that got me here. If you've been following the journey from The Real 8 Mile to touring with Wu-Tang Clan, this is where it all comes together.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What to Expect</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            This isn't your typical hip-hop show. Expect surgical precision with raw Detroit energy. Every verse delivered with the same focus I bring to the operating room. Every beat hitting like a defibrillator shock bringing you back to life.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're bringing special guests to select cities—legends I've collaborated with, rising stars I'm putting on. This is about community, culture, and celebrating what happens when passion meets purpose.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cities & Dates</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're starting in Detroit—home base, where it all began. Then we're taking this movement nationwide. Major cities, intimate venues, places where real hip-hop still matters.
          </p>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Tour Dates Coming Soon</h3>
            <p className="text-gray-300 mb-4">
              Check the tour section for the latest dates and venues. Tickets drop soon—and based on previous shows, they go fast.
            </p>
            <Link 
              href="/#tours"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              View Tour Dates
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">VIP Experience</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            For the real Laz Army soldiers, we're offering VIP packages. Meet & greet before the show, exclusive merch, soundcheck access. Get close to the movement, see what goes into bringing this vision to life.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Now?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The pandemic reminded us that life is short. Time is precious. If you have something to say, say it now. If you have music to share, share it now. This tour is about making every moment count.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I've spent years proving you can balance medicine and music. Now it's time to prove you can dominate both. See you on the road.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Get Your Tickets</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Tickets will be available through official channels only. Watch our social media for announcements. If you're part of Laz Army, you know how we move—early, strategic, ready.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Bring your energy. Bring your crew. Bring that Detroit mentality wherever you are. Let's show the world what happens when medicine meets music at maximum volume.
          </p>

          <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-500/30 rounded-xl p-8 mt-12">
            <p className="text-xl text-white font-semibold mb-2">
              Stay Connected
            </p>
            <p className="text-gray-300">
              Follow us on social media for ticket drops, exclusive content, and behind-the-scenes tour prep. This is just the beginning.
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            — Lazarus | Not To Be Defined Tour
          </p>
        </footer>
      </article>
    </div>
  )
}
