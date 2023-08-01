# Divider 分割线


<div class="card">

### 介绍
用于将内容分隔为多个区域。

</div>


<div class="card">

### 安装
``` javascript
import { createApp } from 'vue';
import { Divider } from 'rong-ui3';

const app = createApp();
app.use(Divider);
```

</div>



<div class="card">

### 基础用法
默认渲染一条水平分割线。
<script setup>
  import DividerBase from './demo/DividerBase.vue?raw'
</script>
<HljsBlock :code="DividerBase"></HljsBlock>

</div>



<div class="card">

### 展示文本
通过插槽可以在分割线中间插入内容。
<script setup>
  import DividerText from './demo/DividerText.vue?raw'
</script>
<HljsBlock :code="DividerText"></HljsBlock>

</div>


<div class="card">

### 内容位置
通过 `content-position` 指定内容所在位置。
<script setup>
  import DividerContentPosition from './demo/DividerContentPosition.vue?raw'
</script>
<HljsBlock :code="DividerContentPosition"></HljsBlock>

</div>


<div class="card">

### 虚线
添加 `dashed` 属性使分割线渲染为虚线。
<script setup>
  import DividerDashed from './demo/DividerDashed.vue?raw'
</script>
<HljsBlock :code="DividerDashed"></HljsBlock>

</div>


<div class="card">

### 非细线
添加 `hairline` 属性使分割线渲染为非缩放的线。
<script setup>
  import DividerNotHairline from './demo/DividerNotHairline.vue?raw'
</script>
<HljsBlock :code="DividerNotHairline"></HljsBlock>

</div>


<div class="card">

### 无边距
添加 `margin` 属性使分割线渲染无margin边距。
<script setup>
  import DividerNotMargin from './demo/DividerNotMargin.vue?raw'
</script>
<HljsBlock :code="DividerNotMargin"></HljsBlock>

</div>



<div class="card">

### 自定义样式
可以直接通过 `style` 属性设置分割线的样式。
<script setup>
  import DividerCustomStyle from './demo/DividerCustomStyle.vue?raw'
</script>
<HljsBlock :code="DividerCustomStyle"></HljsBlock>

</div>


<div class="card">

### 垂直分割线
添加 `direction` 属性使分割线水平或者垂直展示。
<script setup>
  import DividerDirection from './demo/DividerDirection.vue?raw'
</script>
<HljsBlock :code="DividerDirection"></HljsBlock>

</div>

## API

<div class="card">

### Props

| 参数             | 说明                             | 类型    | 默认值       |
|------------------|--------------------------------|---------|--------------|
| dashed           | 是否使用虚线                     | boolean | `false`      |
| hairline         | 是否使用 `0.5px` 线              | boolean | `true`       |
| content-position | 内容位置，可选值为 `left`、`right` | string  | `center`     |
| direction        | 水平还是垂直类型                 | string  | `horizontal` |

</div>


<div class="card">

### Slots

| 名称    | 说明 |
|---------|----|
| default | 内容 |

</div>



<div class="card">

### 样式变量
| 名称                          | 默认值  |
|-------------------------------|---------|
| --r-divider-text-font-size    | 14px    |
| --r-divider-text-color        | #707070 |
| --r-divider-horizontal-margin | 16px 0  |
| --r-divider-vertical-margin   | 0 8px   |
| --r-divider-content-padding   | 16px    |

</div>
