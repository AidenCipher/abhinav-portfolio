import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0F',
        paper: '#F4F2ED',
        signal: '#2F5BFF',
        muted: '#6B6B70',
        background: '#0D0D0F',
        foreground: '#F4F2ED',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 7.5vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        headline: ['clamp(2rem, 5.5vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        metric: ['clamp(4rem, 14vw, 16rem)', { lineHeight: '0.82', letterSpacing: '-0.05em' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        content: '80rem',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
