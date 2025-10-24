/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Text"', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
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
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};