# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 安装

``` javascript
import { createApp } from 'vue';
import { Toast } from 'rong-ui3';

const app = createApp();
app.use(Toast);
```


### 函数调用

为了便于使用 `Toast`，提供了一系列辅助函数，通过辅助函数可以快速唤起全局的 `Toast` 组件。

比如使用 showToast 函数，调用后会直接在页面中渲染对应的弹出框。
``` js
import { showToast } from 'rong-ui3';

showToast('提示内容');
```

代码演示

<script setup>
  import ToastFunction from '../demo/ToastFunction.vue?raw'
</script>
<HljsBlock :code="ToastFunction"></HljsBlock>


### 修改默认配置
通过 `setToastDefaultOptions` 函数可以全局修改 showToast 等方法的默认配置。
``` js
import { setToastDefaultOptions } from 'rong-ui3';

setToastDefaultOptions({ duration: 3000 });
setToastDefaultOptions('success', { overlayStyle: { backgroundColor: 'rgba(123 ,2, 33, 0.5)' } });
```


### 组件式调用

支持在template模版中使用 Toast 组件。使用前需要通过 app.use 等方式注册组件。

```html
<r-toast teleport="body" long v-model:show="showTeleport">
  <template #icon>
    <img width="60" src="https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif" />
  </template>
  打开开发者工具看一下 Elements Tab
</r-toast>
```

代码演示

<script setup>
  import ToastComponent from '../demo/ToastComponent.vue?raw'
</script>
<HljsBlock :code="ToastComponent"></HljsBlock>


## API

### 方法
rong-ui3 中导出了以下 Toast 相关的辅助函数
| 方法名            | 说明         | 参数                                 | 返回值                          |
|-------------------|--------------|--------------------------------------|---------------------------------|
| showToast    | 展示提示 |string \| ToastOptions                  | { remove: () => void;   setMessage: (message: string \| VNode) => void; vNode: VNode; } |
| showLoadingToast    | 展示加载提示 |string \| ToastOptions                  | 同上 |
| showSuccessToast    | 展示成功提示 |string \| ToastOptions                  | 同上 |
| showFailToast    | 展示失败提示 |string \| ToastOptions                  | 同上 |
| showLongToast    | 展示长文案提示 |string \| ToastOptions                  | 同上 |
| setToastDefaultOptions    | 修改默认配置，影响所有的 showToast 调用。传入 type 可以修改指定类型的默认配置 | type \| ToastOptions                 | void |


### ToastOptions 数据结构

> 当前组件内部透传了 [Popup组件](#/zh-CN/component/popup) 和 [Overlay组件](#/zh-CN/component/overlay)  

调用 showToast 等方法时，还支持传入以下选项：
| 参数                   | 说明                                                           | 类型             | 默认值             |
|------------------------|----------------------------------------------------------------|------------------|--------------------|
| message                     |文本内容                     | string \| VNode | -                  |
| icon                   | 自定义图标，支持传入图标名称或者h 函数，图标名称等同于 Icon 组件的 name 属性  | string \| VNode        | -                  |
| type         | 提示类型，可选值为 `loading` `success` `fail` `long` `default` | ToastType           | `default`                 |
| duration   | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失       | number    | `2000`               |
| overlay-duration               | 遮罩展示时长（毫秒）        | number           |  -             |
| content-style               | 自定义内容区域样式        | CSSProperties           |  -             |



### Slots
使用 `Toast` 组件时，支持以下插槽：
### Slots

| 名称 | 说明       |
| ------ | ---------- |
| default  | 自定义message内容 |
| icon  | 自定义图标 |


### 样式变量

| 名称                               | 默认值            |
|------------------------------------|-------------------|
| --r-toast-font-size                | 14px              |
| --r-toast-line-height              | 20px              |
| --r-toast-background-color         | rgba(0, 0, 0, .7) |
| --r-toast-color                    | #fff              |
| --r-toast-padding                  | 8px 12px          |
| --r-toast-overlay-background-color | transparent       |
| --r-toast-default-width            | 120px             |
| --r-toast-long-width               | 226px             |
| --r-toast-border-radius            | 8px !important    |
| --r-toast-icon-font-size           | 32px              |
| --r-toast-icon-margin-bottom       | 8px               |