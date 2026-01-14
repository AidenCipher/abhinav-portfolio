import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from './profile.jpeg' // Ensure this matches your file path/name
import AnimatedSection from '@/components/AnimatedSection'
import ServiceCard from '@/components/ServiceCard' // <--- Import the new component
import StaggeredText from '@/components/StaggeredText'

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
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
              Hi, I'm Abhinav
            </h1>
            <StaggeredText 
              className="space-y-4 text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-tight"
              lines={[
                "I am here to help your business",
                "increase operational efficiency",
                "deliver strategic outcomes",
                "optimize complex systems"
              ]}
            />
          </div>

          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
            <Image 
              src="/images/profile.jpeg"
              alt="Abhinav Rotti"
              fill
              className="object-cover object-center" 
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
            <ServiceCard 
              number="01"
              title="Project Management"
              description="Managing cross-functional projects, coordinating with C-Suite executives and international clients. Setting goals, KPIs, and timelines for strategy implementation."
            />

            <ServiceCard 
              number="02"
              title="Operations Optimization"
              description="Optimizing processes, improving efficiency, and eliminating bottlenecks. Analysing portfolios, conducting audits, and implementing systematic improvements."
            />

            <ServiceCard 
              number="03"
              title="Strategic Execution"
              description="Turning strategy into reality. Working closely with teams to ensure campaigns are set up with goals in mind, analysing results, and suggesting optimisations."
            />

            <ServiceCard 
              number="04"
              title="Consultancy"
              description="Training teams, finding the right solutions for your needs. Flexible attention based on your requirements, providing expertise when you need it."
            />
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