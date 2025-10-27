import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Laz Army Records and Lazarus official website.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">
            <strong>Last Updated:</strong> October 23, 2025
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily access the materials on Laz Army Records' website for personal, 
              non-commercial viewing only. This is the grant of a license, not a transfer of title, and under 
              this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content on this website, including but not limited to music, lyrics, artwork, videos, 
              photographs, and text, is the property of Lazarus/Laz Army Records or its content suppliers 
              and is protected by copyright and intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">4. User Content</h2>
            <p className="text-gray-300 mb-4">
              If you submit content, comments, or feedback through our website, you grant us a non-exclusive, 
              royalty-free, perpetual, and worldwide license to use, modify, and display such content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The materials on this website are provided on an 'as is' basis. Laz Army Records makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">6. Limitations</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Laz Army Records or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising out of 
              the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">7. Third-Party Links</h2>
            <p className="text-gray-300 mb-4">
              This website may contain links to third-party websites or services (such as streaming platforms, 
              ticket vendors, etc.) that are not owned or controlled by Laz Army Records. We have no control 
              over and assume no responsibility for the content, privacy policies, or practices of any third-party 
              websites or services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">8. Merchandise and Tickets</h2>
            <p className="text-gray-300 mb-4">
              All merchandise and ticket sales are subject to availability. We reserve the right to refuse or 
              cancel orders at our discretion. Refund and return policies will be clearly stated at the point 
              of purchase.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">9. Modifications</h2>
            <p className="text-gray-300 mb-4">
              We may revise these terms of service at any time without notice. By using this website, you are 
              agreeing to be bound by the current version of these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">10. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These terms shall be governed by and construed in accordance with applicable laws, without regard 
              to conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">11. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              Questions about the Terms of Service should be sent to:
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> legal@lazarmyrecords.com<br />
              <strong>Website:</strong> <a href="/" className="text-purple-400 hover:text-purple-300">lazarmyrecords.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <a
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
