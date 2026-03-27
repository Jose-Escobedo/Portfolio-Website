import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jose Escobedo | Full Stack Developer',
  description:
    'Full stack web developer specializing in React, Next.js, and Node.js. Based in Los Angeles, California.',
  keywords: [
    'Jose Escobedo',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'Web Developer',
    'Los Angeles',
  ],
  authors: [{ name: 'Jose Escobedo' }],
  openGraph: {
    title: 'Jose Escobedo | Full Stack Developer',
    description:
      'Full stack web developer specializing in React, Next.js, and Node.js.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-[#080b14] text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
