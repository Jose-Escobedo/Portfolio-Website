'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/lib/data'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-blue-500/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-gradient">JE</span>
          <span className="text-slate-300 ml-0.5">.</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:jose@escobedojose.dev"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-blue-500/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            )
          })}
          <a
            href="mailto:jose@escobedojose.dev"
            className="mt-2 px-4 py-3 text-sm font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-center transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}
