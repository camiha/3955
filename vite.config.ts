import path from "node:path"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3955/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})