import { defineConfig } from 'vite'

export default defineConfig({
  base: '/TalkNet/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
