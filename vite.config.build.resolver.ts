import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: path.resolve(__dirname, './src/resolver'),
      outputDir: path.resolve(__dirname, './release/resolver'),
      compilerOptions: {
        skipLibCheck: true
      }
    })
  ],
  build: {
    outDir: path.resolve(__dirname, './release/resolver'),
    minify: true,
    lib: {
      entry: path.resolve(__dirname, './src/resolver'),
      name: 'name',
      fileName: (format) => {
        if (format === 'es') {
          return 'index.mjs';
        } else {
          return 'index.js';
        }
      },
      formats: ['es', 'cjs']
    },
    emptyOutDir: false
  }
});
