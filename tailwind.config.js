/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:     ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        accent: '#e8702a',
      },
    },
  },
  plugins: [],
}
