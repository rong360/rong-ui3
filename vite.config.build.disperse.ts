import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import pkg from './package.json';
const componentInfo = require('./build/getComponentInfo');

const banner = `/*!
* ${pkg.name} v${pkg.version} ${new Date()}
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/`;

// const camelize = (str: string) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());

const input: Record<string, string> = {};

componentInfo.forEach((component: Record<string, string>) => {
  input[component.folder] = component.path;
});

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    //     dts({
    //       insertTypesEntry: false,
    //       copyDtsFiles: false,
    //       cleanVueFileName: false,
    //       outputDir: path.resolve(__dirname, './dist/types'),
    //       include: path.resolve(__dirname, './src/packages/components/'),
    //       beforeWriteFile: (filePath: string, content: string) => {
    //         const fileContent = `import { App, PropType, CSSProperties } from 'vue';
    // declare type Install<T> = T & {
    //   install(app: App): void;
    // };
    // `;
    //         const start = 'declare const _sfc_main:';
    //         const end = ';\nexport default _sfc_main;\n';
    //         let name = Object.keys(input).find((item: string) => item.toLowerCase() === filePath.split('/').slice(-2)[0]);
    //         name = name ? name : ' ';
    //         const remain = `
    // declare module 'vue' {
    //   interface GlobalComponents {
    //       Nut${name}: typeof _sfc_main;
    //   }
    // }
    //       `;
    //         const inputs = content.match(RegExp(`${start}([\\s\\S]*?)${end}`));
    //         const changeContent = inputs && inputs.length ? `${start} Install<${inputs[1]}>${end}${remain}` : content;
    //         return {
    //           filePath,
    //           content: fileContent + changeContent
    //         };
    //       }
    //     })

    // dts({
    //   include: componentInfo.map((component: Record<string, string>) =>
    //     path.resolve(__dirname, `./src/packages/${component.folder}`)
    //   ),
    //   outputDir: path.resolve(__dirname, './release/types'),
    //   beforeWriteFile: (filePath: string, content: string) => {
    //     if (content.indexOf('export default _sfc_main;') > -1) {
    //       const name = filePath.split('/').slice(-2)[0];
    //       content += `
    //       declare module 'vue' {
    //         interface GlobalComponents {
    //           R${camelize(`-${name}`)}: typeof _sfc_main;
    //         }
    //       }
    //       `;
    //     }
    //     return {
    //       filePath,
    //       content
    //     };
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue', 'vue-router'],
      input,
      output: {
        banner,
        globals: {
          vue: 'Vue'
        },
        dir: path.resolve(__dirname, './release/es'),
        entryFileNames: '[name]/index.mjs',
        // chunkFileNames: '[name].js',
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId?.includes('icon')) {
            return `icons/[name].mjs`;
          }
          return `[name].mjs`;
        },

        plugins: []
      }
    },
    lib: {
      entry: '',
      // name: 'index22',
      formats: ['es']
    },
    emptyOutDir: false
  }
});
