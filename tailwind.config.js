/** @type {import('tailwindcss').Config} */
// Cấu hình Tailwind CSS với màu sắc tùy chỉnh cho theme tối
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Màu nền chính - Deep Navy
        navy: '#0A0E1A',
        // Màu nền phụ - Surface
        surface: '#1A202C',
        // Màu vàng gold - accent chính
        gold: '#F5A623',
        // Màu xanh electric - accent phụ
        'electric-blue': '#4F8EF7'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
