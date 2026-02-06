import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Hide code in production
    minify: 'esbuild', // Obfuscate code
    assetsInlineLimit: 100000000, // 100MB Limit: Force inline ALL assets as Base64
  }
})
