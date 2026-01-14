'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function Contact() {
  return (
    <div className="content-width py-20 md:py-32">
      <AnimatedSection>
        <section className="space-y-8 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground">
            Contact
          </h1>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="space-y-12 max-w-3xl">
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Connect for strategic discussions, collaboration opportunities, or inquiries.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium text-foreground mb-2">Email</h2>
                <a
                  href="mailto:abhinav.rotti94@gmail.com"
                  className="text-2xl md:text-3xl font-light text-foreground underline hover:opacity-70 transition-opacity"
                >
                  abhinav.rotti94@gmail.com
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <h2 className="text-xl font-medium text-foreground mb-2">LinkedIn</h2>
                  <a
                    href="https://linkedin.com/in/abhinavrotti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline hover:opacity-70 transition-opacity"
                  >
                    linkedin.com/in/abhinavrotti
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-medium text-foreground mb-2">Phone</h2>
                  <a
                    href="tel:+919916708854"
                    className="text-foreground underline hover:opacity-70 transition-opacity"
                  >
                    +91 9916708854
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-medium text-foreground mb-2">Location</h2>
                  <p className="text-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}