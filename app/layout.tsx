import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import DynamicBackground from '@/components/DynamicBackground'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // Update with your actual domain later
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
    <html lang="en">
      <body className="relative min-h-screen">

        {/* Layer 0: The Antigravity Canvas */}
        <DynamicBackground />

        {/* Layer 10: All website content, ensuring it sits on top and is clickable */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  )
}