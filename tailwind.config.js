/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Text"', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        eco: {
          babyBlue: '#6EC8FF',
          babySoft: '#A0DCFF',
          offWhite: '#FAF9F7',
          text: '#38322A',
          textSoft: 'rgba(56, 50, 42, 0.7)',
          earth: '#A7846C',
          softBlack: '#0B0B0B',
          border: '#E8E3DD',
          warmGray: '#F3EEE7',
        },
        brand: {
          blue: '#007AFF',
          navy: '#111827',
        },
        surface: {
          base: '#FFFFFF',
          subtle: '#F5F7FA',
          muted: '#E5E7EB',
        },
        ink: {
          base: '#111827',
          soft: 'rgba(17, 24, 39, 0.7)',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 20px 40px -24px rgba(17, 24, 39, 0.2)',
        'soft-lg': '0 28px 60px -30px rgba(17, 24, 39, 0.22)',
        'eco-soft': '0 4px 16px -4px rgba(56, 50, 42, 0.08)',
        'eco-medium': '0 8px 24px -6px rgba(56, 50, 42, 0.12)',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'eco-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};