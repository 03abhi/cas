// @ts-nocheck
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  logLevel: 'info',
  clearScreen: false,
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    strictPort: true
  },
});
