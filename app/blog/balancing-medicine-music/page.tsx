import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Balancing Medicine and Music: My Journey | Lazarus',
  description: 'How I navigate being both a physician and a hip hop artist, and what drives me in both worlds.',
}

export default function BalancingMedicineMusicPost() {
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
            Personal Story
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-4">
            Balancing Medicine and Music: My Journey
          </h1>
          <time className="text-gray-400" dateTime="2024-09-28">
            September 28, 2024
          </time>
        </header>

        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/assets/Balancing-medicine.jpeg"
            alt="Balancing medicine and music"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            The question I get asked most: "How do you do both?" Honestly? I don't know any other way. Medicine and music aren't competing forces in my life—they're complementary. Let me explain.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Two Callings, One Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I didn't choose medicine OR music. I chose medicine AND music. Both are about healing, just through different methods. In the hospital, I heal bodies. In the booth, I heal souls. Sometimes my own, sometimes yours.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Growing up in Detroit, I saw both needs clearly. People needed medical care. People also needed hope, inspiration, something to believe in. Why not provide both?
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Daily Grind</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            My days are intense. I wake up at 5 AM for hospital rounds. I'm checking vitals, reviewing charts, making life-or-death decisions. Then at night, I'm in the studio, crafting verses, perfecting flows, building beats. Most people can't understand that rhythm, but it's my normal.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The discipline required for medical school—the long hours, the constant studying, the pressure—that same discipline makes me a better artist. When other rappers are partying, I'm studying anatomy. When they're sleeping, I'm on call. That work ethic translates.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">COVID-19: The Ultimate Test</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            2020 tested me like nothing else. I was on the front lines during COVID-19, seeing patients struggle, watching families grieve, working 16-hour shifts in full PPE. Meanwhile, I was also releasing "You Already Know" with Rick Ross and Gucci Mane.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            People thought I was crazy. "How can you focus on music during a pandemic?" But that's exactly when we needed music most. That's when art matters. When the world is falling apart, culture holds us together.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Medicine Taught Me About Music</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Medicine taught me precision. Every word in a diagnosis matters. Same with lyrics—every bar has to hit with surgical accuracy. No wasted words, no filler. Just truth.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Medicine also taught me empathy. You can't treat patients without understanding their pain. Same with music—I can't make authentic hip-hop without understanding the struggle, the hustle, the dreams of my community.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Music Taught Me About Medicine</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Music taught me creativity. Medicine has protocols, but healing also requires thinking outside the box. Music taught me to find unconventional solutions, to innovate, to never accept "that's just how it's done."
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Music also taught me resilience. The rejection, the grinding, the years of building—those struggles prepared me for the toughest medical cases. When everyone says it's impossible, I've already proven them wrong in the studio. I can do it in the hospital too.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Sacrifice</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I won't lie—balancing both careers requires sacrifice. I don't have much free time. My social life is limited. Sleep is a luxury. But when I see a patient walk out healthy, or hear someone say my music changed their life? That makes every sacrifice worth it.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">My Message to You</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Don't let anyone tell you to pick one passion. Don't let society put you in a box. You can be multidimensional. You can excel in multiple fields. It's hard? Absolutely. Impossible? Never.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a Pakistani-American physician from Detroit who battles on stage and saves lives in the ER. If I can do both, you can pursue whatever drives you. Stay hungry. Stay humble. And most importantly, stay true to ALL of who you are.
          </p>

          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-xl p-8 mt-12">
            <p className="text-xl text-white font-semibold mb-2">
              Not To Be Defined
            </p>
            <p className="text-gray-300">
              That's not just an album title—it's a life philosophy. Don't let anyone define you. Define yourself.
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            — Dr. Kamran Rashid Khan (Lazarus) | Physician & Hip-Hop Artist
          </p>
        </footer>
      </article>
    </div>
  )
}
