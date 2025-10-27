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

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header siteTitle="Lazarus • Laz Army Records" />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Hero />
        
        {/* Music Section - Full Width */}
        <div className="mt-10">
          <Music />
        </div>
        
        {/* Main Content Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <About />
          <div className="lg:col-span-2 space-y-8">
            <LazarusFrequency />
            <LazArmyRecords />
          </div>
        </div>
        
        {/* Blog Section - Full Width */}
        <div className="mt-10">
          <Blog />
        </div>
        
        {/* Tour Dates - Full Width */}
        <div className="mt-10">
          <Tours />
        </div>
        
        {/* Bottom Sections */}
        <div className="mt-10 space-y-8" id="join">
          <Merch />
          <Join />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}