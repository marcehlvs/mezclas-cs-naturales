import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Cambiá "mezclas-separacion" si tu repositorio de GitHub tiene otro nombre.
export default defineConfig({
  base: '/mezclas-separacion/',
  plugins: [react()],
})
