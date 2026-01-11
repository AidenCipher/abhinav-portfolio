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
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I bring together technical understanding and strategic execution. With a background in Information Science and Engineering, combined with hands-on experience in project management and operations, I focus on finding the right interventions that create measurable outcomes.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My work centers on identifying leverage points in complex systems. At Centilytics, I managed a portfolio of cross-functional projects, worked with C-Suite executives and international clients, and focused on systematic improvements that compound over time. The key insight: most impact comes from a few critical interventions, not many small ones.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              This approach—quiet leverage—guides how I work. Not flashy transformations, but precise, strategic improvements. When I optimized CI/CD processes, the focus wasn't on overhauling the entire infrastructure, but on identifying and removing specific bottlenecks. When I led data lifecycle management, the solution wasn't a new system, but systematic cleanup and clear policies consistently applied.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Currently, I'm pursuing an MBA at Christ University, deepening my understanding of strategy, operations, and organizational dynamics. I'm actively involved in university initiatives—from organizing logistics and events as a core committee member, to coordinating literary events, to leading team efforts in competitions. These roles reinforce what I've learned professionally: that execution matters as much as strategy, and that clarity and consistency often beat complexity.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My technical foundation in Information Science, combined with certifications in Project Management (Google), AWS Cloud, and Lean Six Sigma, provides a practical lens for problem-solving. Whether it's analysing a portfolio of 250+ services to improve pricing accuracy, or managing projects that span multiple business units, the principle remains the same: identify the constraint, address it systematically, move to the next constraint.
            </p>
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
                    Base your decisions on real data, and not on assumptions. Validation may be needed before moving forward. Even when businesses have been using a strategy for a while, they may suddenly face an uncertain world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">02</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Understand the latest in operations</h3>
                  <p className="text-foreground leading-relaxed">
                    It is difficult to stay up to date with the latest trends, regulations, tools and processes. Learn through us, tailored for your business, without the jargon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">03</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Increase your efficiency</h3>
                  <p className="text-foreground leading-relaxed">
                    Using data-led approaches to increase operational efficiency, reduce waste, and improve outcomes, whilst understanding your return on investment. Creating simple, yet effective strategies to drive scale and reduce waste.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">04</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Challenge your comfort</h3>
                  <p className="text-foreground leading-relaxed">
                    Have you been doing the same strategy over and over again? Do you feel that your results could be improved? I will strive to take your operational success to a whole new level.
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
            No need to get a full time specialist on board, hire only when you need one. Resulting in less costs, high expertise in project management and operations, and a broad knowledge from different industries.
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
