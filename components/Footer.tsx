import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { personalInfo, navLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/10 bg-[#060810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="text-gradient">JE</span>
              <span className="text-slate-500">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full stack developer based in Los Angeles, building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-blue-400 transition-colors group"
              >
                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-slate-200 transition-colors group"
              >
                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={personalInfo.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-slate-200 transition-colors group"
              >
                <FaMedium className="text-lg group-hover:scale-110 transition-transform" />
                <span className="text-sm">Medium</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-500 hover:text-slate-200 transition-colors group text-sm"
              >
                <svg className="w-[1.125rem] h-[1.125rem] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Jose Escobedo. All rights reserved.
          </p>
          <p>
            Built with{' '}
            <span className="text-blue-500">Next.js</span> &{' '}
            <span className="text-blue-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
