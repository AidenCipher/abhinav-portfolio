# Validation Checklist

## Routes
- [x] `/` - Home page
- [x] `/work` - Work page with case studies
- [x] `/about` - About page (essay-style)
- [x] `/writing` - Writing page (curated library)
- [x] `/now` - Now page
- [x] `/contact` - Contact page with form

## Internal Linking
- [x] Home → Work, About, Writing
- [x] Work → Writing
- [x] Writing → Work
- [x] About → Work, Writing, Contact
- [x] Navigation links all routes

## Design System
- [x] Off-white background (#fafafa)
- [x] Near-black text (#1a1a1a)
- [x] Muted accent color (#6b7280)
- [x] Serif headings (Georgia)
- [x] Sans-serif body text (system fonts)
- [x] Narrow content column (42rem max-width)
- [x] Generous whitespace
- [x] No gradients or flashy elements

## SEO & Accessibility
- [x] Semantic HTML
- [x] Meta tags on all pages
- [x] OpenGraph tags
- [x] Correct heading order (h1 → h2 → h3)
- [x] Keyboard navigation support
- [x] High contrast (meets WCAG AA)
- [x] No layout shift
- [x] robots.txt
- [x] sitemap.xml

## Mobile Responsive
- [x] Navigation wraps on small screens
- [x] Content width adapts with padding
- [x] Typography scales (text-4xl md:text-5xl)
- [x] Grid layouts adapt (grid md:grid-cols-2)
- [x] Form fields stack on mobile

## Vercel Compatibility
- [x] Next.js App Router
- [x] TypeScript
- [x] API routes (Edge-compatible)
- [x] No runtime filesystem writes
- [x] Environment variables structure ready

## Content Structure
- [x] Home: Positioning + trust
- [x] Work: 2-3 case studies with all required sections
- [x] About: Essay-style, no resume formatting
- [x] Writing: Curated library format (not blog feed)
- [x] Now: Current focus, learning, exploring
- [x] Contact: Email, LinkedIn, contact form

## API Routes
- [x] `/api/contact` - POST endpoint
- [x] Input validation
- [x] Error handling
- [x] Ready for email service integration

## Known Limitations & Notes

### Contact Form
- Currently returns success without sending email
- To enable email sending, integrate with email service (Resend, SendGrid, etc.)
- Update `/app/api/contact/route.ts` with email service integration
- Add `CONTACT_EMAIL` environment variable

### Content Updates
- Writing: Edit `/lib/writing.ts` to add/update curated writing
- Work: Edit `/lib/work.ts` to add/update case studies
- Now: Edit `/lib/now.ts` to update current focus
- Contact: Update email and LinkedIn in `/app/contact/page.tsx`

### SEO Configuration
- Update `metadataBase` in `/app/layout.tsx` with actual domain
- Update `sitemap.ts` baseUrl with actual domain
- Update `robots.ts` sitemap URL with actual domain

### Design Customization
- Colors: Edit `/tailwind.config.ts` colors section
- Typography: Edit `/tailwind.config.ts` fontFamily section
- Content width: Edit `/tailwind.config.ts` maxWidth.content

## Deployment Notes

1. Install dependencies: `npm install`
2. Update environment variables if needed (for email service)
3. Update domain URLs in layout.tsx, sitemap.ts, robots.ts
4. Update contact information in contact/page.tsx
5. Deploy to Vercel: Connect repository and deploy
6. Vercel will automatically detect Next.js and configure build settings
