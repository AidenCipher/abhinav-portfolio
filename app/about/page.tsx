import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Project Manager & Operations Specialist | Combining technical expertise with strategic execution',
}

export default function About() {
  return (
    <div className="content-width py-20 md:py-32">
      <AnimatedSection>
        <section className="space-y-8 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            About
          </h1>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <article className="space-y-12 max-w-3xl">
          {/* The Narrative */}
          <div className="space-y-8 text-lg text-foreground leading-relaxed">
            <p>
              I operate at the intersection of <b>technology and strategy</b>. With a background in Information Science and hands-on experience in project management, I don't just manage tasks—I engineer outcomes.
            </p>
            
            <p>
              My philosophy is built on <b>&quot;Quiet Leverage&quot;</b>—the belief that significant impact comes from identifying and removing specific bottlenecks, not just adding more noise. At Centilytics, this meant optimizing CI/CD pipelines and rationalizing service portfolios to create systematic improvements that compounded over time.
            </p>
            
            <p>
              Currently, I am pursuing an MBA in Lean Operations and Systems, at Christ University to deepen my understanding of organizational dynamics. Whether leading logistics for university fests or managing cross-functional technical teams, my focus remains the same: clarity, consistency, and execution.
            </p>
          </div>

          {/* The Toolkit - Breaks up the text visually */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-light text-foreground mb-8">Toolkit & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Core Competencies</h3>
                <ul className="text-accent space-y-1">
                  <li>Project Management (Google Certified)</li>
                  <li>Lean Six Sigma (Green Belt)</li>
                  <li>Operations Strategy</li>
                  <li>Cross-Functional Leadership</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Technical Context</h3>
                <ul className="text-accent space-y-1">
                  <li>AWS Cloud Practitioner</li>
                  <li>Information Science Engineering</li>
                  <li>Data Lifecycle Management</li>
                  <li>Process Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section className="pt-20 mt-20 border-t border-gray-200">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">Why engage a consultant?</h2>
            
            <div className="space-y-8 mt-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">01</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Make confident decisions</h3>
                  <p className="text-foreground leading-relaxed">
                    Base your decisions on real data, not assumptions. Even established strategies need validation when facing uncertainty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">02</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Increase your efficiency</h3>
                  <p className="text-foreground leading-relaxed">
                    Using data-led approaches to reduce waste and improve outcomes. Creating simple, yet effective strategies to drive scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <section className="pt-20 mt-20 border-t border-gray-200">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            No need to get a full-time specialist on board—hire only when you need one. 
          </p>
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="text-foreground underline hover:opacity-70 transition-opacity text-lg"
            >
              Say hello
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}