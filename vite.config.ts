import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FM-003-NFT-Preview-Card-Component/',
  plugins: [react(), eslint()],
})
