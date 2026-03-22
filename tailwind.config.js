/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme - palette từ Gemini
        'brand-bg': '#F6FAF7',
        'brand-surface': '#FFFFFF',
        'brand-green': '#2D6A4F',
        'brand-green-dark': '#1B4D37',
        'brand-amber': '#F59E0B',
        'brand-amber-dark': '#D97706',
        'brand-text': '#1E293B',
        'brand-text-muted': '#475569',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
