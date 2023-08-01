# Icon 图标

<div class="card">

### 介绍

基于svg的图标集，可以通过 Icon 组件使用，。

</div>


<div class="card">

### 安装
```javascript
import { createApp } from 'vue';
import { Icon } from 'rong-ui3';

const app = createApp();
app.use(Icon);
```

</div>



<div class="card">

### Icon 名称
通过 `name` 属性来指定需要使用的图标，rong-ui3 内置了一套图标库，可以直接传入对应的名称来使用
<script setup>
  import IconName from './demo/IconName.vue?raw'
</script>
<HljsBlock :code="IconName"></HljsBlock>

</div>


<div class="card">

### Icon 大小 和 颜色
可以通过 `size` 和 `color` 属性设置大小和颜色。也可以直接用style样式 `font-size` `color`设置大小和颜色。
<script setup>
  import IconSize from './demo/IconSize.vue?raw'
</script>
<HljsBlock :code="IconSize"></HljsBlock>

</div>



## API

<div class="card">

### Props

| 参数  | 说明                            | 类型             | 默认值  |
|-------|-------------------------------|------------------|---------|
| name  | 图标名称                        | string           | `close` |
| color | 图标颜色                        | string           | -       |
| size  | 图标大小，如 `20px` `2em` `2rem` | string \| number | -       |

</div>


<div class="card">

### Events

| 事件名 | 说明           | 回调参数     |
|--------|--------------|--------------|
| click  | 点击图标时触发 | event: Event |

</div>


<div class="card">

### Slots

| 名称    | 说明 |
|---------|----|
| default | 内容 |

</div>


<div class="card">

### 样式变量
| 名称                     | 默认值                            |
|--------------------------|-----------------------------------|
| --loading-spin-animation | loadingCircle  1s infinite linear |

</div>