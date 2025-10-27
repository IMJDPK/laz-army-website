import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Laz Army Records and Lazarus official website.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">
            <strong>Last Updated:</strong> October 23, 2025
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              When you visit our website or sign up for our mailing list, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Personal information you provide (name, email address)</li>
              <li>Usage data and analytics (pages visited, time spent, device information)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Send you updates about new music releases and tour dates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">3. Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Service providers who assist in our operations (email service providers, analytics)</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. 
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">6. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">7. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-300">
              <strong>Email:</strong> privacy@lazarmyrecords.com<br />
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
