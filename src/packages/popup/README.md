# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 安装

```js
import { createApp } from 'vue';
import { Popup } from 'rong-ui3';

const app = createApp();
app.use(Popup)
```


### 基础用法
通过 v-model:show 控制弹出层是否展示。
<script setup>
  import PopupBase from './demo/PopupBase.vue?raw'
</script>
<HljsBlock :code="PopupBase"></HljsBlock>



### 弹出位置
通过 `position` 属性设置弹窗的弹出位置，默认为居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。
* 当弹窗从顶部或底部弹出时，默认宽度与屏幕宽度保持一致，弹窗高度取决于内容的高度
* 当弹窗从左侧或右侧弹出时，默认不设置宽度和高度，弹窗的宽高取决于内容的宽高。
<script setup>
  import PopupPosition from './demo/PopupPosition.vue?raw'
</script>
<HljsBlock :code="PopupPosition"></HljsBlock>



### 内容滚动
特别提示：默认锁屏，滚动元素需要添加 class="scroll-area" 样式 
<script setup>
  import PopupScroll from './demo/PopupScroll.vue?raw'
</script>
<HljsBlock :code="PopupScroll"></HljsBlock>


### 关闭图标
设置 `show-close-icon` 属性后，会在弹出层的右上角显示关闭图标，通过`close-icon-position` 来设置图标的位置。可以通过 close-icon 属性自定义图标（等同于 Icon 组件的 name 属性）
<script setup>
  import PopupClose from './demo/PopupClose.vue?raw'
</script>
<HljsBlock :code="PopupClose"></HljsBlock>



### 圆角弹窗
设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。
<script setup>
  import PopupRound from './demo/PopupRound.vue?raw'
</script>
<HljsBlock :code="PopupRound"></HljsBlock>


### 监听点击事件 和 监听显示事件
Popup 支持以下点击事件
* click-popup: 点击弹出层时触发。
* click-overlay: 点击遮罩层时触发。
* click-close-icon: 点击关闭图标时触发。

<br/>

当 Popup 被打开或关闭时，会触发以下事件：
* open: 打开弹出层时立即触发。
* opened: 打开弹出层且动画结束后触发。
* close: 关闭弹出层时立即触发。
* closed: 关闭弹出层且动画结束后触发。
<script setup>
  import PopupEventListener from './demo/PopupEventListener.vue?raw'
</script>
<HljsBlock :code="PopupEventListener"></HljsBlock>



### 指定挂载位置
弹出层默认挂载到组件标签所在位置，可以通过 `teleport` 属性指定挂载位置。
<script setup>
  import PopupTeleport from './demo/PopupTeleport.vue?raw'
</script>
<HljsBlock :code="PopupTeleport"></HljsBlock>


## API

> 当前组件内部透传了 [Icon组件](#/zh-CN/component/icon) 和 [Overlay组件](#/zh-CN/component/overlay)
### Props

| 参数                      | 说明                                                      | 类型          | 默认值      |
|---------------------------|---------------------------------------------------------|---------------|-------------|
| v-model:show              | 控制当前组件显示/隐藏                                     | boolean       | `false`     |
| z-index                   | 遮罩层级                                                  | number        | `1000`      |
| duration                  | 组件显示/隐藏的动画时长，单位秒                            | number        | `0.3`       |
| overlay                   | 是否显示遮罩                                              | boolean       | `true`      |
| overlay-class             | 自定义遮罩层类名                                          | string        | ''          |
| overlay-style             | 自定义遮罩层样式                                          | string        | ''          |
| overlay-transition-name   | 动画名                                                    | string        | -           |
| close-on-click-overlay    | 是否点击遮罩关闭                                          | boolean       | `true`      |
| position                  | 弹出位置（top,bottom,left,right,center）                    | string        | `center`    |
| popup-style               | 自定义弹框样式                                            | CSSProperties | -           |
| pop-class                 | 自定义弹框类名                                            | string        | -           |
| popup-transition-name     | 动画名                                                    | string        | -           |
| show-close-icon           | 是否显示关闭按钮                                          | boolean       | `false`     |
| close-icon-position       | 关闭按钮位置（top-left,top-right,bottom-left,bottom-right） | string        | `top-right` |
| close-icon-class          | 自定义关闭按钮类名                                        | string        | ''          |
| close-on-click-close-icon | 是否点击关闭按钮关闭弹窗                                  | boolean       | `true`      |
| round                     | 是否显示圆角                                              | boolean       | `false`     |
| teleport                  | 指定挂载节点                                              | string        | `body`      |


### Slots

| 名称 | 说明       |
| ------ | ---------- |
| default  | 自定义内嵌内容 |
| close-icon  | 关闭按钮的自定义图标 |



### Events

| 事件名           | 说明                   | 回调参数       |
|------------------|------------------------|----------------|
| click-overlay    | 点击遮罩触发           | `event: MouseEvent` |
| click-close-icon | 点击关闭图标时触发     | `event: MouseEvent` |
| open             | 打开弹框时触发         | -              |
| close            | 关闭弹框时触发         | -              |
| opend            | 遮罩打开动画结束时触发 | `event: MouseEvent` |
| closed           | 遮罩关闭动画结束时触发 | `event: MouseEvent` |



### 样式变量

| 名称                           | 默认值  |
|--------------------------------|---------|
| --r-popup-background-color     | #fff    |
| --r-popup-border-radius        | 16px    |
| --r-popup-close-icon-z-index   | 1       |
| --r-popup-close-icon-color     | #969799 |
| --r-popup-close-icon-font-size | 16px    |
| --r-popup-close-icon-margin    | 12px    |