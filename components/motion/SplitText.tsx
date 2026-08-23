'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

/**
 * Per-character stagger. Whitespace is preserved as non-breaking spans so
 * word boundaries survive the split.
 */
export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const reduce = useReducedMotion()
  const chars = Array.from(text)

  // Skip the per-character stagger entirely; a screen reader already gets the
  // whole string from aria-label, and the split adds nothing without motion.
  if (reduce) {
    return <span className={className}>{text}</span>
  }

  return (
    <span
      ref={ref}
      className={`inline-flex overflow-hidden pb-[0.16em] -mb-[0.16em] ${className}`}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block whitespace-pre"
          initial={{ y: '130%' }}
          animate={inView ? { y: '0%' } : { y: '130%' }}
          transition={{
            duration: 0.8,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}
