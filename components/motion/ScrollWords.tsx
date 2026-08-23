'use client'

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from 'framer-motion'
import { useRef } from 'react'

/** Statement paragraph whose words brighten one by one as it scrolls through. */
export default function ScrollWords({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.25'],
  })
  const reduce = useReducedMotion()

  const words = text.split(' ')

  // Unbrightened words sit at 0.15 opacity, which is unreadable on the dark
  // ground — render the statement at full contrast instead.
  if (reduce) {
    return <p className={className}>{text}</p>
  }

  return (
    <p ref={ref} className={`relative flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <span className="mr-[0.28em] mt-[0.12em]">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}
