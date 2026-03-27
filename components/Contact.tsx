'use client'

import { useState, FormEvent } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium, FaCheckCircle } from 'react-icons/fa'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setFields({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'jose-escobedo',
      href: personalInfo.social.linkedin,
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Jose-Escobedo',
      href: personalInfo.social.github,
    },
    {
      icon: <FaMedium />,
      label: 'Medium',
      value: '@escobedo.jose',
      href: personalInfo.social.medium,
    },
  ]

  const inputClass =
    'px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all'

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-600/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto text-base">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-100 mb-2">Contact Info</h3>
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group glass glass-hover rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0 text-base">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                  <p className="text-sm text-slate-200 font-medium truncate">{item.value}</p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors ml-auto shrink-0"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 border border-blue-500/10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <FaCheckCircle className="text-5xl text-emerald-400" />
                  <h3 className="text-xl font-bold text-slate-100">Message Sent!</h3>
                  <p className="text-slate-400 text-center text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-5 py-2 text-sm bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/20 transition-colors font-medium"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={fields.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                      Something went wrong. Please email me directly at{' '}
                      <a href={`mailto:${personalInfo.email}`} className="underline">
                        {personalInfo.email}
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
