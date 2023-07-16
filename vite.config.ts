import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
const projectRootDir = path.resolve(__dirname)
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(projectRootDir, 'src/')
    }
  }
})
