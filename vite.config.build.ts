import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';

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
        additionalData: '@import "@/docs/assets/styles/variables.scss";'
      },
      less: {
        additionalData: '@import "@packages/styles/variables.less";'
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
    outDir: 'release',
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        banner,
        globals: {
          vue: 'Vue'
        },
        plugins: [],
        exports: 'named',
        // chunkFileNames: '[name].js'
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId?.includes('icon')) {
            return `icons/[name].js`;
          }
          return `[name].js`;
        }
      }
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'rong-ui3',
      fileName: 'rong-ui3',
      formats: ['es', 'umd']
    }
  }
});
