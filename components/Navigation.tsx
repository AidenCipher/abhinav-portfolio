'use client'

import { useEffect, useState } from 'react'
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

/** Three lines that fold into a cross when the menu opens. */
function MenuIcon({ open }: { open: boolean }) {
  const bar = 'absolute left-0 h-[1.5px] w-full bg-current'
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <span className="relative block h-4 w-6" aria-hidden>
      <motion.span
        className={bar}
        initial={false}
        animate={open ? { top: 7, rotate: 45 } : { top: 0, rotate: 0 }}
        transition={{ duration: 0.4, ease }}
      />
      <motion.span
        className={bar}
        style={{ top: 7 }}
        initial={false}
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.25, ease }}
      />
      <motion.span
        className={bar}
        initial={false}
        animate={open ? { top: 7, rotate: -45 } : { top: 14, rotate: 0 }}
        transition={{ duration: 0.4, ease }}
      />
    </span>
  )
}

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Close on navigation, so returning to a page never leaves the panel up.
  useEffect(() => setIsOpen(false), [pathname])

  // Hold the page still behind the overlay, and allow Escape to dismiss it.
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      aria-label="Main navigation"
    >
      {/* The blend mode is what let the old panel show the page through it, so
          it is dropped while the overlay is up. */}
      <div
        className={`content-width py-6 flex items-center justify-between relative z-50 ${
          isOpen ? '' : 'mix-blend-difference'
        }`}
      >
        <Link
          href="/"
          className="text-paper"
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
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden -mr-2 grid h-11 w-11 place-items-center text-paper"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <MenuIcon open={isOpen} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-ink"
          >
            <ul className="flex h-full flex-col justify-center gap-2 px-6">
              {links.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '110%' }}
                      transition={{
                        duration: 0.5,
                        delay: 0.08 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-5xl font-medium tracking-tight ${
                          isActive ? 'text-signal' : 'text-paper'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                )
              })}
            </ul>

            <div className="absolute inset-x-0 bottom-0 px-6 pb-10 flex justify-between text-eyebrow uppercase text-muted">
              <span>/ 2026 /</span>
              <span>Bengaluru, India</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
