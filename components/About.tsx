import Image from 'next/image'
import { HiOutlinePaintBrush, HiOutlineCommandLine, HiOutlineServerStack } from 'react-icons/hi2'
import { personalInfo } from '@/lib/data'
import type { IconType } from 'react-icons'

interface Service {
  id: number
  title: string
  description: string
  icon: IconType
  iconColor: string
  iconBg: string
  tags: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'Design',
    description:
      'I use Figma and Adobe Photoshop to design clean, modern user interfaces tailored to your vision.',
    icon: HiOutlinePaintBrush,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/20',
    tags: ['Figma', 'Photoshop', 'UI/UX'],
  },
  {
    id: 2,
    title: 'Frontend',
    description:
      'I build fast, responsive frontends with React.js and Next.js, bringing designs to life across all devices.',
    icon: HiOutlineCommandLine,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Backend',
    description:
      "I leverage Node.js to create fast and secure backend services tailored to your app's needs.",
    icon: HiOutlineServerStack,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20',
    tags: ['Node.js', 'REST APIs', 'Databases'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
        </div>

        {/* Bio section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Image */}
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
              <Image
                src={personalInfo.profileImage}
                alt="Jose Escobedo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/60 via-transparent to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-2xl border border-blue-500/20 z-0 transition-all duration-500 group-hover:border-blue-500/40" />
            {/* Glow */}
            <div className="absolute -inset-6 rounded-3xl bg-blue-600/5 blur-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-bold text-slate-100 mb-1">
                I&apos;m{' '}
                <span className="text-gradient">{personalInfo.name}</span>
              </h3>
              <p className="text-blue-400 font-medium">{personalInfo.title}</p>
            </div>

            <p className="text-slate-400 leading-relaxed text-base">
              {personalInfo.bio}
            </p>

            {/* Info table */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Full Name', value: personalInfo.name },
                { label: 'Age', value: String(personalInfo.age) },
                { label: 'Languages', value: personalInfo.languages },
                { label: 'Location', value: personalInfo.location },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 border border-blue-500/10"
                >
                  <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Resume button */}
            <div className="flex gap-4 pt-2">
              <a
                href="/resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-blue-500/20 hover:border-blue-400/40 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              What I do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100">
              My <span className="text-gradient">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="glass glass-hover rounded-2xl p-8 flex flex-col gap-5 group"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-colors duration-300 ${service.iconBg}`}>
                    <Icon className={`text-3xl ${service.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
