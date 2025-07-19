import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pagesSitemap from 'vite-plugin-pages-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    pagesSitemap({
      hostname: 'https://aravind-p.vercel.app'
    })
  ],
})
