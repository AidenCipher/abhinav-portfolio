// app/about/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MaskReveal from '@/components/motion/MaskReveal'
import SplitText from '@/components/motion/SplitText'
import { education, certifications, profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Project Manager and operations strategist working at the intersection of technology and process.',
}

export default function About() {
  return (
    <div className="content-width py-32 md:py-40">
      <header className="mb-20">
        <p className="text-eyebrow uppercase text-muted mb-8">
          <MaskReveal>(About)</MaskReveal>
        </p>
        <h1 className="text-display font-medium">
          <MaskReveal delay={0.06}>Abhinav Rotti</MaskReveal>
        </h1>
      </header>

      {/* Portrait + narrative */}
      <section className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start mb-32">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src="/images/abhinav-square.jpg"
            alt="Abhinav Rotti"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-lg text-muted leading-relaxed">
          <p className="text-paper text-2xl font-medium leading-snug">
            I operate at the intersection of technology and strategy.
          </p>
          <p>
            My background is in Information Science, and I moved into project
            management because the interesting problem was never the code — it
            was the process around it. An engineering degree taught me to read a
            system; operations taught me where systems quietly waste time.
          </p>
          <p>
            At BNY I spent an internship inside KYC quality control, where
            logging a single error took sixty seconds and a team of twenty was
            doing it fifteen hundred times a month. Applying Lean Six Sigma
            DMAIC and building a Power Apps solution with error-proofing built
            in brought that down to twelve seconds. The work earned a
            pre-placement offer for the 2027 Trainee Analyst Programme and was
            approved for expansion into Investment Banking QC.
          </p>
          <p>
            Before that, I managed cross-functional delivery at Centilytics,
            working with C-suite executives and international clients across a
            portfolio of seven-plus projects. I&rsquo;m currently completing an
            MBA at Christ University, Bengaluru.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-headline font-medium">
            <SplitText text="Education" />
          </h2>
          <span className="text-eyebrow uppercase text-muted">
            ({String(education.length).padStart(2, '0')})
          </span>
        </div>

        <ul className="border-t border-paper/15">
          {education.map((item) => (
            <li
              key={item.institution}
              className="border-b border-paper/15 py-8 grid md:grid-cols-[1.5fr_1fr] gap-4 md:gap-12"
            >
              <div>
                <h3 className="text-2xl font-medium">{item.institution}</h3>
                <p className="text-muted mt-1">{item.qualification}</p>
                {item.highlights && (
                  <ul className="mt-4 space-y-1">
                    {item.highlights.map((h) => (
                      <li key={h} className="text-muted text-sm">
                        — {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="md:text-right">
                <p className="text-eyebrow uppercase text-muted">{item.period}</p>
                <p className="text-signal mt-1">{item.result}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-headline font-medium">
            <SplitText text="Certifications" />
          </h2>
          <span className="text-eyebrow uppercase text-muted">
            ({String(certifications.length).padStart(2, '0')})
          </span>
        </div>

        <ul className="grid md:grid-cols-2 gap-x-12 border-t border-paper/15">
          {certifications.map((cert, i) => (
            <li
              key={cert}
              className="flex gap-4 border-b border-paper/10 py-4 text-muted"
            >
              <span className="text-eyebrow shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-paper/15 pt-16">
        <h2 className="text-headline font-medium max-w-2xl">
          <MaskReveal>Let&rsquo;s talk.</MaskReveal>
        </h2>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href="/contact"
            className="inline-block text-eyebrow uppercase border border-paper/30 rounded-full px-8 py-4 transition-colors hover:bg-signal hover:border-signal"
          >
            Get in touch
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-eyebrow uppercase border border-paper/30 rounded-full px-8 py-4 transition-colors hover:bg-signal hover:border-signal"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
