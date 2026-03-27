'use client'

import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-mesh overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-400 text-sm font-medium animate-fade-in animation-fill-both"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up animation-fill-both"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="text-slate-100">Hello, I'm</span>
          <br />
          <span className="text-gradient">{personalInfo.name}.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-4 animate-fade-in-up animation-fill-both"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          {personalInfo.tagline}
        </p>

        <p
          className="text-base text-slate-500 max-w-xl mx-auto mb-10 animate-fade-in-up animation-fill-both"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          Based in Los Angeles · Specializing in React, Next.js & Node.js
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-fill-both"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 glass border border-blue-500/25 hover:border-blue-400/50 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6 animate-fade-in animation-fill-both"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
          </a>
          <div className="w-px h-5 bg-slate-700" />
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-all duration-300"
          >
            <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">GitHub</span>
          </a>
          <div className="w-px h-5 bg-slate-700" />
          <a
            href={personalInfo.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-all duration-300"
          >
            <FaMedium className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">Medium</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  )
}
