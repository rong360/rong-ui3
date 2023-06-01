# Icon 图标

### 介绍

基于svg的图标集，可以通过 Icon 组件使用，。

### 安装
```javascript
import { createApp } from 'vue';
import { Icon } from 'rong-ui3';

const app = createApp();
app.use(Icon);
```


### Icon 名称
通过 `name` 属性来指定需要使用的图标，rong-ui3 内置了一套图标库，可以直接传入对应的名称来使用
<script setup>
  import IconName from '../demo/IconName.vue?raw'
</script>
<HljsBlock :code="IconName"></HljsBlock>



### Icon 大小 和 颜色
可以通过 `size` 和 `color` 属性设置大小和颜色。也可以直接用style样式 `font-size` `color`设置大小和颜色。
<script setup>
  import IconSize from '../demo/IconSize.vue?raw'
</script>
<HljsBlock :code="IconSize"></HljsBlock>


## API

### Props

| 参数  | 说明                            | 类型             | 默认值  |
|-------|-------------------------------|------------------|---------|
| name  | 图标名称                        | string           | `close` |
| color | 图标颜色                        | string           | -       |
| size  | 图标大小，如 `20px` `2em` `2rem` | string \| number | -       |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|--------------|--------------|
| click  | 点击图标时触发 | event: Event |


### Slots

| 名称    | 说明 |
|---------|----|
| default | 内容 |



### 样式变量
| 名称                     | 默认值                            |
|--------------------------|-----------------------------------|
| --loading-spin-animation | loadingCircle  1s infinite linear |