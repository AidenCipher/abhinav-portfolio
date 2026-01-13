'use client'

import { motion } from 'framer-motion'

interface StaggeredTextProps {
  lines: string[]
  className?: string
}

export default function StaggeredText({ lines, className = '' }: StaggeredTextProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] } },
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={item}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  )
}