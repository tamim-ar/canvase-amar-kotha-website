/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'dark',
    {
      pattern: /(bg|text|border)-(primary|accent)-(light|dark)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#f8f4ed',
          dark: '#1a1a1a',
        },
        accent: {
          light: '#d4a373',
          dark: '#a67c52',
        },
        secondary: {
          light: '#e9edc9',
          dark: '#2c3639',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 15px rgba(212, 163, 115, 0.3)',
      },
    },
  },
  plugins: [],
}
