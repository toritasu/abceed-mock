import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Unfonts from 'vite-plugin-fonts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        propsDestructure: true
      }
    }),
    Unfonts({
      google: {
        families: [
          { name: 'Noto+Sans+JP', styles: 'wght@400;500;700' }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
