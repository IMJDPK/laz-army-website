'use client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Music from '../components/Music'
import LazarusFrequency from '../components/LazarusFrequency'
import LazArmyRecords from '../components/LazArmyRecords'
import Blog from '../components/Blog'
import Tours from '../components/Tours'
import Merch from '../components/Merch'
import Join from '../components/Join'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import ErrorBoundary from '../components/ErrorBoundary'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header siteTitle="Lazarus • Laz Army Records" />
      
      <main id="main-content" className="max-w-7xl mx-auto px-6 py-8">
        <Hero />
        
        {/* Music Section - Full Width */}
        <section id="music" aria-label="Music and streaming" className="mt-10">
          <ErrorBoundary>
            <Music />
          </ErrorBoundary>
        </section>
        
        {/* Main Content Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section aria-label="About Lazarus">
            <About />
          </section>
          <div className="lg:col-span-2 space-y-8">
            <section aria-label="Lazarus Frequency">
              <LazarusFrequency />
            </section>
            <section aria-label="Laz Army Records">
              <LazArmyRecords />
            </section>
          </div>
        </div>
        
        {/* Blog Section - Full Width */}
        <section id="blog" aria-label="News and blog" className="mt-10">
          <ErrorBoundary>
            <Blog />
          </ErrorBoundary>
        </section>
        
        {/* Tour Dates - Full Width */}
        <section id="tour" aria-label="Tour dates and shows" className="mt-10">
          <ErrorBoundary>
            <Tours />
          </ErrorBoundary>
        </section>
        
        {/* Gallery Section - Full Width */}
        <section id="gallery" aria-label="Photo gallery" className="mt-10">
          <ErrorBoundary>
            <Gallery />
          </ErrorBoundary>
        </section>
        
        {/* Bottom Sections */}
        <div className="mt-10 space-y-8" id="join">
          <section id="gear" aria-label="Merchandise and gear">
            <Merch />
          </section>
          <section aria-label="Join mailing list">
            <Join />
          </section>
          <section id="contact" aria-label="Contact and booking">
            <Contact />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}