import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: {
    default: 'Prueba HyGraph',
    template: '%s | Prueba HyGraph',
  },
  description: 'Prueba del CMS Hygraph para ir practicando y ver qué tal',
  keywords: ['Hygraph', 'CMS', 'Lo que ha costado el maldito Slug'],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
        {children}
        
        </body>
    </html>
  )
}
