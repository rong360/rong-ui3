import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import dts from 'vite-plugin-dts';
import path from 'path';

const banner = `/*!
* ${pkg.name} v${pkg.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: path.resolve(__dirname, './src/packages'),
      outputDir: path.resolve(__dirname, './release/types')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 加载全局样式
        additionalData: '@import "@/doc/assets/styles/variables.scss";'
      },
      less: {
        additionalData: '@import "@/packages/styles/variables.less";'
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
      entry: 'src/packages/index.ts',
      name: 'rongui3',
      fileName: 'rong-ui3',
      formats: ['umd']
    },
    emptyOutDir: false
  }
});
