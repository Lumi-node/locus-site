/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0e1a',
        surface: '#0f1422',
        line: '#1f2a3e',
        muted: '#6d83a3',
        soft: '#a5b6cd',
        bright: '#e8edf2',
        white: '#f4f7fb',
        accent: {
          DEFAULT: '#7cc4ff',
          dim: '#3d7ab8',
        },
        ok: '#5fd47e',
        warn: '#f4c674',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(124,196,255,0.07) 1px, transparent 0)",
        'glow': "radial-gradient(ellipse at 50% 0%, rgba(124,196,255,0.12), transparent 60%)",
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.soft'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.soft'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.bright'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.muted'),
            '--tw-prose-hr': theme('colors.line'),
            '--tw-prose-quotes': theme('colors.soft'),
            '--tw-prose-quote-borders': theme('colors.accent.DEFAULT'),
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.accent.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.soft'),
            '--tw-prose-pre-bg': theme('colors.surface'),
            '--tw-prose-th-borders': theme('colors.line'),
            '--tw-prose-td-borders': theme('colors.line'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
