import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
import { compressText } from './src/docs/utils';

import hljs from 'highlight.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // <--
    }),
    vueJsx(),
    Markdown({
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }
          return ''; // 使用额外的默认转义
        }
      },
      markdownItSetup(md) {
        /**
         * https://zhuanlan.zhihu.com/p/461400359
          markdown 语法:
            ::: demo click me
            *content*
            :::
          注意这其中的 ::: 是插件定义的语法，通过markdown-it-container插件它会取出 ::: 后的字符，
          */
        md.use(require('markdown-it-container'), 'demo', {
          validate: function (params) {
            // params 指的是::: 后的字符
            return params.trim().match(/^demo\s*(.*)$/);
          },
          render: function (tokens, idx) {
            // 通过 tokens[idx].info.trim() 取出 'click me' 字符串
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            // 开始标签的 nesting 为 1，结束标签的 nesting 为 -1
            if (tokens[idx].nesting === 1) {
              // opening tag
              const contentHtml = compressText(tokens[idx + 1].content);
              return `<demo-block data-value="${contentHtml}">` + md.utils.escapeHtml(m[1]) + '\n';
            } else {
              // closing tag
              return '</demo-block>\n';
            }
          }
        });
      }
    })
  ],
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
        }),
        require('postcss-flexbugs-fixes'),
        require('postcss-plugin-px2rem')({
          // base on 320px standard.
          rootValue: 18.75,
          // to leave 1px alone.
          minPixelValue: 1.01,
          selectorBlackList: ['.r-doc', '.markdown-body'],
          exclude: ['/docs/']
        })
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        demo: resolve(__dirname, 'demo.html')
      },
      output: {
        manualChunks: {
          highlightjs: ['highlight.js']
        }
      }
    }
  }
});
