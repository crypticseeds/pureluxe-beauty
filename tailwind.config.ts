import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#ec4899',
          yellow: '#fbbf24',
        },
        neutral: {
          white: '#ffffff',
          charcoal: '#1f2937',
        },
        background: {
          'gradient-start': '#fdf2f8', // pink-50
          'gradient-end': '#fffbeb',   // yellow-50
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-hover': 'scaleHover 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

export default config