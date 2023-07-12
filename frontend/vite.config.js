import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      "/time": {
        target: "http://127.0.0.1:5000/",
        secure: false,
      },
    },
  },
  plugins: [react()],
})
