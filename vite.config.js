import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    chunkSizeWarningLimit: 1000000, 
  },
  server: {
    port: 3000
  }
})