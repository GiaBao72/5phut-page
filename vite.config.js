import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Cấu hình Vite cho dự án React - GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/5phut-page/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
