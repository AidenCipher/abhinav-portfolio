import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect for strategic discussions, collaboration opportunities, or inquiries',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
