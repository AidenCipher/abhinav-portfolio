import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MaskReveal from '@/components/motion/MaskReveal'
import SplitText from '@/components/motion/SplitText'
import Marquee from '@/components/motion/Marquee'
import ScrollWords from '@/components/motion/ScrollWords'
import MetricCounter from '@/components/motion/MetricCounter'
import { metrics } from '@/lib/metrics'
import { workExperience } from '@/lib/work'
import { skills } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Project Manager and operations strategist. Lean Six Sigma Green Belt working across process improvement, delivery, and automation.',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="content-width min-h-screen flex flex-col justify-end pb-16 pt-40">
        {/* Splits at lg, not md: at 768px the text column is only ~374px and
            the longest headline wraps inside its single-line mask. */}
        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-10 lg:gap-14 items-end">
          <div>
            <p className="text-eyebrow uppercase text-muted mb-8">
              <MaskReveal>(Project Manager &amp; Operations Strategist)</MaskReveal>
            </p>
            {/* Two scales, because the column width changes shape at lg: while
                stacked the headline can run wide, once split it must clear the
                portrait. Both are tuned so the longest line never wraps — the
                masks are sized for one line each. */}
            <h1 className="text-[clamp(1.65rem,8.2vw,3.25rem)] lg:text-[clamp(2.5rem,4.6vw,4rem)] leading-[0.95] tracking-[-0.04em] font-medium">
              <MaskReveal>I&rsquo;m Abhinav Rotti,</MaskReveal>
              <MaskReveal delay={0.08}>I find the leverage points</MaskReveal>
              <MaskReveal delay={0.16}>in complex operations.</MaskReveal>
            </h1>
          </div>

          <div className="relative aspect-[4/5] max-w-sm lg:max-w-none overflow-hidden rounded-2xl">
            <Image
              src="/images/abhinav.jpg"
              alt="Abhinav Rotti"
              fill
              sizes="(max-width: 1024px) 24rem, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between border-t border-paper/15 pt-6">
          <span className="text-eyebrow uppercase text-muted">/ 2026 /</span>
          <span className="text-eyebrow uppercase text-muted">Bengaluru, India</span>
        </div>
      </section>

      {/* Marquee band */}
      <div className="bg-signal text-ink py-5 my-20">
        <Marquee baseVelocity={4}>
          <span className="text-headline font-medium px-6 uppercase">
            Let&rsquo;s work together <span className="opacity-50">✳</span>
          </span>
        </Marquee>
      </div>

      {/* Selected work */}
      <section className="content-width py-24">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="text-headline font-medium">
            <SplitText text="Where I've worked" />
          </h2>
          <span className="text-eyebrow uppercase text-muted">
            ({String(workExperience.length).padStart(2, '0')})
          </span>
        </div>

        <ul className="border-t border-paper/15">
          {workExperience.map((job, i) => (
            <li key={job.company} className="border-b border-paper/15">
              <Link
                href="/work"
                className="group flex items-baseline gap-6 py-8 md:py-10 transition-colors hover:text-signal"
              >
                <span className="text-eyebrow text-muted w-10 shrink-0">
                  ({String(i + 1).padStart(2, '0')})
                </span>
                <span className="flex-1">
                  <span className="block text-3xl md:text-5xl font-medium tracking-tight transition-transform duration-500 ease-expo group-hover:translate-x-3">
                    {job.company}
                  </span>
                  <span className="block text-muted mt-2 md:hidden">{job.role}</span>
                </span>
                <span className="hidden md:block text-muted shrink-0 w-64">
                  {job.role}
                </span>
                <span className="hidden md:block text-eyebrow uppercase text-muted shrink-0">
                  {job.period}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Metrics wall — stands in for project imagery */}
      <section className="content-width py-24">
        <p className="text-eyebrow uppercase text-muted mb-12">(Outcomes)</p>
        <div className="grid gap-16 md:gap-24">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-12 items-end border-b border-paper/15 pb-8"
            >
              <div>
                <MetricCounter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  className="text-metric font-medium text-signal block"
                />
                <p className="text-2xl md:text-3xl font-medium mt-2">{m.label}</p>
              </div>
              <div className="md:text-right md:max-w-sm">
                <p className="text-eyebrow uppercase text-muted mb-2">{m.org}</p>
                <p className="text-muted">{m.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="content-width py-32">
        <ScrollWords
          text="Operations is the strategic, the intentional, and often the invisible work of finding leverage points — the few interventions that create disproportionate outcomes across complex systems."
          className="text-headline font-medium max-w-5xl"
        />
      </section>

      {/* Capabilities */}
      <section className="content-width py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-headline font-medium">
            <SplitText text="What I do" />
          </h2>
          <p className="text-muted mt-6 max-w-sm">
            Lean Six Sigma method paired with hands-on delivery — diagnosing where
            a process actually loses time, then building the thing that fixes it.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="border-t border-paper/15 pt-6">
              <div className="flex items-baseline justify-between mb-5">
                <h3 className="text-2xl font-medium">{group}</h3>
                <span className="text-eyebrow text-muted">
                  ({String(items.length).padStart(2, '0')})
                </span>
              </div>
              <ul>
                {items.map((item, i) => (
                  <li
                    key={item}
                    className="flex justify-between text-muted border-b border-paper/10 py-2"
                  >
                    <span>{item}</span>
                    <span className="text-xs">{i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="content-width py-32 text-center">
        <h2 className="text-headline font-medium max-w-3xl mx-auto">
          <MaskReveal>Have a process that</MaskReveal>
          <MaskReveal delay={0.08}>isn&rsquo;t working? Let&rsquo;s fix it.</MaskReveal>
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-12 text-eyebrow uppercase border border-paper/30 rounded-full px-8 py-4 transition-colors hover:bg-signal hover:border-signal"
        >
          Start the conversation
        </Link>
      </section>
    </>
  )
}
