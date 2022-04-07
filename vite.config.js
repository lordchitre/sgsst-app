import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


export default defineConfig({
  esbuild: {
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
  },
  plugins: [reactRefresh()],
  server: {
    host: true,
  },
})

