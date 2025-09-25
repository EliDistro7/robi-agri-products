import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
    extend: {
      fontFamily: {
        'heading': ['var(--font-montserrat)', 'sans-serif'],
        'subheading': ['var(--font-roboto-slab)', 'serif'],
        'body': ['var(--font-open-sans)', 'sans-serif'],
        'sans': ['var(--font-open-sans)', 'sans-serif'], // Default sans
      },
      fontWeight: {
        'extra-bold': '800',
      },
      colors: {
        // Agriculture-themed colors (optional)
        'earth': {
          50: '#f9f7f4',
          100: '#f0ebe2',
          200: '#e2d5c4',
          300: '#d0b89e',
          400: '#bc9a76',
          500: '#a67c5a',
          600: '#8b6447',
          700: '#6f4f38',
          800: '#5a402f',
          900: '#4a362a',
        },
        'forest': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd08d',
          400: '#4caf4c',
          500: '#2e7d32',
          600: '#1b5e20',
          700: '#1a4e1a',
          800: '#144014',
          900: '#0d2f0d',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
