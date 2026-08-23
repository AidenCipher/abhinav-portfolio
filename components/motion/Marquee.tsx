'use client'

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { ReactNode, useRef } from 'react'

/**
 * Infinite horizontal band. Scroll velocity adds to the baseline speed and can
 * flip direction, which is what makes the reference's bands feel physical.
 */
export default function Marquee({
  children,
  baseVelocity = 3,
  className = '',
}: {
  children: ReactNode
  baseVelocity?: number
  className?: string
}) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false })

  const directionRef = useRef(1)

  // Each child copy is 25% of the track, so wrapping across [-25, 0] is seamless.
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    let moveBy = directionRef.current * baseVelocity * (delta / 1000)

    const factor = velocityFactor.get()
    if (factor < 0) directionRef.current = -1
    else if (factor > 0) directionRef.current = 1

    moveBy += directionRef.current * moveBy * factor
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="inline-flex" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="shrink-0">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function wrap(min: number, max: number, v: number) {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}
