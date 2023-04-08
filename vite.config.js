import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: false
  },
  plugins: [ mkcert(),react() ],
  build:{
    chunkSizeWarningLimit:1600,
  }
}

)
