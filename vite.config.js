import { defineConfig } from 'vite';

// Served from the root of circleheart.id
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  build: { chunkSizeWarningLimit: 900 },
});
