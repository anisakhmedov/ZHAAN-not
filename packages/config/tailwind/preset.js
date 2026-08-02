/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf9',
          100: '#d4f4ef',
          200: '#aae8e0',
          300: '#77d5c9',
          400: '#46bcae',
          500: '#2a9f93',
          600: '#1f8077',
          700: '#1c6862',
          800: '#1b534f',
          900: '#194543',
          950: '#0a2726',
        },
        ink: {
          50: '#f7f7f8',
          100: '#eeedf0',
          200: '#d9d7de',
          300: '#b6b2bd',
          400: '#8d8797',
          500: '#6f6a7a',
          600: '#585365',
          700: '#484452',
          800: '#3d3a44',
          900: '#28262c',
          950: '#19171b',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16, 24, 40, 0.04), 0 2px 8px rgba(16, 24, 40, 0.06)',
        card: '0 1px 3px rgba(16, 24, 40, 0.05), 0 8px 24px -4px rgba(16, 24, 40, 0.08)',
        popover: '0 12px 32px -8px rgba(16, 24, 40, 0.18)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.25s ease-out',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};
