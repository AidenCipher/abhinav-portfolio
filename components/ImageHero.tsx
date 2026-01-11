'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageHeroProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export default function ImageHero({ 
  src, 
  alt, 
  priority = false,
  className = '' 
}: ImageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-64 md:h-96 overflow-hidden rounded-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </motion.div>
  )
}
