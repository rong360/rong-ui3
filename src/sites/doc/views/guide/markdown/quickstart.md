# 快速上手


<div class="card">

### 介绍
通过本文你可以掌握 rong-ui3 的安装和使用方法，操作简单易上手，开发简洁快速。

</div>





<div class="card">

### 安装

#### 1. 通过 npm 安装

在项目中使用 rong-ui3 时，可通过 npm 安装：  

```js
npm i rong-ui3
```

你也可以使用 yarn 或 pnpm 进行安装：
```js
# 通过 yarn 安装
yarn add rong-ui3

# 通过 pnpm 安装
pnpm add rong-ui3
```

</div>



<div class="card">

#### 2. 通过 CDN 安装及使用
> 可以在 jsdelivr 和 unpkg 等公共 CDN 上获取到 RongUI。 不推荐在生产环境使用组件库 CDN，如果需要这种使用方式，建议将特定版本的 CDN 文件下载至本地项目目录中使用。
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

</div>




<div class="card">

### 组件使用

#### 方法一、常规用法
##### 1. 全局全量引入
```js
import { createApp } from "vue";
import App from "./App.vue";
import RongUI from "rong-ui3";
import "rong-ui3/style.css";
createApp(App).use(RongUI).mount("#app");
```
##### 2. 全局部分引入
```js
import { createApp } from "vue";
import App from "./App.vue";
import { Button } from "rong-ui3";
import "rong-ui3/style.css";
createApp(App).use(Button).mount("#app");
```

</div>

<div class="card">

#### 方法二、自动按需引入

在基于 vite、vue-cli 或 webpack 的项目中使用RongUi 时，可以使用 <a href="https://github.com/antfu/unplugin-vue-components" target="_blank">unplugin-vue-components</a>插件，它可自动引入组件及样式，不再需要手动引入。
#### 1、安装插件
```js
# 通过 npm 安装
npm i unplugin-vue-components -D

# 通过 yarn 安装
yarn add unplugin-vue-components -D

# 通过 pnpm 安装
pnpm add unplugin-vue-components -D
```
#### 2、项目配置
<details>
<summary>vite</summary>

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { RongUIResolver } from 'rong-ui3/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动引入 RongUI 组件
    Components({
      resolvers: [RongUIResolver()]
    }),
  ]
})
```
</details>

<br/>

<details>
<summary>webpack</summary>

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/webpack'
import { RongUIResolver } from 'rong-ui3/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 开启 unplugin 插件，自动引入 RongUI 组件
    Components({
      resolvers: [RongUIResolver()]
    }),
  ]
})
```
</details>

#### 3、使用组件
可以直接在模板中使用 RongUI 组件，unplugin-vue-components 插件会自动注册对应的组件，并按需引入组件样式。
```html
# 直接使用
<template>
  <r-button></r-button>
</template>
```

```js
# 移除手动引入和注册的代码
// import { Button } from 'rong-ui3';
// app.use(Button);
```

#### 4、使用函数式组件
RongUI 中 Toast，Dialog 组件除标签式使用外，还可使用函数形式调用。在使用时，unplugin-vue-components 无法自动引入对应的样式文件，需要你手动引入样式。
```js
// Toast
import { showToast } from 'rong-ui3';
import 'rong-ui3/es/toast/style/index.css'; // or index.less
```

```js
// Dialog
import { showDialog } from 'rong-ui3';
import 'rong-ui3/es/dialog/style/index.css'; // or index.less
```

</div>


<div class="card">

### 注意事项

#### 1、按需引入插件升级
rong-ui3 移除了 `babel-plugin-import` 、`vite-plugin-style-import` 插件的使用，按需引入样式不再依赖于 `babel`，开发者可以选择其他效率更高的编译工具。同时，rong-ui3 适配了支持自动引入和注册组件的 `unplugin-vue-components` 插件，这将使开发体验有所提升。

#### 2、组件单位选择
组件 css 单位使用的是 px，如果你的项目中需要 rem 单位，可借助一些工具进行转换，比如 `webpack` 的 `px2rem-loader`、`postcss` 的 `postcss-plugin-px2rem`、`postcss-pxtorem` 插件等。

#### 3、使用 JSX、TSX 编写项目时无法实现自动按需引入
`unplugin-vue-components` 插件的默认配置不识别 JSX、TSX 文件，需要手动添加 include 字段：
```js
Components({
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
  resolvers: [RongUIResolver()],
})
```

#### 4、在 vue-cli 或 webpack 中使用按需引入时组件没有类型提示
解决方案：`unplugin-vue-components` 插件会为引入的组件自动生成全局类型文件 `components.d.ts`，请保留该文件并在 `tsconfig.json` 中将它添加至 `include` 字段中。
```js
{
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "components.d.ts"
  ],
}
```

</div>