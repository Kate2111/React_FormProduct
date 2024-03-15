import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React_FormProduct',
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/router': '/src/router',
      '@/assets': '/src/assets',
    },
  },
});
