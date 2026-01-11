# Personal Branding Website - Project Documentation

## Project Overview

A production-ready personal branding website built with Next.js, TypeScript, and Tailwind CSS. The site represents a strategy + execution professional with a focus on quiet leverage, minimal design, and curated thinking.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Serverless + Edge)
- **Runtime**: Node.js (Edge-compatible)

## Project Structure

```
abhinav-rotti-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page (essay-style)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── contact/
│   │   ├── layout.tsx        # Contact page metadata
│   │   └── page.tsx          # Contact page with form
│   ├── now/
│   │   └── page.tsx          # Now page (current focus)
│   ├── work/
│   │   └── page.tsx          # Work page (case studies)
│   ├── writing/
│   │   └── page.tsx          # Writing page (curated library)
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── robots.ts             # robots.txt generation
│   └── sitemap.ts            # sitemap.xml generation
├── components/
│   ├── ContactForm.tsx       # Contact form component
│   ├── Footer.tsx            # Footer component
│   └── Navigation.tsx        # Navigation component
├── lib/
│   ├── now.ts                # Now page data
│   ├── work.ts               # Case studies data
│   └── writing.ts            # Writing curation data
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Key Components

### Navigation
- Client component using Next.js `usePathname` hook
- Responsive navigation with active state indication
- All routes accessible from navigation

### Footer
- Simple footer with site branding
- Minimal design consistent with theme

### ContactForm
- Client component with form state management
- Submits to `/api/contact` endpoint
- Error handling and success states
- Accessible form fields with labels

## Design System

### Colors
- Background: `#fafafa` (off-white)
- Foreground: `#1a1a1a` (near-black)
- Accent: `#6b7280` (muted gray)

### Typography
- Headings: Georgia (serif)
- Body: System fonts (sans-serif)
- Optimized for long-form reading

### Layout
- Content width: 42rem (narrow column)
- Generous whitespace
- Mobile-responsive with padding adjustments

## Data Management

### Writing Curation (`/lib/writing.ts`)
External writing links are managed in a TypeScript array. Each item includes:
- Title
- Description
- Theme
- Date
- External URL

To add or update writing:
1. Edit `/lib/writing.ts`
2. Add/update items in the `writing` array
3. Site automatically reflects changes

### Case Studies (`/lib/work.ts`)
Case studies are managed in a TypeScript array. Each case includes:
- Title
- Context
- Problem
- Approach
- Execution
- Outcome
- Reflection

To add or update case studies:
1. Edit `/lib/work.ts`
2. Add/update items in the `caseStudies` array
3. Site automatically reflects changes

### Now Page (`/lib/now.ts`)
Current focus is managed in a TypeScript object with three arrays:
- Focus
- Learning
- Exploring

To update the Now page:
1. Edit `/lib/now.ts`
2. Update the `nowContent` object
3. Site automatically reflects changes

## Pages

### Home (`/`)
- Positioning and trust building
- Leads with ideas, reveals name naturally
- Links to Work, About, Writing
- Minimal, intellectual design

### Work (`/work`)
- Case studies demonstrating strategic thinking
- Each case includes: Context, Problem, Approach, Execution, Outcome, Reflection
- Links to Writing page

### About (`/about`)
- Essay-style narrative (no resume formatting)
- Principles and approach
- Implicit Pareto/leverage thinking
- Links to Work, Writing, Contact

### Writing (`/writing`)
- Curated library of external writing
- Not a blog feed - feels like a personal library
- Organized by theme and date
- External links to Medium, etc.
- Links to Work page

### Now (`/now`)
- Current focus, learning, exploring
- Short, intentional, no fluff
- Three sections: Focus, Learning, Exploring

### Contact (`/contact`)
- Email and LinkedIn links
- Contact form using Vercel API route
- Form validation and error handling

## API Routes

### `/api/contact` (POST)
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response:**
- Success: `200` with `{ success: true }`
- Error: `400` or `500` with error message

**Integration Note:**
Currently returns success without sending email. To enable email sending:
1. Integrate with email service (Resend, SendGrid, etc.)
2. Update `/app/api/contact/route.ts`
3. Add `CONTACT_EMAIL` environment variable
4. Uncomment and configure email sending code

## SEO & Accessibility

### SEO Features
- Meta tags on all pages
- OpenGraph tags
- Twitter card tags
- robots.txt (via `/app/robots.ts`)
- sitemap.xml (via `/app/sitemap.ts`)
- Semantic HTML
- Proper heading hierarchy

### Accessibility Features
- Semantic HTML elements
- Proper heading order (h1 → h2 → h3)
- Form labels
- Keyboard navigation support
- High contrast (WCAG AA compliant)
- ARIA labels where appropriate
- Focus states on interactive elements

## Deployment

### Vercel Deployment

1. **Connect Repository**
   - Push code to GitHub/GitLab/Bitbucket
   - Import repository in Vercel dashboard

2. **Environment Variables** (if using email service)
   - Add `CONTACT_EMAIL` in Vercel dashboard
   - Add email service API keys if needed

3. **Build Settings**
   - Vercel auto-detects Next.js
   - Build command: `next build`
   - Output directory: `.next`

4. **Domain Configuration**
   - Update `metadataBase` in `/app/layout.tsx`
   - Update `baseUrl` in `/app/sitemap.ts`
   - Update sitemap URL in `/app/robots.ts`
   - Update contact email/LinkedIn in `/app/contact/page.tsx`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Updating Contact Information
Edit `/app/contact/page.tsx`:
- Email address
- LinkedIn URL

### Updating Site Branding
Edit `/app/layout.tsx`:
- Site title and description
- OpenGraph tags

### Updating Colors
Edit `/tailwind.config.ts`:
- Background color
- Foreground color
- Accent color

### Updating Typography
Edit `/tailwind.config.ts`:
- Font families for headings and body
- Font sizes in component classes

### Updating Content Width
Edit `/tailwind.config.ts`:
- `maxWidth.content` value

## Design Rationale

### Theme: Quiet Leverage

The design embodies "quiet leverage" through:

1. **Minimal Visual Language**
   - Off-white background reduces visual noise
   - Near-black text ensures readability
   - Single muted accent color
   - No gradients or flashy elements

2. **Typography Hierarchy**
   - Serif headings (Georgia) for intellectual tone
   - Sans-serif body for clarity
   - Narrow content column for focused reading

3. **Generous Whitespace**
   - Breathing room between elements
   - Clear separation of ideas
   - No clutter or unnecessary elements

4. **Intellectual Tone**
   - Essay-style content (About page)
   - Reflection sections in case studies
   - Curated library feel (Writing page)
   - No social-media vibes

5. **Calm Interaction**
   - Subtle hover states (opacity transitions)
   - No animations or distractions
   - Clear navigation without flashy effects

## Validation Checklist

See `VALIDATION.md` for complete validation checklist including:
- All routes verified
- Internal linking checked
- Mobile responsiveness tested
- SEO metadata validated
- Accessibility features confirmed
- Vercel compatibility verified

## Limitations & Future Enhancements

### Current Limitations
1. Contact form doesn't send emails (placeholder implementation)
2. Domain URLs need to be updated before deployment
3. Contact information uses placeholder values

### Potential Enhancements
1. Email service integration (Resend, SendGrid)
2. Analytics integration (if desired)
3. RSS feed for writing (if desired)
4. Search functionality (if content grows)
5. Dark mode (if desired, though conflicts with theme)

## Maintenance

### Regular Updates
- **Writing**: Add new curated pieces to `/lib/writing.ts`
- **Work**: Add new case studies to `/lib/work.ts`
- **Now**: Update current focus in `/lib/now.ts`

### Content Guidelines
- Writing should be curated, not comprehensive
- Case studies should include reflection
- About page should remain essay-style (no resume format)
- Now page should be current and intentional

This site represents strategic thinking and systematic execution. Every element should reflect quiet leverage and intellectual rigor.
