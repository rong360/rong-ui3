# Divider 分割线


### 介绍
用于将内容分隔为多个区域。


### 安装
``` javascript
import { createApp } from 'vue';
import { Divider } from 'rong-ui3';

const app = createApp();
app.use(Divider);
```


### 基础用法
默认渲染一条水平分割线。
<script setup>
  import DividerBasic from '../demo/DividerBasic.vue?raw'
</script>
<HljsBlock :code="DividerBasic"></HljsBlock>


### 展示文本
通过插槽可以在分割线中间插入内容。
<script setup>
  import DividerText from '../demo/DividerText.vue?raw'
</script>
<HljsBlock :code="DividerText"></HljsBlock>


### 内容位置
通过 `content-position` 指定内容所在位置。
<script setup>
  import DividerContentPosition from '../demo/DividerContentPosition.vue?raw'
</script>
<HljsBlock :code="DividerContentPosition"></HljsBlock>


### 虚线
添加 `dashed` 属性使分割线渲染为虚线。
<script setup>
  import DividerDashed from '../demo/DividerDashed.vue?raw'
</script>
<HljsBlock :code="DividerDashed"></HljsBlock>


### 非细线
添加 `hairline` 属性使分割线渲染为非缩放的线。
<script setup>
  import DividerNotHairline from '../demo/DividerNotHairline.vue?raw'
</script>
<HljsBlock :code="DividerNotHairline"></HljsBlock>


### 无边距
添加 `margin` 属性使分割线渲染无margin边距。
<script setup>
  import DividerNotMargin from '../demo/DividerNotMargin.vue?raw'
</script>
<HljsBlock :code="DividerNotMargin"></HljsBlock>


### 自定义样式
可以直接通过 `style` 属性设置分割线的样式。
<script setup>
  import DividerCustomStyle from '../demo/DividerCustomStyle.vue?raw'
</script>
<HljsBlock :code="DividerCustomStyle"></HljsBlock>


### 垂直分割线
添加 `direction` 属性使分割线水平或者垂直展示。
<script setup>
  import DividerDirection from '../demo/DividerDirection.vue?raw'
</script>
<HljsBlock :code="DividerDirection"></HljsBlock>


### 样式变量
| 名称                          | 默认值  |
|-------------------------------|---------|
| --r-divider-text-font-size    | 14px    |
| --r-divider-text-color        | #707070 |
| --r-divider-horizontal-margin | 16px 0  |
| --r-divider-vertical-margin   | 0 8px   |
| --r-divider-content-padding   | 16px    |
