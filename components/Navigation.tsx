'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/Leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
]

/** Letters lift and swap on hover — the reference's nav treatment. */
function HoverChars({ label }: { label: string }) {
  return (
    <span className="relative block overflow-hidden" aria-label={label}>
      <span className="flex" aria-hidden>
        {Array.from(label).map((c, i) => (
          <motion.span
            key={i}
            className="inline-block whitespace-pre"
            variants={{ rest: { y: 0 }, hover: { y: '-115%' } }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
          >
            {c}
          </motion.span>
        ))}
      </span>
      <span className="absolute inset-0 flex" aria-hidden>
        {Array.from(label).map((c, i) => (
          <motion.span
            key={i}
            className="inline-block whitespace-pre"
            variants={{ rest: { y: '115%' }, hover: { y: 0 } }}
            transition={{ duration: 0.4, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
          >
            {c}
          </motion.span>
        ))}
      </span>
    </span>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      aria-label="Main navigation"
    >
      <div className="content-width py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-paper relative z-50"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-lg font-medium tracking-tight">
            Abhinav<sup className="ml-0.5 text-[0.6em] align-super">®</sup>
          </span>
        </Link>

        <ul className="hidden md:flex gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <motion.span initial="rest" whileHover="hover" animate="rest">
                  <Link
                    href={link.href}
                    className={`text-eyebrow uppercase text-paper transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <HoverChars label={link.label} />
                  </Link>
                </motion.span>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 -mr-2 text-paper"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="text-eyebrow uppercase">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-ink"
          >
            <ul className="flex flex-col px-6 py-10 gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-medium text-paper block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
