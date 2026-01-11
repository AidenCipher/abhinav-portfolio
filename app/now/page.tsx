import type { Metadata } from 'next'
import { nowContent } from '@/lib/now'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Now',
  description: 'Current focus, learning, and exploration',
}

export default function Now() {
  return (
    <div className="content-width py-20 md:py-32">
      <AnimatedSection>
        <section className="space-y-8 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            Now
          </h1>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            Current focus, learning, and exploration. Updated intentionally.
          </p>
        </section>
      </AnimatedSection>

      <section className="space-y-12 max-w-3xl">
        <AnimatedSection delay={0.1}>
          <div className="space-y-6 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-medium text-foreground">Focus</h2>
            <ul className="space-y-4">
              {nowContent.focus.map((item, index) => (
                <li key={index} className="text-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-medium text-foreground">Learning</h2>
            <ul className="space-y-4">
              {nowContent.learning.map((item, index) => (
                <li key={index} className="text-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="space-y-6 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-medium text-foreground">Exploring</h2>
            <ul className="space-y-4">
              {nowContent.exploring.map((item, index) => (
                <li key={index} className="text-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
