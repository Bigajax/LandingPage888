/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#f8f6ff',
          100: '#f0ebff',
          200: '#e4d9ff',
          300: '#d3bdff',
          400: '#ba94ff',
          500: '#a46fff',
          600: '#9a4eff',
          700: '#8b38ff',
          800: '#7626ff',
          900: '#6517ff',
        },
        pink: {
          50: '#fdf5fb',
          100: '#fcebf8',
          200: '#fad7f2',
          300: '#f7b6e6',
          400: '#f284d3',
          500: '#eb57bc',
          600: '#db3ba3',
          700: '#c02887',
          800: '#a1216f',
          900: '#861f5e',
        },
      },
    },
  },
  plugins: [],
};