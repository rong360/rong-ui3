# Dialog 对话框


### 介绍
弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。支持组件调用和函数调用两种方式。

<!--
<script setup>
import demo from './test.vue'
</script>

<demo />
-->


### 安装

```javascript
import { createApp } from 'vue';
import { Dialog } from 'rong-ui3';

const app = createApp();
app.use(Dialog);
```

### 函数调用

为了便于使用 Dialog， 提供了一系列辅助函数，通过辅助函数可以快速唤起全局的弹窗组件。

比如使用 showDialog 函数，调用后会直接在页面中渲染对应的弹出框。
``` js
import { showDialog } from 'rong-ui3';

showDialog({ message: '提示' });
```

代码演示

<script setup>
  import DialogFunction from '../demo/DialogFunction.vue?raw'
</script>
<HljsBlock :code="DialogFunction"></HljsBlock>


### 组件式调用

如果需要在 Dialog 内嵌入组件或其他自定义内容，可以直接使用 Dialog 组件，并使用默认插槽进行定制。使用前需要通过 app.use 等方式注册组件。

```html
<r-dialog v-model:show="show" message="内容" show-cancel-button>
  <template #header> 标题 </template>
</r-dialog>
```

代码演示

<script setup>
  import DialogComponent from '../demo/DialogComponent.vue?raw'
</script>
<HljsBlock :code="DialogComponent"></HljsBlock>



#### 特别提示
弹窗默认锁屏，滚动元素需要添加 `class="scroll-area"` 样式
:::demo 嵌套滚动
```html

<template>
  <r-dialog v-model:show="showScrollArea">
    <div style="height: 100px; overflow-y: scroll" class="scroll-area">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  </r-dialog>
</template>

<script lang="ts" setup>
const showScrollArea = ref(true);
</script>


```
:::

## API

> 当前组件内部透传了 [Popup组件](#/zh-CN/component/popup) 和 [Overlay组件](#/zh-CN/component/overlay)

### Props

| 字段                         | 说明                           | 类型          | 默认值  |
|------------------------------|------------------------------|---------------|---------|
| title                        | 标题                           | String        | -       |
| message                      | 内容，支持HTML和组件            | String/VNode  | -       |
| show-confirm-button          | 是否显示确定按钮               | Boolean       | true    |
| confirm-button-text          | 确定按钮文案                   | String/VNode  | 确定 |
| confim-button-style          | 确定按钮样式                   | CSSProperties | -       |
| show-cancel-button           | 是否显示取消按钮               | Boolean       | true    |
| cancel-button-text           | 取消按钮文案                   | String/VNode  | 取消  |
| cancel-button-style          | 取消按钮样式                   | CSSProperties | -       |
| close-on-click-cancel-button | 取消按钮是否默认关闭弹窗       | Boolean       | true    |
| show-close-button            | 是否显示右上角关闭按钮         | Boolean       | true    |
| close-on-click-close-button  | 右上角关闭按钮是否默认关闭弹窗 | Boolean       | true    |
| teleport                     | 指定挂载节点                   | String        | body  |
| round                        | 圆角弹窗                       | Boolean       | true    |
| close-on-click-overlay       | 点击蒙层是否默认关闭弹窗       | Boolean       | false   |
| overlay-class                | 自定义遮罩类名                 | String        | -       |
| overlay-style                | 自定义遮罩样式                 | CSSProperties | -       |
| pop-class                    | 自定义popup弹窗类名            | String        | -       |
| pop-style                    | 自定义popup弹窗样式            | CSSProperties | -       |


### Events

| 字段         | 说明                   | 类型     | 默认值 |
|--------------|----------------------|----------|--------|
| confirm      | 确定按钮回调           | Function | -      |
| cancel       | 取消按钮回调           | Function | -      |
| clickOverlay | 点击遮罩回调           | Function | -      |
| close        | 点击右上角关闭按钮回调 | Function | -      |


### Slots

| 名称    | 说明               |
|---------|------------------|
| header  | 自定义标题区域     |
| default | 自定义内容         |
| footer  | 自定义底部按钮区域 |
| close-icon  | 自定义close按钮 |