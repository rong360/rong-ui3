# 进阶用法


<div class="card">

### 介绍
通过本章节你可以了解到 rong-ui3 的一些进阶用法，比如组件插槽用法、多种浏览器适配方式。

</div>


### 组件用法
<div class="card">

#### 组件注册
rong-ui3 支持多种组件注册方式，请根据实际业务需要进行选择。

##### 全局注册
全局注册后，你可以在 app 下的任意子组件中使用注册的 rong-ui3 组件。
:::hljs
```js
import { Button } from 'rong-ui3';
import { createApp } from 'vue';

const app = createApp();

// 方式一. 通过 app.use 注册
// 注册完成后，在模板中通过 <r-button> 或 <RButton> 标签来使用按钮组件
app.use(Button);

// 方式二. 通过 app.component 注册
// 注册完成后，在模板中通过 <r-button> 标签来使用按钮组件
app.component(Button.name, Button);
```
:::



##### 局部注册
局部注册后，你可以在当前组件中使用注册的 Vant 组件。

:::hljs
```js

import { Button } from 'rong-ui3';

export default {
  components: {
    [Button.name]: Button,
  },
};

```
:::




##### script setup
在 `<script setup>` 中可以直接使用 Vant 组件，不需要进行组件注册。
:::hljs
```xml
<script setup>
  import { Button } from 'rong-ui3';
</script>

<template>
  <Button />
</template>
```
:::



##### JSX/TSX
在 JSX 和 TSX 中可以直接使用 Vant 组件，不需要进行组件注册。
:::hljs
```js
import { Button } from 'rong-ui3';

export default {
  render() {
    return <Button />;
  },
};
```
:::


</div>


### 浏览器适配

<div class="card">

#### Rem 布局适配
如果需要使用 rem 单位进行适配，推荐使用以下两个工具：
1. `postcss-pxtorem` 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
2. `lib-flexible` 用于设置 rem 基准值
#### PostCSS 示例配置
下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。
:::hljs
```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```
:::
> Tips: 在配置 postcss-pxtorem 时，同样应避免 ignore node_modules 目录，否则会导致 Vant 样式无法被编译。




#### 其他设计稿尺寸
如果设计稿的尺寸不是 375，而是 750 或其他大小，可以将 `rootValue` 配置调整为
:::hljs
```js
// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};

```
:::

</div>




<div class="card">

#### Viewport 布局
rong-ui3 默认使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax)，推荐使用 `postcss-px-to-viewport` 进行转换。  
<br/>
postcss-px-to-viewport 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。  

<br/> 

#### PostCSS 示例配置
下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基础上根据项目需求进行修改。
:::hljs
```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};

```
:::

</div>



### 注意事项

<div class="card">

#### 1、按需引入插件升级
rong-ui3 移除了 `babel-plugin-import` 、`vite-plugin-style-import` 插件的使用，按需引入样式不再依赖于 `babel`，开发者可以选择其他效率更高的编译工具。同时，rong-ui3 适配了支持自动引入和注册组件的 `unplugin-vue-components` 插件，这将使开发体验有所提升。


#### 2、使用 JSX、TSX 编写项目时无法实现自动按需引入
`unplugin-vue-components` 插件的默认配置不识别 JSX、TSX 文件，需要手动添加 include 字段：
:::hljs
```js
Components({
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
  resolvers: [RongUIResolver()],
})
```
:::


</div>