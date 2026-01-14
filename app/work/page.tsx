'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { workExperience } from '@/lib/work'
import AnimatedSection from '@/components/AnimatedSection'

export default function Work() {
  return (
    <div className="content-width py-20 md:py-32">
      <AnimatedSection>
        <section className="space-y-8 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            Work
          </h1>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            A journey through professional experiences and projects. Each role represents strategic thinking applied to real challenges.
          </p>
        </section>
      </AnimatedSection>

      <section className="space-y-12">
        {workExperience.map((experience, expIndex) => (
          <AnimatedSection key={expIndex} delay={expIndex * 0.15}>
            <motion.article 
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="space-y-12 border-t border-gray-200 pt-12 pb-8 first:border-t-0 first:pt-0 p-4 md:p-8 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              {/* Company Header */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-foreground mb-3">
                    {experience.company}
                  </h2>
                  <p className="text-xl text-foreground mb-2">
                    {experience.role}
                  </p>
                  <p className="text-accent">
                    {experience.period}
                  </p>
                </div>
                <p className="text-lg text-foreground leading-relaxed max-w-3xl">
                  {experience.description}
                </p>
              </div>

              {/* Projects */}
              <div className="grid md:grid-cols-2 gap-8">
                {experience.projects.map((project, projIndex) => (
                  <div
                    key={projIndex}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-light text-accent">
                        {(projIndex + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <p className="text-accent text-sm">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          </AnimatedSection>
        ))}
      </section>

      <AnimatedSection delay={0.6}>
        <section className="pt-20 mt-20 border-t border-gray-200">
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg text-foreground leading-relaxed">
              If you wish to understand some of the previous work that I have done, please reach out and I would be happy to share.
            </p>
            <div>
              <Link 
                href="/contact" 
                className="text-foreground underline hover:opacity-70 transition-opacity text-lg"
              >
                Say hello
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}