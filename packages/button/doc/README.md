# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { Button } from 'rong-ui3';

const app = createApp();
app.use(Button);
```


<script setup>
  import ButtonType from '../demo/ButtonType.vue?raw'
</script>
### 按钮类型
按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。
<HljsBlock :code="ButtonType"></HljsBlock>


### 按钮形状
通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。
<script setup>
  import ButtonShape from '../demo/ButtonShape.vue?raw'
</script>
<HljsBlock :code="ButtonShape"></HljsBlock>


### 按钮尺寸
通过 `size` 属性设置按钮尺寸，支持 `large` `normal` `small` `mini` 四种尺寸，默认为 `normal`
<script setup>
  import ButtonSize from '../demo/ButtonSize.vue?raw'
</script>
<HljsBlock :code="ButtonSize"></HljsBlock>

### 块级元素
<script setup>
  import ButtonBlock from '../demo/ButtonBlock.vue?raw'
</script>
按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来设置通栏按钮。
<HljsBlock :code="ButtonBlock"></HljsBlock>


### 禁用状态
<script setup>
  import ButtonDisabled from '../demo/ButtonDisabled.vue?raw'
</script>
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。
<HljsBlock :code="ButtonDisabled"></HljsBlock>


### 朴素按钮
<script setup>
  import ButtonPlain from '../demo/ButtonPlain.vue?raw'
</script>
通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为透明。
<HljsBlock :code="ButtonPlain"></HljsBlock>


### 按钮插槽
<script setup>
  import ButtonSlot from '../demo/ButtonSlot.vue?raw'
</script>
通过 `prepend` `append` 两个插槽，可以在按钮开始或者结束位置插入Icon或者其它内容。
<HljsBlock :code="ButtonSlot"></HljsBlock>




## API

### Props

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| type     | 类型，可选值为 `primary` `success` `warning` `danger` | String  | `default` |
| size     | 尺寸，可选值为 `large` `small` `mini`                        | String  | `normal`  |
| shape    | 形状，可选值为 `square`                                      | String  | `round`   |
| plain    | 是否为朴素按钮                                               | Boolean | `false`   |
| disabled | 是否禁用按钮                                                 | Boolean | `false`   |
| block    | 是否为块级元素                                               | Boolean | `false`   |

### Events

| 事件名 | 说明           | 回调参数          |
| ------ | -------------- | ----------------- |
| click  | 点击按钮时触发 | event: MouseEvent |
