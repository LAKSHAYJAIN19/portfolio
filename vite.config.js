/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // Load .env files based on the current mode (development/production)
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      react(),
      tailwindcss(),
    ],
    // Use VITE_BASE_PATH from env files when available, otherwise default to '/'
    base: env.VITE_BASE_PATH || '/',
  })
}
