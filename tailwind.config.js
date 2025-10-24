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
        brand: {
          blue: '#007AFF',
          hover: '#0A84FF',
        },
        ink: {
          primary: '#0A0A0A',
          secondary: '#50555A',
        },
        surface: {
          base: '#FFFFFF',
          tint: '#F6F8FB',
          border: '#EDF0F3',
        },
      },
      boxShadow: {
        soft: '0 18px 40px -28px rgba(10, 15, 30, 0.25)',
        'soft-lg': '0 28px 60px -34px rgba(10, 15, 30, 0.28)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        '7xl': '1200px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        carousel: 'carousel 28s linear infinite',
      },
    },
  },
  plugins: [],
};
