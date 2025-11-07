import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Community Outreach & Medical Work | Lazarus',
  description: 'Giving back to the community through medical missions and health awareness campaigns.',
}

export default function CommunityOutreachPost() {
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
            Community
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-4">
            Community Outreach & Medical Work
          </h1>
          <time className="text-gray-400" dateTime="2024-08-05">
            August 5, 2024
          </time>
        </header>

        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/assets/community-outreach.png"
            alt="Speaking to medical students at Michigan State University"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            "We ALL have a creative side." It was an honor to speak to and help motivate the new medical students at Michigan State University. This is what it's all about—giving back, lifting up, showing the next generation that they can be multidimensional.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Giving Back Matters</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Success without service is incomplete. I've been blessed with opportunities in both medicine and music, and with those blessings comes responsibility. Responsibility to mentor, to inspire, to show young people what's possible when you refuse to be limited.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Growing up in Detroit, I saw what happens when communities lack resources, when kids don't see examples of what they can become. I promised myself that if I made it, I'd come back and be that example for others.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Speaking at Michigan State University</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Standing in front of those medical students, I saw myself years ago—hungry, determined, but maybe not sure if they could pursue ALL their passions. That's what I wanted to change.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I told them: "Don't let anyone convince you that medicine requires you to abandon your other gifts. Your creativity makes you a better physician. Your artistic side brings empathy to your practice. Your passions outside medicine prevent burnout and keep you human."
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Creative Side of Medicine</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Medicine is as much art as science. Diagnosing complex cases requires creative thinking. Connecting with patients requires emotional intelligence. Innovating new treatments requires imagination.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The students who play instruments, write poetry, paint, or rap—they're not distracted from medicine. They're bringing valuable skills TO medicine. Pattern recognition from music translates to diagnostic skills. Storytelling from writing translates to patient communication. Discipline from any art form translates to medical training.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Health Awareness Campaigns</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Beyond mentorship, I use my platform to address health disparities. Heart disease, diabetes, mental health—these issues disproportionately affect communities of color. If I can reach someone through music who wouldn't listen to a traditional doctor, that's a life potentially saved.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I've partnered with organizations to bring health screenings to underserved areas. Free blood pressure checks at concerts. Diabetes awareness in my music videos. Using culture to deliver crucial health messages.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">COVID-19 Front Lines</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            During the pandemic, community service took on new urgency. I was on the front lines treating COVID patients while also trying to provide hope through music. Those were the darkest days many of us have seen.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I used social media to combat misinformation, to explain vaccines in terms people could understand, to humanize the statistics. Every life lost was someone's family member. Public health became personal.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Mentorship Programs</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I regularly mentor young people from Detroit and beyond—kids who want to pursue medicine, music, or both. I show them my schedule, let them shadow me in the hospital, bring them to studio sessions. Transparency about the grind, the sacrifices, but also the rewards.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Some of my mentees have gone on to medical school. Others are pursuing music careers. Some are doing both. Seeing them succeed, knowing I played even a small part in their journey—that's as fulfilling as any chart-topping single.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Message</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We ALL have a creative side. Whether you're a medical student, a young artist, or anyone trying to balance multiple passions—don't let society's boxes limit you. You can be a doctor AND a musician. A scientist AND a poet. An engineer AND a dancer.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Your unique combination of skills and passions is your superpower. Use it. Embrace it. And when you make it, reach back and pull someone else up. That's how we build stronger communities, one empowered individual at a time.
          </p>

          <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 border border-blue-500/30 rounded-xl p-8 mt-12">
            <p className="text-xl text-white font-semibold mb-2">
              Keep Creating, Keep Healing
            </p>
            <p className="text-gray-300">
              To the next generation: Your creativity is not a distraction from your career—it's an enhancement. Never let anyone convince you otherwise.
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            — Dr. Kamran Rashid Khan (Lazarus) | Physician, Artist, Mentor
          </p>
        </footer>
      </article>
    </div>
  )
}
