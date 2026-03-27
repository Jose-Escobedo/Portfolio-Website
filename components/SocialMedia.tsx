import Image from 'next/image'
import { FaInstagram, FaTiktok, FaExternalLinkAlt } from 'react-icons/fa'
import { socialMediaProjects } from '@/lib/data'

const platformIcons: Record<string, React.ReactNode> = {
  Instagram: <FaInstagram className="text-lg" />,
  TikTok: <FaTiktok className="text-lg" />,
}

const platformColors: Record<string, string> = {
  Instagram: 'from-purple-500 to-pink-500',
  TikTok: 'from-slate-900 to-slate-700',
}

export default function SocialMedia() {
  return (
    <section id="social-media" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1e]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Beyond Code
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
            Social Media <span className="text-gradient">Management</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-base">
            I also help businesses grow their online presence through strategic social media management.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialMediaProjects.map((project) => (
            <div
              key={project.id}
              className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Platform badge */}
                <div className="absolute top-3 right-3">
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${platformColors[project.platform]} text-white text-xs font-semibold shadow-lg`}
                  >
                    {platformIcons[project.platform]}
                    {project.platform}
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-medium mt-0.5">{project.subtitle}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group/link mt-auto pt-2"
                >
                  View {project.platform}
                  <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
