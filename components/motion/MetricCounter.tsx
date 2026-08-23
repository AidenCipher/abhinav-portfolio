'use client'

import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Counts up to `value` when scrolled into view. Carries the visual weight of a project thumbnail. */
export default function MetricCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className = '',
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (reduce) {
      setDisplay(value)
      return
    }
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {/*
        The true figure is always in the DOM for assistive tech and crawlers;
        only the sighted, animated readout counts up. Without this the metric
        reads "0" whenever the count never runs.
      */}
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      <span aria-hidden>
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  )
}
