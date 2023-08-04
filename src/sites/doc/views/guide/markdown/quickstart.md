# 快速上手


<div class="card">

### 介绍
通过本文你可以掌握 rong-ui3 的安装和使用方法，操作简单易上手，开发简洁快速。

</div>





<div class="card">

### 安装

#### 1. 通过 npm 安装

在项目中使用 rong-ui3 时，可通过 npm 安装：  

:::hljs
```js
npm i rong-ui3
```
:::

<br/>

你也可以使用 yarn 或 pnpm 进行安装：  
:::hljs
```js
# 通过 yarn 安装
yarn add rong-ui3

# 通过 pnpm 安装
pnpm add rong-ui3
```
:::

</div>



<div class="card">

#### 2. 通过 CDN 安装及使用
> 可以在 jsdelivr 和 unpkg 等公共 CDN 上获取到 RongUI。 不推荐在生产环境使用组件库 CDN，如果需要这种使用方式，建议将特定版本的 CDN 文件下载至本地项目目录中使用。
:::hljs
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/rong-ui3/style.css" />
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- 引入RongUI组件库 -->
    <script src="https://fastly.jsdelivr.net/npm/rong-ui3"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      // 在 #app 标签下渲染一个按钮组件
      const app = Vue.createApp({
        template: `
        <r-button type="primary">主要按钮</r-button>
        <r-button type="info">信息按钮</r-button>
        <r-button type="default">默认按钮</r-button>
        <r-button type="danger">危险按钮</r-button>
        <r-button type="warning">警告按钮</r-button>
        <r-button type="success">成功按钮</r-button>
        `,
      });
      app.use(rongui3);
      app.mount("#app");
    </script>
  </body>
</html>
```
:::

</div>




<div class="card">

### 组件使用

#### 方法一、常规用法
##### 1. 全局全量引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
:::hljs
```js
import { createApp } from "vue";
import App from "./App.vue";
import RongUI from "rong-ui3";
import "rong-ui3/style.css";
createApp(App).use(RongUI).mount("#app");
```
:::



##### 2. 全局部分引入
:::hljs
```js
import { createApp } from "vue";
import App from "./App.vue";
import { Button } from "rong-ui3";
import "rong-ui3/style.css";
createApp(App).use(Button).mount("#app");
```
:::

</div>

<div class="card">

#### 方法二、按需导入
#### 1、自动导入 (推荐)
在基于 vite、vue-cli 或 webpack 的项目中使用 rong-ui3 时，可以使用 unplugin-vue-components 和 unplugin-auto-import这两款插件，不需手动引入组件，它可自动引入组件及样式。
:::hljs
```js
npm install -D unplugin-vue-components unplugin-auto-import
```
:::
然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
<details>
<summary>vite</summary>

:::hljs
```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { RongUIResolver } from 'rong-ui3/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      resolvers: [RongUIResolver()],
    }),
    Components({
      resolvers: [RongUIResolver()]
    }),
  ]
})
```
:::
</details>

<br/>

<details>
<summary>webpack</summary>

:::hljs
```js
// vite.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { RongUIResolver } = require('rong-ui3/resolver')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      resolvers: [RongUIResolver()],
    }),
    Components({
      resolvers: [RongUIResolver()]
    }),
  ]
})
```
:::

</details>

##### 添加ts类型提示   
`unplugin-vue-components` 和 `unplugin-auto-import` 插件会为引入的组件自动生成全局类型文件 `components.d.ts` 和 `auto-imports.d.ts`，请保留该文件并在 `tsconfig.json` 中将它添加至 `include` 字段中
:::hljs
```js
{
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "components.d.ts",
    "auto-imports.d.ts"
  ],
}
```
:::

##### 添加eslint提示
当 `unplugin-auto-import`插件配置 { eslintrc:{enabled: true } } 时， 插件会自动生成 `.eslintrc-auto-import.json`,请保留该文件并在 `.eslintrc.cjs` 中将它添加至 `extends` 字段中
:::hljs
```js
extends: [
  'plugin:vue/vue3-essential',
  'eslint:recommended',
  '@vue/eslint-config-typescript',
  '@vue/eslint-config-prettier',
  './.eslintrc-auto-import.json'
]
```
:::

##### 组件使用
直接使用组件, `unplugin-vue-components` 和 `unplugin-auto-import` 插件会自动注册对应的组件，并按需引入组件样式。
:::hljs
```html
<template>
  <r-button @click="doSubmit"></r-button>
</template>
<script setup>
  const doSubmit = () => showToast('我是提示信息')
</script>
```
:::


#### 2、手动导入标签组件和函数式组件
:::hljs
```html
<template>
  <r-button @click="doSubmit">我是 Button</r-button>
</template>
<script>
  import { Button, showDialog } from 'rong-ui3'
  import 'rong-ui3/es/button/style/index.css'; // or index.less
  import 'rong-ui3/es/dialog/style/index.css'; // or index.less
  export default {
    components: { 
      [Button.name]: Button
     },
     methods: {
      doSubmit() {
        showDialog({
          title: '基础弹窗',
          message: createVNode('span', { style: { color: 'red' } }, '我可以是一个自定义组件 vNode/.vue'),
          onConfirm() {
            this.remove();
          }
        });
      }
     }
  }
</script>
```
:::

</div>
