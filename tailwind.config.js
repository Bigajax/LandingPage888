/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Legacy colors (mantém compatibilidade)
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
        // 🎨 ECO Soft Minimal Palette
        eco: {
          bg: '#FAF9F7',           // Areia clara
          'bg-subtle': '#F3EEE7',  // Linho quente
          glass: 'rgba(255, 255, 255, 0.6)',
          clay: '#A7846C',         // Argila
          'clay-light': '#C9A88A', // Argila clara
          gold: '#D4C5B0',         // Dourado pálido
          'baby-blue': '#A7D8DE',  // Azul bebê - botões primários
          'baby-blue-light': '#C2E7ED', // Azul bebê claro - hover
          ink: '#38322A',          // Carvão natural
          'ink-soft': 'rgba(56, 50, 42, 0.7)',
          'ink-subtle': 'rgba(56, 50, 42, 0.5)',
          user: '#6B9080',         // Verde sálvia
          assistant: '#A7846C',    // Argila
          focus: '#A7846C',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        soft: '1rem',
        pill: '9999px',
      },
      boxShadow: {
        // Legacy shadows
        soft: '0 20px 40px -24px rgba(17, 24, 39, 0.2)',
        'soft-lg': '0 28px 60px -30px rgba(17, 24, 39, 0.22)',
        // ECO shadows
        'eco-soft': '0 2px 8px rgba(56, 50, 42, 0.04), 0 1px 3px rgba(56, 50, 42, 0.02)',
        'eco-soft-hover': '0 4px 16px rgba(56, 50, 42, 0.08), 0 2px 6px rgba(56, 50, 42, 0.04)',
        'eco-glass': '0 8px 32px rgba(56, 50, 42, 0.06), 0 1px 1px rgba(255, 255, 255, 0.4) inset',
        'eco-float': '0 12px 40px rgba(56, 50, 42, 0.1), 0 4px 12px rgba(56, 50, 42, 0.05)',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
        calm: 'cubic-bezier(0.4, 0, 0.2, 1)',
        gentle: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
      },
      backdropBlur: {
        eco: '12px',
      },
      letterSpacing: {
        organic: '0.01em',
      },
      lineHeight: {
        organic: '1.7',
      },
    },
  },
  plugins: [],
};