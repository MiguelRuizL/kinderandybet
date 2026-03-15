import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Esto hace que las rutas sean relativas
  plugins: [react()],
})
