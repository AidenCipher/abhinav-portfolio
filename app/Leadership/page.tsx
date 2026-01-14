import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Initiatives, team leadership, and academic projects.',
}

export default function Leadership() {
  const initiatives = [
    {
      role: 'Logistics & Operations Committee',
      event: 'USHUS 2025 Management Fest',
      description: 'Collaborated with a cross-functional team to plan and execute logistics for a university-wide event. Optimized processes for resource allocation to ensure smooth operational flow.',
      tags: ['Operations', 'Logistics', 'Team Coordination']
    },
    {
      role: 'App Development Lead',
      event: 'DBIT',
      description: 'Directed a 4-member team in an agile environment to design, build, and deploy workflow automation applications. Successfully reduced administrative workload by 40%.',
      tags: ['Agile Leadership', 'Product Management', 'Automation']
    },
    {
      role: 'Project Lead (Capstone)',
      event: 'Google Project Management',
      description: 'Designed a complete end-to-end project plan including charter, milestones, and stakeholder communication reports. Demonstrated systematic execution abilities in a simulated environment.',
      tags: ['Strategic Planning', 'Documentation', 'Stakeholder Management']
    },
    {
      role: 'Workshop Organizer',
      event: 'Technical Education',
      description: 'Organized and delivered Kotlin & Flutter development workshops for over 50 students. Used strong presentation skills to drive the adoption of new mobile technologies.',
      tags: ['Public Speaking', 'Mentorship', 'Technical Training']
    }
  ]

  return (
    <div className="content-width py-20 md:py-32">
      <AnimatedSection>
        <section className="space-y-8 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            Leadership
          </h1>
          <p className="text-lg text-foreground leading-relaxed max-w-3xl">
            Taking ownership beyond the job description. A collection of initiatives where I led teams, organized events, and drove technical adoption.
          </p>
        </section>
      </AnimatedSection>

      <section className="grid gap-12 md:grid-cols-2">
        {initiatives.map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="h-full border-t border-gray-200 pt-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors rounded-2xl p-6 -ml-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-medium text-foreground group-hover:text-gray-600 transition-colors">
                    {item.role}
                  </h2>
                  <p className="text-accent text-sm mt-1">{item.event}</p>
                </div>
                <p className="text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs uppercase tracking-wider text-accent border border-gray-200 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </div>
  )
}