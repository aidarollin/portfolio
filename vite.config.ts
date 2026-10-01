import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  build: {
    rollupOptions: {
      // Two pages: the portfolio, and the AskPBot demo it embeds in an iframe
      input: {
        main: resolve(__dirname, 'index.html'),
        askpbot: resolve(__dirname, 'askpbot.html'),
      },
    },
  },
})
