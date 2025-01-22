// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true, // Enable source maps for better debugging
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return id.toString().split('node_modules/')[1].split('/')[0].toString();
//           }
//         }
//       }
//     }
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your app description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    viteCompression(),
    ViteImageOptimizer({
      png: {
        quality: 75,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        quality: 75,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
  build: {
    sourcemap: true, // Enable source maps for better debugging
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
