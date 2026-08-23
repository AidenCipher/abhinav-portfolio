'use client'

import { useEffect, useState } from 'react'

const HOLD_MS = 1400
const WIPE_MS = 900

/**
 * Curtain intro. The wipe is a CSS transition rather than a JS-driven one so a
 * backgrounded tab (where rAF is throttled to zero) still clears the overlay
 * instead of trapping the page behind it.
 */
export default function Preloader() {
  const [lifting, setLifting] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRemoved(true)
      return
    }

    document.body.style.overflow = 'hidden'
    const lift = setTimeout(() => setLifting(true), HOLD_MS)
    const remove = setTimeout(() => {
      setRemoved(true)
      document.body.style.overflow = ''
    }, HOLD_MS + WIPE_MS)

    return () => {
      clearTimeout(lift)
      clearTimeout(remove)
      document.body.style.overflow = ''
    }
  }, [])

  if (removed) return null

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-signal"
      style={{
        transform: lifting ? 'translateY(-100%)' : 'translateY(0)',
        transition: `transform ${WIPE_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <div className="text-center text-paper">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_both]">
          Abhinav
          <sup className="ml-1 text-base align-super opacity-70">®</sup>
        </h1>
        <p className="mt-3 text-eyebrow uppercase opacity-80 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
          Project Manager &amp; Operations Strategist
        </p>
      </div>
    </div>
  )
}
