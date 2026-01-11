# Vercel Deployment Checklist

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] No linter errors
- [x] All TypeScript types defined
- [x] All imports resolved
- [x] Next.js configuration correct

### ✅ Configuration Files
- [x] `package.json` - All dependencies listed
- [x] `next.config.js` - Image domains configured
- [x] `tsconfig.json` - TypeScript config correct
- [x] `.gitignore` - Includes node_modules, .next, etc.

### ✅ Vercel-Specific
- [x] Next.js App Router structure
- [x] API routes configured correctly
- [x] No runtime filesystem writes
- [x] Environment variables documented

### ⚠️ Before Deployment

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Domain URLs** (Required before deployment)
   - `app/layout.tsx` - Update `metadataBase` URL
   - `app/sitemap.ts` - Update `baseUrl`
   - `app/robots.ts` - Update sitemap URL

3. **Test Build Locally** (Optional but recommended)
   ```bash
   npm run build
   npm start
   ```

4. **Environment Variables** (If using email service)
   - Add `CONTACT_EMAIL` in Vercel dashboard
   - Add email service API keys if needed

## Deployment Steps

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Post-Deployment**
   - Update domain URLs after deployment
   - Configure custom domain (optional)
   - Test all routes
   - Verify contact form (if email service configured)

## Files Status

### Core Files
- ✅ `app/layout.tsx` - Root layout with metadata
- ✅ `app/page.tsx` - Home page
- ✅ `app/work/page.tsx` - Work page
- ✅ `app/about/page.tsx` - About page
- ✅ `app/writing/page.tsx` - Writing page
- ✅ `app/now/page.tsx` - Now page
- ✅ `app/contact/page.tsx` - Contact page

### API Routes
- ✅ `app/api/contact/route.ts` - Contact form API

### Components
- ✅ `components/Navigation.tsx` - Navigation with animations
- ✅ `components/Footer.tsx` - Footer
- ✅ `components/ContactForm.tsx` - Contact form
- ✅ `components/AnimatedSection.tsx` - Animation wrapper
- ✅ `components/ImageHero.tsx` - Image hero component (unused but available)

### Configuration
- ✅ `next.config.js` - Next.js config with image domains
- ✅ `tailwind.config.ts` - Tailwind configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `package.json` - Dependencies listed

### Data Files
- ✅ `lib/work.ts` - Case studies
- ✅ `lib/writing.ts` - Writing curation
- ✅ `lib/now.ts` - Current focus

### SEO Files
- ✅ `app/robots.ts` - Robots.txt
- ✅ `app/sitemap.ts` - Sitemap.xml

## Known Notes

1. **Contact Form** - Currently returns success without sending email. To enable email, integrate with Resend, SendGrid, or similar service.

2. **Images** - Using Unsplash images. Images load from external source. Consider downloading and hosting locally for production if needed.

3. **Dependencies** - All dependencies are listed in `package.json`. Run `npm install` before deployment.

4. **Build Output** - Using `output: 'standalone'` in Next.js config for optimized deployment.

## Quick Deploy

```bash
# 1. Install dependencies
npm install

# 2. Build locally (optional test)
npm run build

# 3. Deploy to Vercel (after pushing to Git)
# Use Vercel CLI or web interface
npx vercel
```
