import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import { build } from 'esbuild'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/manifest.json', dest: '.' },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
