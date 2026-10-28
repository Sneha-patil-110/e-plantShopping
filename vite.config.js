import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path matches the GitHub Pages URL: https://<owner>.github.io/paradise-nursery/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',
})
