import type { Metadata } from 'next'
import Link from 'next/link'
import MaskReveal from '@/components/motion/MaskReveal'
import SplitText from '@/components/motion/SplitText'
import { workExperience } from '@/lib/work'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Process improvement and delivery work across BNY, Centilytics, and MetricDust.',
}

export default function Work() {
  return (
    <div className="content-width py-32 md:py-40">
      <header className="mb-24">
        <p className="text-eyebrow uppercase text-muted mb-8">
          <MaskReveal>(Selected work)</MaskReveal>
        </p>
        <h1 className="text-display font-medium">
          <MaskReveal delay={0.06}>Work</MaskReveal>
        </h1>
        <p className="text-muted text-lg max-w-2xl mt-8">
          Three roles, one throughline: finding where a process actually loses
          time, then building the thing that fixes it.
        </p>
      </header>

      <div className="space-y-32">
        {workExperience.map((experience, expIndex) => (
          <article
            key={experience.company}
            className="border-t border-paper/15 pt-10"
          >
            <div className="flex items-baseline gap-6 mb-8">
              <span className="text-eyebrow text-muted shrink-0">
                ({String(expIndex + 1).padStart(2, '0')})
              </span>
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                  <SplitText text={experience.company} />
                </h2>
                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-muted">
                  <span>{experience.role}</span>
                  <span className="text-eyebrow uppercase self-center">
                    {experience.period}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted max-w-2xl mb-8">
              {experience.description}
            </p>

            {experience.highlight && (
              <p className="border-l-2 border-signal pl-5 py-1 text-signal text-lg font-medium max-w-2xl mb-12">
                {experience.highlight}
              </p>
            )}

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {experience.projects.map((project, projIndex) => (
                <li key={project.title} className="border-t border-paper/10 pt-5">
                  <span className="text-eyebrow text-muted">
                    {String(projIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-medium mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-signal">{project.outcome}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="border-t border-paper/15 mt-32 pt-16">
        <h2 className="text-headline font-medium max-w-2xl">
          <MaskReveal>Want the detail behind any of these?</MaskReveal>
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-10 text-eyebrow uppercase border border-paper/30 rounded-full px-8 py-4 transition-colors hover:bg-signal hover:border-signal"
        >
          Say hello
        </Link>
      </section>
    </div>
  )
}
