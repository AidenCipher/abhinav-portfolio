'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

/** Text slides up from behind a clip mask — the reference's primary reveal. */
export default function MaskReveal({
  children,
  delay = 0,
  duration = 0.9,
  className = '',
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <span
      ref={ref}
      className={`block overflow-hidden pb-[0.16em] -mb-[0.16em] ${className}`}
    >
      <motion.span
        className="block"
        initial={{ y: '130%' }}
        animate={inView ? { y: '0%' } : { y: '130%' }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}
