/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#FAF7F0',
        ink:    '#161832',
        teal:   '#3FBFB0',
        indigo: '#2E4FA0',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1180px' },
      transitionTimingFunction: { brand: 'cubic-bezier(.16,1,.3,1)' },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(34px)' }, '100%': { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
}
