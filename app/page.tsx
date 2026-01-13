import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Project Manager & Operations Specialist | Strategic thinking and systematic execution',
}

export default function Home() {
  return (
    <div className="content-width py-20 md:py-32">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
              Hi, I'm Abhinav
            </h1>
            <div className="space-y-4 text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight">
              <h2 className="font-light">
                I am here to help your business
              </h2>
              <h2 className="font-light">
                increase operational efficiency
              </h2>
              <h2 className="font-light">
                deliver strategic outcomes
              </h2>
              <h2 className="font-light">
                optimize complex systems
              </h2>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-square md:aspect-[1/1] rounded-2xl overflow-hidden bg-gray-100">
            <Image 
              src="/images/profile.jpeg"
              alt="Abhinav Rotti"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="space-y-8 mb-24 max-w-3xl">
          <p className="text-lg text-foreground leading-relaxed">
            I am a project manager and operations specialist, currently pursuing an MBA at Christ University. Through my work at Centilytics and MetricDust, I have focused on finding leverage points—the few interventions that create disproportionate outcomes in complex systems.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            My goal is to be an extension of your team, bring the knowledge needed to achieve your goals, and build strategies that are right for your business.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <section className="space-y-12 pt-16 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">What I can provide</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">01</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Project Management</h3>
                  <p className="text-foreground leading-relaxed">
                    Managing cross-functional projects, coordinating with C-Suite executives and international clients. Setting goals, KPIs, and timelines for strategy implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">02</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Operations Optimization</h3>
                  <p className="text-foreground leading-relaxed">
                    Optimizing processes, improving efficiency, and eliminating bottlenecks. Analysing portfolios, conducting audits, and implementing systematic improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">03</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Strategic Execution</h3>
                  <p className="text-foreground leading-relaxed">
                    Turning strategy into reality. Working closely with teams to ensure campaigns are set up with goals in mind, analysing results, and suggesting optimisations.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-light text-accent">04</span>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Consultancy</h3>
                  <p className="text-foreground leading-relaxed">
                    Training teams, finding the right solutions for your needs. Flexible attention based on your requirements, providing expertise when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <section className="pt-20 mt-20 border-t border-gray-200">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            Strategies can be created for all budgets. It is important to start off small, understand what works, adjust, and then scale.
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