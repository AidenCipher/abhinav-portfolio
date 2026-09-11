'use client'

import { useEffect, useRef } from 'react'

/**
 * Full-viewport lattice of points that parts around the cursor and settles back.
 *
 * Canvas 2D rather than WebGL: at this density it holds 60fps comfortably and
 * avoids pulling a renderer into the bundle for a background effect. Draws are
 * batched into a handful of brightness buckets so a frame costs a few fillStyle
 * changes rather than one per point.
 */

const SPACING_MIN = 24
const SPACING_MAX = 34
const INFLUENCE = 170 // px radius the cursor pushes within
const PUSH = 34 // px a point is displaced at the centre of that radius
const EASE = 0.12 // approach rate toward the target position
const BUCKETS = 8

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let dpr = 1
    let w = 0
    let h = 0
    let cols = 0
    let rows = 0
    let spacing = SPACING_MIN
    let homeX = new Float32Array(0)
    let homeY = new Float32Array(0)
    let curX = new Float32Array(0)
    let curY = new Float32Array(0)

    // Target follows the real pointer; the drawn position eases toward it so a
    // fast flick does not snap the field.
    let pointerX = -9999
    let pointerY = -9999
    let easedX = -9999
    let easedY = -9999

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      spacing = Math.max(SPACING_MIN, Math.min(SPACING_MAX, w / 55))
      cols = Math.ceil(w / spacing) + 1
      rows = Math.ceil(h / spacing) + 1
      const n = cols * rows

      homeX = new Float32Array(n)
      homeY = new Float32Array(n)
      curX = new Float32Array(n)
      curY = new Float32Array(n)

      // Inset by half a step so the lattice sits evenly against both edges.
      const offX = (w - (cols - 1) * spacing) / 2
      const offY = (h - (rows - 1) * spacing) / 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c
          homeX[i] = offX + c * spacing
          homeY[i] = offY + r * spacing
          curX[i] = homeX[i]
          curY[i] = homeY[i]
        }
      }
    }

    // Points are grouped by brightness so each frame issues BUCKETS fill passes.
    const bucketX: number[][] = Array.from({ length: BUCKETS }, () => [])
    const bucketY: number[][] = Array.from({ length: BUCKETS }, () => [])

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let b = 0; b < BUCKETS; b++) {
        bucketX[b].length = 0
        bucketY[b].length = 0
      }

      const r2 = INFLUENCE * INFLUENCE
      for (let i = 0; i < curX.length; i++) {
        const dx = homeX[i] - easedX
        const dy = homeY[i] - easedY
        const d2 = dx * dx + dy * dy

        let tx = homeX[i]
        let ty = homeY[i]
        let energy = 0

        if (d2 < r2) {
          const d = Math.sqrt(d2) || 0.0001
          // Squared falloff: a tight core that fades out gently.
          const f = 1 - d / INFLUENCE
          energy = f * f
          const push = energy * PUSH
          tx += (dx / d) * push
          ty += (dy / d) * push
        }

        curX[i] += (tx - curX[i]) * EASE
        curY[i] += (ty - curY[i]) * EASE

        const b = Math.min(BUCKETS - 1, Math.round(energy * (BUCKETS - 1)))
        bucketX[b].push(curX[i])
        bucketY[b].push(curY[i])
      }

      for (let b = 0; b < BUCKETS; b++) {
        const xs = bucketX[b]
        if (!xs.length) continue
        const ys = bucketY[b]
        const t = b / (BUCKETS - 1)
        // Resting dots are faint; energised ones brighten and grow slightly.
        const alpha = 0.16 + t * 0.64
        const size = 1.1 + t * 1.5
        ctx.fillStyle = `rgba(244, 242, 237, ${alpha.toFixed(3)})`
        const half = size / 2
        for (let k = 0; k < xs.length; k++) {
          ctx.fillRect(xs[k] - half, ys[k] - half, size, size)
        }
      }
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'rgba(244, 242, 237, 0.16)'
      for (let i = 0; i < homeX.length; i++) {
        ctx.fillRect(homeX[i] - 0.55, homeY[i] - 0.55, 1.1, 1.1)
      }
    }

    let raf = 0
    const loop = () => {
      easedX += (pointerX - easedX) * 0.18
      easedY += (pointerY - easedY) * 0.18
      draw()
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    const onPointer = (e: PointerEvent) => {
      pointerX = e.clientX
      pointerY = e.clientY
    }
    // Park the influence far off-screen so the field relaxes when the pointer
    // leaves the window.
    const onLeave = () => {
      pointerX = -9999
      pointerY = -9999
    }
    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        build()
        if (reduced) drawStatic()
      }, 150)
    }

    build()

    if (reduced) {
      drawStatic()
      window.addEventListener('resize', onResize)
      return () => {
        clearTimeout(resizeTimer)
        window.removeEventListener('resize', onResize)
      }
    }

    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    start()

    return () => {
      stop()
      clearTimeout(resizeTimer)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
