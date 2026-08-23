// app/Leadership/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import MaskReveal from '@/components/motion/MaskReveal'
import SplitText from '@/components/motion/SplitText'
import { leadership } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Festival operations, team leadership, and technical mentorship across Christ University and DBIT.',
}

export default function Leadership() {
  return (
    <div className="content-width py-32 md:py-40">
      <header className="mb-24">
        <p className="text-eyebrow uppercase text-muted mb-8">
          <MaskReveal>(Leadership)</MaskReveal>
        </p>
        <h1 className="text-display font-medium">
          <MaskReveal delay={0.06}>Leadership</MaskReveal>
        </h1>
        <p className="text-muted text-lg max-w-2xl mt-8">
          Ownership beyond the job description — where I led teams, ran events
          at scale, and drove technical adoption.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        {leadership.map((item, index) => (
          <article
            key={`${item.role}-${item.org}`}
            className="group border-t border-paper/15 py-8 flex flex-col"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-eyebrow text-muted shrink-0">
                ({String(index + 1).padStart(2, '0')})
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors group-hover:text-signal">
                  <SplitText text={item.role} />
                </h2>
                <p className="text-eyebrow uppercase text-muted mt-2">
                  {item.org}
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed flex-1">
              {item.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-6">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-eyebrow uppercase text-muted border border-paper/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="border-t border-paper/15 mt-24 pt-16">
        <h2 className="text-headline font-medium max-w-2xl">
          <MaskReveal>Building something that needs running?</MaskReveal>
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-10 text-eyebrow uppercase border border-paper/30 rounded-full px-8 py-4 transition-colors hover:bg-signal hover:border-signal"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}
