'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

export default function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: 'linear', stiffness: 300 }}
      className="p-6 -ml-6 rounded-2xl hover:bg-white/50 transition-colors"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl font-light text-accent">{number}</span>
        <div>
          <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
          <p className="text-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}