'use client'

import { useEffect, useRef } from 'react'

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // --- Engine Configuration ---
        const PARTICLE_COUNT = 165 // Increased by 10%
        const INTERACTION_RADIUS = 150 // Cursor attraction distance
        const TARGET_RADIUS = 2 // Circle radius around cursor
        const GRAVITY = 0.2 // Pull strength
        const ORBIT_SPEED = 0.5 // Speed of revolution
        const MAX_SPEED = 1
        const BASE_SPEED = 0.5
        const PARTICLE_COLORS = [
            'rgba(239, 68, 68, 0.6)',   // Red
            'rgba(59, 130, 246, 0.6)',  // Blue
            'rgba(234, 179, 8, 0.6)',   // Yellow
            'rgba(34, 197, 94, 0.6)'    // Green
        ]

        let animationFrameId: number
        let particles: Particle[] = []
        let mouse = { x: -1000, y: -1000 }

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            init()
        }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            baseVx: number
            baseVy: number
            size: number
            color: string

            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.vx = (Math.random() - 0.5) * BASE_SPEED
                this.vy = (Math.random() - 0.5) * BASE_SPEED
                this.baseVx = this.vx
                this.baseVy = this.vy
                this.size = Math.random() * 2 + 1 // Size between 1px and 3px
                this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
            }

            update() {
                // Apply velocity
                this.x += this.vx
                this.y += this.vy

                // Screen bounds collision
                if (this.x <= 0 || this.x >= canvas.width) {
                    this.vx *= -1
                    this.baseVx *= -1
                }
                if (this.y <= 0 || this.y >= canvas.height) {
                    this.vy *= -1
                    this.baseVy *= -1
                }

                // Interaction Logic
                const dx = mouse.x - this.x
                const dy = mouse.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < INTERACTION_RADIUS) {
                    const nx = dx / distance
                    const ny = dy / distance

                    // Force to pull/push particles to TARGET_RADIUS
                    const distanceError = distance - TARGET_RADIUS
                    const radialForce = distanceError * 0.05

                    this.vx += nx * radialForce
                    this.vy += ny * radialForce

                    // Tangential force for revolution
                    // The force strength increases as it gets closer to TARGET_RADIUS to form a stable circle
                    const orbitForceFactor = Math.max(0, 1 - Math.abs(distanceError) / INTERACTION_RADIUS)
                    this.vx += -ny * ORBIT_SPEED * orbitForceFactor
                    this.vy += nx * ORBIT_SPEED * orbitForceFactor
                } else {
                    // Friction: Return to base speed over time when outside interaction radius
                    this.vx = this.vx * 0.95 + this.baseVx * 0.05
                    this.vy = this.vy * 0.95 + this.baseVy * 0.05
                }

                // Speed limiting
                const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
                if (currentSpeed > MAX_SPEED && distance >= INTERACTION_RADIUS) {
                    this.vx = (this.vx / currentSpeed) * MAX_SPEED
                    this.vy = (this.vy / currentSpeed) * MAX_SPEED
                }
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            particles = []
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.update()
                p.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const onMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        // Event Listeners
        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', onMouseMove)
        document.body.addEventListener('mouseleave', onMouseLeave)

        // Start Engine
        resize()
        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            document.body.removeEventListener('mouseleave', onMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 w-full h-full z-0"
            aria-hidden="true"
        />
    )
}