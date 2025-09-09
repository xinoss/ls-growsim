import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: '/static/dist/',
  build: {
    outDir: '../backend/static/dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.SERVER_PORT || 8080}`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
