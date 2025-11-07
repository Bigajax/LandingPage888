/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"SF Pro Text"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          blue: '#6EC8FF',
          clay: '#A7846C',
        },
        surface: {
          base: '#FAF9F7',
          subtle: '#F3EEE7',
          muted: 'rgba(56, 50, 42, 0.16)',
        },
        ink: {
          base: '#38322A',
          soft: 'rgba(56, 50, 42, 0.72)',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 28px 65px -40px rgba(56, 50, 42, 0.28)',
        'soft-lg': '0 38px 90px -48px rgba(56, 50, 42, 0.45)',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
