import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.splinecode'],
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    exclude: ['@splinetool/runtime']
  }
})