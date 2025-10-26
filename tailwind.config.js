/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Text"', '"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"SF Pro Display"', '"SF Pro Text"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        eco: {
          bg: '#FFFFFF',
          line: 'rgba(0,0,0,0.06)',
          muted: '#F5F6F8',
          text: '#0F172A',
          subtle: '#475569',
          brand: '#007AFF',
        },
      },
      borderRadius: {
        eco: '0.75rem',
        'eco-lg': '1rem',
        'eco-xl': '1.5rem',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};