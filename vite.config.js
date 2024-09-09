import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust base URL as needed
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    port: 80,
  },
  build: {
    outDir: './server/public',  // This specifies where to output the build files
    emptyOutDir: true,  // This ensures the output directory is cleaned before building
  },
})
