import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Behind the Scenes: Creating My Latest Album | Lazarus',
  description: 'Take a look at the creative process behind my newest release, from writing to production to the final mix.',
}

export default function BehindTheScenesPost() {
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
            Behind the Scenes: Creating My Latest Album
          </h1>
          <time className="text-gray-400" dateTime="2024-10-15">
            October 15, 2024
          </time>
        </header>

        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="/assets/Banner-19.jpeg"
            alt="Behind the scenes album creation"
            fill
            className="object-contain"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            What's good, Laz Army! Let me pull back the curtain and show you what really goes into creating an album. This ain't your typical recording process—this is medicine meets music, precision meets passion.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Vision</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every album starts with a vision. For this project, I wanted to merge the discipline I've learned as a physician with the raw energy of Detroit hip-hop. People think being a doctor and a rapper don't mix, but that's exactly why it works. Both require dedication, both require you to cut deep, both require healing.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Writing Process</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I write between shifts, sometimes after 12-hour days in the hospital. That's when the realest bars come out. There's something about seeing life and death up close that makes you write with urgency. No fluff, no filler—just surgical lyricism.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            My notepad stays with me everywhere: the hospital, the studio, even during rounds. When inspiration hits, I capture it. A patient's story, a conversation with a colleague, the struggles of balancing two careers—it all becomes fuel for the music.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Studio Sessions</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The studio is my second operating room. Same focus, same precision. We spent months perfecting these tracks—layering sounds, adjusting flows, making sure every beat hits like a heartbeat monitor going critical.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I work with some of the most talented producers in the game. We push each other. They bring the heat, I bring the lyricism. We don't settle for good—we operate until it's exceptional.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Features</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Working with legends like Rakim, Rick Ross, and Gucci Mane taught me something crucial: respect the craft, but never lose your voice. Every collaboration on this album was intentional. Each feature brings something unique while maintaining the album's heartbeat.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Final Mix</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Mixing and mastering is where the magic solidifies. It's like post-op care—you've done the surgery, now you make sure everything heals right. We spent countless hours fine-tuning frequencies, balancing vocals, making sure this album sounds pristine whether you're bumping it in your car or through studio monitors.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Message</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            This album is about defying definitions. I'm not just a rapper. I'm not just a doctor. I'm both, and I'm showing the world that you don't have to choose between your passions. You can be multidimensional. You can heal and create. You can save lives and make hits.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            To everyone grinding, working multiple jobs, pursuing multiple dreams—this one's for you. Stay hungry. Stay disciplined. And most importantly, stay true to who you are.
          </p>

          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-8 mt-12">
            <p className="text-xl text-white font-semibold mb-2">
              "Not To Be Defined" - Out Now
            </p>
            <p className="text-gray-300">
              Stream the album featuring Rakim and experience the journey yourself. Available on all platforms.
            </p>
            <Link 
              href="/#music"
              className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              Listen Now
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            — Lazarus (Kamran Rashid Khan) | Laz Army Records
          </p>
        </footer>
      </article>
    </div>
  )
}
