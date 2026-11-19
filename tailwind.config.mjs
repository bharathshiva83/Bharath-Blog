/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#080808',
        },
        surface: {
          light: '#F7F7F7',
          dark: '#121212',
          subtle: {
            light: '#EFEFEF',
            dark: '#1A1A1A',
          }
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            lineHeight: '1.75',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: 'rgba(120, 113, 108, 0.4)',
              fontWeight: '500',
              '&:hover': {
                textDecorationColor: 'currentColor',
              },
            },
            h1: { color: 'inherit', fontWeight: '700', letterSpacing: '-0.025em' },
            h2: { color: 'inherit', fontWeight: '600', letterSpacing: '-0.02em', marginTop: '2.25rem' },
            h3: { color: 'inherit', fontWeight: '600', letterSpacing: '-0.015em', marginTop: '1.75rem' },
            strong: { color: 'inherit', fontWeight: '600' },
            code: {
              color: 'inherit',
              backgroundColor: 'rgba(120, 113, 108, 0.1)',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontSize: '0.875em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#111111',
              borderRadius: '0.5rem',
              border: '1px solid #222222',
            },
            blockquote: {
              borderLeftColor: 'rgba(120, 113, 108, 0.4)',
              color: 'inherit',
              fontStyle: 'normal',
              fontWeight: '400',
              opacity: '0.85',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
