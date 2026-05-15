import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0f1e',
        foreground: '#f8fafc',
        primary: {
          DEFAULT: '#ff7a00',
          50: '#fff4e6',
          100: '#ffe1bf',
          200: '#ffc78f',
          300: '#ffa856',
          400: '#ff8f29',
          500: '#ff7a00',
          600: '#e56a00',
          700: '#b25200',
          800: '#7d3900',
          900: '#4b2200',
        },
        slate: {
          950: '#0a0f1e',
          925: '#0c1226',
        },
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Space Grotesk"', 'Poppins', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(255,122,0,0.15), transparent 60%)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,122,0,0.45)' },
          '50%': { boxShadow: '0 0 0 18px rgba(255,122,0,0)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        marquee: 'marquee 35s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        blob: 'blob 18s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-out infinite',
      },
      backgroundSize: {
        '200': '200% 200%',
        'grid-size': '40px 40px',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(255,122,0,0.45)',
        'glow-lg': '0 0 80px -10px rgba(255,122,0,0.6)',
        'inner-glow': 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
