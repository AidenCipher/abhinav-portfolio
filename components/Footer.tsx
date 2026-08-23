import Link from 'next/link'
import { profile } from '@/lib/profile'

export default function Footer() {
  return (
    <footer className="border-t border-paper/15 mt-20">
      <div className="content-width py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-eyebrow uppercase text-muted mb-3">(Get in touch)</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-xl md:text-2xl font-medium hover:text-signal transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="text-eyebrow uppercase text-muted mb-3">(Elsewhere)</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-signal transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-signal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow uppercase text-muted mb-3">(Based in)</p>
            <p>{profile.location}</p>
            <p className="text-muted mt-1">Open to opportunities</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-2 text-eyebrow uppercase text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>/ 2026 /</span>
        </div>
      </div>
    </footer>
  )
}
