import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000, // Adjust this value as needed

    // Manual chunks configuration
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Place large dependencies in separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
