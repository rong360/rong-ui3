# Overlay 遮罩层

### 介绍
创建一个遮罩层，通常用于阻止用户进行其它操作


### 安装
```javascript
import { createApp } from 'vue';
import { OverLay } from 'rong-ui3';

const app = createApp();
app.use(OverLay);
```


### 基础用法
使用 show 控制遮罩层的显示/隐藏
<script setup>
  import OverlayBase from '../demo/OverlayBase.vue?raw'
</script>
<HljsBlock :code="OverlayBase"></HljsBlock>


### 嵌入内容
通过默认插槽可以在遮罩层上嵌入任意内容。  
**特别提示：嵌套内容中有滚动区域时，滚动元素需要添加 scroll-area 类名才能滚动。**
<script setup>
  import OverlayEmbedContent from '../demo/OverlayEmbedContent.vue?raw'
</script>
<HljsBlock :code="OverlayEmbedContent"></HljsBlock>


### 设置动画时间
通过 `duration` 设置遮罩显示/隐藏的时间，单位 `s`
<script setup>
  import OverlayDuration from '../demo/OverlayDuration.vue?raw'
</script>
<HljsBlock :code="OverlayDuration"></HljsBlock>


### 关闭背景渐变
通过 `css-transition` 设置背景是否添加渐变动画
<script setup>
  import OverlayCssTransition from '../demo/OverlayCssTransition.vue?raw'
</script>
<HljsBlock :code="OverlayCssTransition"></HljsBlock>




## API

### Props

| 参数                   | 说明                 | 类型           | 默认值  |
|------------------------|--------------------|----------------|---------|
| v-model:show           | 当前组件是否显示     | Boolean        | `false` |
| z-index                | 遮罩层级             | String, Number | `1000`  |
| duration               | 动画时长，单位秒      | String, Number | `0.3`   |
| css-transition         | 背景是否添加渐变动画 | Boolean        | `true`  |
| transition-name        | 渐变动画名称 | String        | `r-overlay--fade`  |
| close-on-click-overlay | 是否点击遮罩关闭     | Boolean        | `true`  |


### Events

| 事件名 | 说明       | 回调参数          |
|--------|----------|-------------------|
| click  | 点击时触发 | event: MouseEvent |


### 样式变量

| 名称                   | 默认值             |
|------------------------|--------------------|
| --r-overlay-background | rgba(0, 0, 0, 0.7) |
