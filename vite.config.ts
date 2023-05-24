/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 80
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.test/setup.ts'],
    include: ['**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
  root: './',
  build: {
    outDir: './dist',
  },
  resolve:{
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@context' : path.resolve(__dirname, './src/context'),
      '@models' : path.resolve(__dirname, './src/models'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@styles' : path.resolve(__dirname, './src/styles'),
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@routes' : path.resolve(__dirname, './src/routes'),
      '@utils' : path.resolve(__dirname, './src/utils'),
      '@mock' : path.resolve(__dirname, './src/mock'),
      '@config' : path.resolve(__dirname, './src/config')
    }
  }
});
