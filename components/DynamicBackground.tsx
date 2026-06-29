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
        const INTERACTION_RADIUS = 250 // Cursor attraction distance
        const TARGET_RADIUS = 80 // Circle radius around cursor
        const GRAVITY = 0.8 // Pull strength
        const ORBIT_SPEED = 2.5 // Speed of revolution
        const MAX_SPEED = 4
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
            originX: number
            originY: number
            vx: number
            vy: number
            baseVx: number
            baseVy: number
            size: number
            color: string

            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.originX = this.x
                this.originY = this.y
                this.vx = (Math.random() - 0.5) * BASE_SPEED
                this.vy = (Math.random() - 0.5) * BASE_SPEED
                this.baseVx = this.vx
                this.baseVy = this.vy
                this.size = Math.random() * 2 + 1 // Size between 1px and 3px
                this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
            }

            update() {
                // Update the "phantom" original position
                this.originX += this.baseVx
                this.originY += this.baseVy

                // Screen bounds collision for the original position
                if (this.originX <= 0 || this.originX >= canvas.width) {
                    this.baseVx *= -1
                    this.originX = Math.max(0, Math.min(this.originX, canvas.width))
                }
                if (this.originY <= 0 || this.originY >= canvas.height) {
                    this.baseVy *= -1
                    this.originY = Math.max(0, Math.min(this.originY, canvas.height))
                }

                // Check distance from cursor to original position
                const dxMouse = mouse.x - this.originX
                const dyMouse = mouse.y - this.originY
                const distanceToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

                if (distanceToMouse < INTERACTION_RADIUS) {
                    // Pulled towards cursor
                    const dx = mouse.x - this.x
                    const dy = mouse.y - this.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance > 0) {
                        const nx = dx / distance
                        const ny = dy / distance
                        
                        // Force to pull/push particles to TARGET_RADIUS
                        const distanceError = distance - TARGET_RADIUS
                        const radialForce = distanceError * 0.05
                        
                        this.vx += nx * radialForce
                        this.vy += ny * radialForce

                        // Tangential force for revolution
                        const orbitForceFactor = Math.max(0, 1 - Math.abs(distanceError) / INTERACTION_RADIUS)
                        this.vx += -ny * ORBIT_SPEED * orbitForceFactor
                        this.vy += nx * ORBIT_SPEED * orbitForceFactor
                        
                        // Limit orbit speed slightly when captured
                        const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
                        if (currentSpeed > MAX_SPEED * 2) {
                            this.vx = (this.vx / currentSpeed) * MAX_SPEED * 2
                            this.vy = (this.vy / currentSpeed) * MAX_SPEED * 2
                        }
                    }
                } else {
                    // Return to original position
                    const dxOrigin = this.originX - this.x
                    const dyOrigin = this.originY - this.y
                    const distanceToOrigin = Math.sqrt(dxOrigin * dxOrigin + dyOrigin * dyOrigin)

                    if (distanceToOrigin > 0.5) {
                        // Spring back to origin
                        this.vx += (dxOrigin * 0.05)
                        this.vy += (dyOrigin * 0.05)
                        // Add friction so they don't oscillate forever
                        this.vx *= 0.92
                        this.vy *= 0.92
                    } else {
                        // Once close enough, perfectly match original position and movement
                        this.x = this.originX
                        this.y = this.originY
                        this.vx = this.baseVx
                        this.vy = this.baseVy
                    }
                }

                // Apply velocity to actual position
                this.x += this.vx
                this.y += this.vy
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