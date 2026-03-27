import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import SocialMedia from '@/components/SocialMedia'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />

      {/* Section dividers */}
      <div className="section-divider" />
      <About />

      <div className="section-divider" />
      <Skills />

      <div className="section-divider" />
      <Projects />

      <div className="section-divider" />
      <SocialMedia />

      <div className="section-divider" />
      <Contact />

      <Footer />
    </main>
  )
}
