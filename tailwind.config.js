module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f7ff',
          100: '#b3e9ff',
          200: '#81d7ff',
          300: '#4fc5ff',
          400: '#1bb3ff',
          500: '#009ae6', // Acento mais forte para contraste
          600: '#007bb8',
          700: '#005b8a',
          800: '#003d5c',
          900: '#00202e',
        },
        secondary: {
          50: '#ffebf8',
          100: '#ffc8ed',
          200: '#ffa3e0',
          300: '#ff7fd3',
          400: '#ff5bc6',
          500: '#e141a4', // Foco mais forte
          600: '#b53382',
          700: '#8a2762',
          800: '#5f1b41',
          900: '#341122',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f1f1f1',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#a0a0a0',
          500: '#7f7f7f',
          600: '#5f5f5f',
          700: '#3f3f3f',
          800: '#202020',
          900: '#0a0a0a',
        },
        accent: {
          50: '#fff4d6',
          100: '#ffedb5',
          200: '#ffe594',
          300: '#ffdc73',
          400: '#ffd151',
          500: '#ffc12d', // Cor de destaque brilhante para detalhes
          600: '#cc9b25',
          700: '#996f1d',
          800: '#664514',
          900: '#33220a',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
