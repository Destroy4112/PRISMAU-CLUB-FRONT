import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from "flowbite-react/plugin/vite";
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  resolve: {
    alias: {
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@core': path.resolve(process.cwd(), 'src/core'),
      '@features': path.resolve(process.cwd(), 'src/features'),
      '@shared': path.resolve(process.cwd(), 'src/shared'),
      '@': path.resolve(process.cwd(), 'src'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    dedupe: ['react', 'react-dom']
  },
})