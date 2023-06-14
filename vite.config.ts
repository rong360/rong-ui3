import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
const he = require('he');
import Components from 'unplugin-vue-components/vite';
import { RongUIResolver } from './src/resolver';

import hljs from 'highlight.js';

/**
 * isTestRongUi3, 测试rong-ui3安装包
 * true 测试release包, false 测试src/packages源码
 * 需要软链 rong-ui3 -> release
 *  cd release
 *  npm link
 *  cd ..
 *  npm link rong-ui3
 */
const isTestRongUi3 = false;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return {
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
                const contentHtml = he.encode(tokens[idx + 1].content);
                return `<demo-block data-value="${contentHtml}">` + md.utils.escapeHtml(m[1]) + '\n';
              } else {
                // closing tag
                return '</demo-block>\n';
              }
            }
          });
        }
      }),
      Components({
        resolvers: [
          isTestRongUi3
            ? RongUIResolver({
                importStyle: 'less'
              })
            : RongUIResolver({
                from: '@/packages/index.ts',
                sideEffects(dirName) {
                  return `@/packages/${dirName}/style/index.less`;
                }
              })
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@release': fileURLToPath(new URL('./release', import.meta.url))
      }
    },
    // 配置/api代理
    server: {
      host: '0.0.0.0', //ip地址
      open: false, //vite项目启动时自动打开浏览器
      port: 8080, //vite项目启动时自定义端口
      hmr: true, //开启热更新
      proxy: {}
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 加载全局样式
          additionalData: '@import "@/sites/doc/assets/styles/variables.scss";'
        },
        less: {
          additionalData: '@import "@/packages/styles/variables.less";@import "@/packages/styles/base.less";'
        }
      }
    },
    build: {
      target: 'es2021',
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
  };
});
