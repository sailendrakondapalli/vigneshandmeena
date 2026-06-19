import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: 'all',
  },
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'vendor'
          if (id.includes('node_modules/framer-motion')) return 'motion'
        },
      },
    },
    // Enable asset compression
    assetsInlineLimit: 4096,
  },
  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
