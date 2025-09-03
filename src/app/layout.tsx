import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishnu Subramani - Portfolio',
  description: 'Explore my projects, skills, and experiences as I share my journey in engineering, technology, and innovation.',
  keywords: ['Vishnu Subramani', 'Portfolio', 'Management Engineering', 'University of Waterloo', 'Software Developer'],
  authors: [{ name: 'Vishnu Subramani' }],
  openGraph: {
    title: 'Vishnu Subramani - Portfolio',
    description: 'Explore my projects, skills, and experiences as I share my journey in engineering, technology, and innovation.',
    url: 'https://vishnus.online',
    siteName: 'Vishnu Subramani Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnu Subramani - Portfolio',
    description: 'Explore my projects, skills, and experiences as I share my journey in engineering, technology, and innovation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}