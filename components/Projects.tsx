import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            My Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-base">
            A selection of projects I&apos;ve built — from full-stack apps to client websites.
          </p>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={project.id}
                className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500 ${
                    !isEven ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/60 via-transparent to-transparent" />
                    {/* Hover overlay with links */}
                    <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
                      >
                        <FaGithub className="text-sm" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`flex flex-col gap-5 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div>
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.15em]">
                      Project {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-100 mt-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-base">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-blue-500/20 hover:border-blue-400/40 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
