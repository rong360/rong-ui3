import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
const he = require('he');
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { RongUIResolver, type RongUIResolverOptions } from './src/resolver';

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
const rongUIResolverOptions: RongUIResolverOptions = isTestRongUi3
  ? {
      importStyle: 'less'
    }
  : {
      from: '@/packages/index.ts',
      sideEffects(dirName) {
        return `@/packages/${dirName}/style/index.less`;
      }
    };

// 文件重命名 如：logo.svg?v=s234sd3 --> logo.svg
export function renameFileName(): Plugin {
  return {
    name: 'renameFileName', // 这个名字将会出现在在警告和报错中
    apply: 'build', // 应用模式
    enforce: 'post', // 作用阶段
    generateBundle(options, bundle) {
      Object.values(bundle).forEach((item) => {
        return (item.fileName = item.fileName.split('?')[0]);
      });
    }
  };
}

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return {
    base: './',
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/] // <--
      }),
      vueJsx(),
      Markdown({
        markdownItOptions: {
          typographer: false,
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

          md.use(require('markdown-it-container'), 'hljs', {
            validate: function (params) {
              // params 指的是::: 后的字符
              return params.trim().match(/^hljs\s*(.*)$/);
            },
            render: function (tokens, idx) {
              // 通过 tokens[idx].info.trim() 取出 'click me' 字符串
              const m = tokens[idx].info.trim().match(/^hljs\s*(.*)$/);
              // 开始标签的 nesting 为 1，结束标签的 nesting 为 -1
              if (tokens[idx].nesting === 1) {
                // opening tag
                const contentHtml = he.encode(tokens[idx + 1].content);
                return `<HljsBlock code="${contentHtml}">` + md.utils.escapeHtml(m[1]) + '\n';
              } else {
                // closing tag
                return '</HljsBlock>\n';
              }
            }
          });
        }
      }),
      AutoImport({
        eslintrc: {
          enabled: true
        },
        resolvers: [RongUIResolver(rongUIResolverOptions)]
      }),
      Components({
        resolvers: [RongUIResolver(rongUIResolverOptions)]
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
      // cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          demo: resolve(__dirname, 'demo.html')
        },
        output: {
          manualChunks: {
            highlightjs: ['highlight.js']
          },
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
          // H5打包部署到github后文件`_plugin-vue_export-helper`访问不到
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
            // Otherwise, avoid them because they can refer to NTFS alternate data streams.
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
          }
        }
      }
    }
  };
});
