/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '!./src/askpbot/**'],
  theme: {
    extend: {
      fontFamily: {
        sans:     ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
      },
      // Tailwind's default scale has no 6/8 — without these, `border-white/8`
      // silently compiles to nothing and falls back to the light-grey preflight border.
      opacity: {
        6: '0.06',
        8: '0.08',
      },
      colors: {
        accent: '#e8702a',
      },
    },
  },
  plugins: [],
}
