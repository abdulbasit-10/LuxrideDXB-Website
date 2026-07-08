import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // This project lives in a OneDrive-synced folder; OneDrive briefly locks
    // files while syncing, which crashes native fs watchers with EBUSY.
    // Polling avoids relying on native fs events.
    watch: {
      usePolling: true,
    },
  },
})
