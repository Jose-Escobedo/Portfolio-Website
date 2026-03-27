import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiGit,
} from 'react-icons/si'
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

interface Skill {
  name: string
  icon: IconType
  color: string
  category: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5',       icon: SiHtml5,           color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3',        icon: SiCss,             color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript',  icon: SiJavascript,      color: '#F7DF1E', category: 'Frontend' },
  { name: 'React',       icon: SiReact,           color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js',     icon: SiNextdotjs,       color: '#ffffff', category: 'Frontend' },
  // Backend
  { name: 'Node.js',     icon: SiNodedotjs,       color: '#339933', category: 'Backend' },
  { name: 'PHP',         icon: SiPhp,             color: '#8892BF', category: 'Backend' },
  // Database
  { name: 'MongoDB',     icon: SiMongodb,         color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL',  icon: SiPostgresql,      color: '#4169E1', category: 'Database' },
  // Design
  { name: 'Photoshop',   icon: HiOutlinePaintBrush, color: '#31A8FF', category: 'Design' },
  { name: 'Figma',       icon: SiFigma,           color: '#F24E1E', category: 'Design' },
  // Tools
  { name: 'Git',         icon: SiGit,             color: '#F05032', category: 'Tools' },
]

const categories = ['Frontend', 'Backend', 'Database', 'Design', 'Tools']

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Technologies
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-base">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills by category */}
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category)
          if (categorySkills.length === 0) return null
          return (
            <div key={category} className="mb-10">
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-[0.15em]">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group glass glass-hover rounded-xl p-5 flex flex-col items-center gap-3 cursor-default"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110">
                        <Icon
                          style={{ color: skill.color }}
                          className="text-4xl drop-shadow-sm"
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
