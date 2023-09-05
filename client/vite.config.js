import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/images': {
        target: "https://shared-carousel-api.vercel.app/",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})