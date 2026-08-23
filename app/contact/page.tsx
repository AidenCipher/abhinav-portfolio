import MaskReveal from '@/components/motion/MaskReveal'
import Marquee from '@/components/motion/Marquee'
import { profile } from '@/lib/profile'

const channels = [
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'Location', value: profile.location },
]

export default function Contact() {
  return (
    <div className="py-32 md:py-40">
      <div className="content-width">
        <header className="mb-20">
          <p className="text-eyebrow uppercase text-muted mb-8">
            <MaskReveal>(Contact)</MaskReveal>
          </p>
          <h1 className="text-display font-medium">
            <MaskReveal delay={0.06}>Let&rsquo;s talk.</MaskReveal>
          </h1>
          <p className="text-muted text-lg max-w-2xl mt-8">
            Open to conversations about operations, process improvement, and
            project delivery — or anything adjacent.
          </p>
        </header>

        {/* Primary channel */}
        <section className="border-t border-paper/15 pt-10 mb-16">
          <p className="text-eyebrow uppercase text-muted mb-4">(Email)</p>
          <a
            href={`mailto:${profile.email}`}
            className="text-3xl md:text-6xl font-medium tracking-tight break-all transition-colors hover:text-signal"
          >
            {profile.email}
          </a>
        </section>

        {/* Secondary channels */}
        <section className="grid md:grid-cols-3 gap-8 border-t border-paper/15 pt-10">
          {channels.map((c) => (
            <div key={c.label}>
              <p className="text-eyebrow uppercase text-muted mb-3">({c.label})</p>
              {c.href ? (
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="text-lg transition-colors hover:text-signal break-all"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-lg">{c.value}</p>
              )}
            </div>
          ))}
        </section>
      </div>

      <div className="bg-signal text-ink py-5 mt-32">
        <Marquee baseVelocity={4}>
          <span className="text-headline font-medium px-6 uppercase">
            Available for opportunities <span className="opacity-50">✳</span>
          </span>
        </Marquee>
      </div>
    </div>
  )
}
