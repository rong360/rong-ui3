# Button 按钮

<div class="card">

### 介绍

按钮用于触发一个操作，如提交表单。

</div>


<div class="card">

### 安装
```javascript
import { createApp } from 'vue';
import { Button } from 'rong-ui3';

const app = createApp();
app.use(Button);
```

</div>


<div class="card">

### 按钮类型
按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。
<script setup>
  import ButtonType from './demo/ButtonType.vue?raw'
</script>
<HljsBlock :code="ButtonType"></HljsBlock>

</div>



<div class="card">

### 按钮形状
通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。
<script setup>
  import ButtonShape from './demo/ButtonShape.vue?raw'
</script>
<HljsBlock :code="ButtonShape"></HljsBlock>

</div>


<div class="card">

### 按钮尺寸
通过 `size` 属性设置按钮尺寸，支持 `large` `normal` `small` `mini` 四种尺寸，默认为 `normal`
<script setup>
  import ButtonSize from './demo/ButtonSize.vue?raw'
</script>
<HljsBlock :code="ButtonSize"></HljsBlock>

</div>


<div class="card">

### 块级元素
按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来设置通栏按钮。
<script setup>
  import ButtonBlock from './demo/ButtonBlock.vue?raw'
</script>
<HljsBlock :code="ButtonBlock"></HljsBlock>

</div>



<div class="card">

### 禁用状态
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。
<script setup>
  import ButtonDisabled from './demo/ButtonDisabled.vue?raw'
</script>
<HljsBlock :code="ButtonDisabled"></HljsBlock>

</div>


<div class="card">

### 朴素按钮
通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为透明。
<script setup>
  import ButtonPlain from './demo/ButtonPlain.vue?raw'
</script>
<HljsBlock :code="ButtonPlain"></HljsBlock>

</div>


<div class="card">

### 按钮插槽
通过 `prepend` `append` 两个插槽，可以在按钮开始或者结束位置插入Icon或者其它内容。
<script setup>
  import ButtonSlot from './demo/ButtonSlot.vue?raw'
</script>
<HljsBlock :code="ButtonSlot"></HljsBlock>


</div>


## API

<div class="card">

### Props

| 参数     | 说明                                                 | 类型         | 默认值    |
|----------|----------------------------------------------------|--------------|-----------|
| type     | 类型，可选值为 `primary` `success` `warning` `danger` | String       | `default` |
| size     | 尺寸，可选值为 `large` `small` `mini`                 | String       | `normal`  |
| shape    | 形状，可选值为 `square`                               | String       | `round`   |
| plain    | 是否为朴素按钮                                       | Boolean      | `false`   |
| disabled | 是否禁用按钮                                         | Boolean      | `false`   |
| block    | 是否为块级元素                                       | Boolean      | `false`   |
| text     | 按钮文字                                             | string/VNode | -         |


</div>


<div class="card">

### Slots

| 名称    | 说明         |
|---------|------------|
| default | 按钮内容     |
| prepend | 按钮前方内容 |
| append  | 按钮后方内容 |

</div>

<div class="card">

### Events

| 事件名 | 说明           | 回调参数          |
| ------ | -------------- | ----------------- |
| click  | 点击按钮时触发 | event | MouseEvent |

</div>


<div class="card">

### 样式变量
  | 名称                          | 默认值                     |
  |-------------------------------|----------------------------|
  | --r-button-transition         | opacity 0.2s               |
  | --r-button-default-color      | #666                       |
  | --r-button-default-background | #fff                       |
  | --r-button-default-border     | 1px solid rgb(204,204,204) |
  | --r-button-primary-color      | white                      |
  | --r-button-primary-background | #1989fa                    |
  | --r-button-primary-border     | 1px solid #1989fa          |
  | --r-button-success-color      | white                      |
  | --r-button-success-background | #07c160                    |
  | --r-button-success-border     | 1px solid #07c160          |
  | --r-button-danger-color       | white                      |
  | --r-button-danger-background  | #ee0a24                    |
  | --r-button-danger-border      | 1px solid #ee0a24          |
  | --r-button-warning-color      | white                      |
  | --r-button-warning-background | #ff976a                    |
  | --r-button-warning-border     | 1px solid #ff976a          |
  | --r-button-large-height       | 50px                       |
  | --r-button-large-font-size    | 16px                       |
  | --r-button-large-padding      | 0 24px                     |
  | --r-button-normal-height      | 44px                       |
  | --r-button-normal-font-size   | 14px                       |
  | --r-button-normal-padding     | 0 21px                     |
  | --r-button-small-height       | 32px                       |
  | --r-button-small-font-size    | 12px                       |
  | --r-button-small-padding      | 0 15px                     |
  | --r-button-mini-height        | 24px                       |
  | --r-button-mini-font-size     | 10px                       |
  | --r-button-mini-padding       | 0 11px                     |
  | --r-button-round-radius       | 25px                       |
  | --r-button-plain-background   | transparent                |
  | --r-button-disabled-opacity   | 0.5                        |

</div>