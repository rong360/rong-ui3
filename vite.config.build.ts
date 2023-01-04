import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';

const banner = `/*!
* ${pkg.name} v${pkg.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@packages': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 加载全局样式
        additionalData: '@import "@packages/styles/variables.scss";@import "@/docs/assets/styles/variables.scss";'
      },
      less: {
        additionalData: '@import "@packages/styles/var.less";'
      }
    },
    postcss: {
      plugins: [
        // 前缀追加
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5'],
          grid: true
        })
      ]
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        banner,
        globals: {
          vue: 'Vue'
        },
        plugins: [],
        exports: 'named'
      }
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'rongui3',
      fileName: 'rongui3',
      formats: ['es', 'umd']
    },
  }
});
