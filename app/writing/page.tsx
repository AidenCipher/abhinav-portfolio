import type { Metadata } from 'next'
import Link from 'next/link'
import { writing } from '@/lib/writing'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Curated library of thinking on strategy, execution, and leverage',
}

export default function Writing() {
  return (
    <div className="content-width py-20 md:py-32">
      <AnimatedSection>
        <section className="space-y-8 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            Writing
          </h1>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            A curated library of thinking on strategy, execution, and leverage. Writing is hosted externally and organized here by theme and purpose.
          </p>
        </section>
      </AnimatedSection>

      <section className="space-y-12">
        {writing.length === 0 ? (
          <AnimatedSection>
            <div className="py-16 border-t border-gray-200">
              <p className="text-foreground text-lg">No writing items available.</p>
              <p className="text-accent text-sm mt-2">Check back soon for curated publications.</p>
            </div>
          </AnimatedSection>
        ) : (
          writing.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <article className="space-y-4 border-t border-gray-200 pt-8 first:border-t-0 first:pt-0">
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-foreground hover:opacity-70 transition-opacity">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {item.title}
                    </a>
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-accent">
                    <span>{item.theme}</span>
                    <span>•</span>
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{item.description}</p>
              </article>
            </AnimatedSection>
          ))
        )}
      </section>

      <AnimatedSection delay={0.4}>
        <section className="pt-20 mt-20 border-t border-gray-200">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            For case studies that apply these ideas, see <Link href="/work" className="underline hover:opacity-70 transition-opacity">Work</Link>.
          </p>
        </section>
      </AnimatedSection>
    </div>
  )
}
