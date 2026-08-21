/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olney: {
          dark: '#0a0c10',
          darker: '#06070a',
          panel: '#12161f',
          'panel-alto': '#1a202c',
          'panel-hover': '#242c3d',
          border: '#2a3447',
          'border-light': '#3b4862',
          red: '#d01218',
          'red-dark': '#a10d12',
          'red-glow': 'rgba(208, 18, 24, 0.4)',
          gold: '#eab308',
          'gold-light': '#fde047',
          muted: '#94a3b8',
          tinta: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(208, 18, 24, 0.5)',
        'glow-gold': '0 0 25px -5px rgba(234, 179, 8, 0.4)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.015)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
