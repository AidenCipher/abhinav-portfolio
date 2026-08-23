import type { Metadata } from 'next'
import './globals.css'
import { satoshi } from '@/lib/fonts'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import Preloader from '@/components/Preloader'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Abhinav Rotti',
    template: '%s | Abhinav Rotti',
  },
  description: 'Project Manager & Operations Specialist | Strategic thinking and systematic execution',
  openGraph: {
    title: 'Abhinav Rotti',
    description: 'Project Manager & Operations Specialist | Strategic thinking and systematic execution',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Abhinav Rotti',
    description: 'Project Manager & Operations Specialist | Strategic thinking and systematic execution',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="relative min-h-screen bg-ink text-paper grain">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
