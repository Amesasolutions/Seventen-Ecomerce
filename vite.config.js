import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Your custom Vite configuration
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.js'),
        '**/*.jsx': path.resolve(__dirname, 'src/**/*.jsx'),
      },
      // ...other rollup options
    },
  },
});
