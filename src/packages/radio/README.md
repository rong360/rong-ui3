# Radio 单选框

### 介绍

在一组备选项中进行单选。

### 安装

``` ts
import { createApp } from 'vue';
import { Radio, RadioGroup } from 'rong-ui3';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
```

### 基础用法
通过 `v-model` 绑定值当前选中项的 name。  
通过 `shape` 属性可设置形状，可选值：`radio` `round` `square` `button`
<script setup>
  import Base from './demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>


### 禁用文本点击
设置 label-disabled 属性后，点击图标以外的内容不会触发单选框切换。
<script setup>
  import LabelDisabled from './demo/LabelDisabled.vue?raw'
</script>
<HljsBlock :code="LabelDisabled"></HljsBlock>



### 左侧文本
将 text-position 属性设置为 'left'，可以将文本位置调整到单选框左侧。
<script setup>
  import TextPosition from './demo/TextPosition.vue?raw'
</script>
<HljsBlock :code="TextPosition"></HljsBlock>


### 自定义大小
通过设置 `style` 或者 `class` 的font-size可以控制 `Icon` 大小。 
<script setup>
  import CustomSize from './demo/CustomSize.vue?raw'
</script>
<HljsBlock :code="CustomSize"></HljsBlock>



### 自定义颜色
通过设置 `class` 的color可以控制 `Icon` 颜色。 
<script setup>
  import CustomColor from './demo/CustomColor.vue?raw'
</script>
<HljsBlock :code="CustomColor"></HljsBlock>


### 自定义图标
通过 slot 自定义图标, `icon` `checkedIcon` 分别对应 `未选择` `已选择`  两种状态所对应的图标。
<script setup>
  import IconSlot from './demo/IconSlot.vue?raw'
</script>
<HljsBlock :code="IconSlot"></HljsBlock>


### change事件
值发生变化时，将触发 `change` 事件
<script setup>
  import Event from './demo/Event.vue?raw'
</script>
<HljsBlock :code="Event"></HljsBlock>



### 水平排列
将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。
<script setup>
  import Direction from './demo/Direction.vue?raw'
</script>
<HljsBlock :code="Direction"></HljsBlock>


### RadioGroup禁用
`RadioGroup` 设置 `disabled` 属性可以禁用单选框。
<script setup>
  import GroupDisabled from './demo/GroupDisabled.vue?raw'
</script>
<HljsBlock :code="GroupDisabled"></HljsBlock>



### 按钮形状
设置 `shape` 属性可改变单选框为 `button` 或 `square` 形状。
<script setup>
  import Shape from './demo/Shape.vue?raw'
</script>
<HljsBlock :code="Shape"></HljsBlock>


### 搭配单元格组件使用
搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。
<script setup>
  import CellGroup from './demo/CellGroup.vue?raw'
</script>
<HljsBlock :code="CellGroup"></HljsBlock>


## API

### Radio Props

| 参数           | 说明                                            | 类型          | 默认值  |
|----------------|-----------------------------------------------|---------------|---------|
| v-model        | 是否处于选中状态                                | boolean       | `false` |
| disabled       | 是否禁用选择                                    | boolean       | `false` |
| label-disabled | 是否禁用单选框文本点击                          | boolean       | `false` |
| text-position  | 文本所在的位置，可选值：`left`,`right`            | string        | `right` |
| shape          | 形状，可选值： `radio` `round` `square` `button`、 | String        | `radio` |
| icon-style     | 自定义icon样式                                  | CSSProperties | -       |


### Radio Slots
| 名称          | 说明           |
|---------------|--------------|
| icon          | 未选中时的图标 |
| checkedIcon   | 选中时的图标   |


### RadioGroup Props
| 参数      | 说明                                                           | 类型    | 默认值     |
|-----------|--------------------------------------------------------------|---------|------------|
| v-model   | 当前选中项的标识符，和 `name` 相对应                            | any   | -          |
| disabled  | 是否禁用选择,将用于其下的全部单选框                            | boolean | `false`    |
| direction | 排列方向，可选值为 `horizontal`                                 | string  | `vertical` |



### RadioGroup Events

| 事件名 | 说明                     | 回调参数     |
|--------|------------------------|--------------|
| change | 当绑定值变化时触发的事件 | name: string |


### 样式变量

| 名称                                   | 默认值                  |
|----------------------------------------|-------------------------|
| --r-radio-line-height               | var(--r-line-height-md) |
| --r-radio-line-height               | var(--r-line-height-md) |
| --r-radio-font-size                 | var(--r-font-size-md)   |
| --r-radio-label-margin-left         | var(--r-padding-xs)     |
| --r-radio-horizontal-margin-right   | var(--r-padding-sm)     |
| --r-radio-label-margin-left         | var(--r-padding-xs)     |
| --r-radio-label-disabled-color      | #999                    |
| --r-radio-icon-color                | #d6d6d6                 |
| --r-radio-icon-font-size            | inherit                 |
| --r-radio-icon-checked-color        | var(--r-primary-color)  |
| --r-radio-icon-indeterminate-color  | var(--r-primary-color)  |
| --r-radio-icon-disabled-color       | #d6d6d6                 |
| --r-radio-button-background         | #f6f7f9                 |
| --r-radio-button-border-radius      | 15px                    |
| --r-radio-button-padding            | 5px 18px                |
| --r-radio-button-checked-background | #666                    |
| --r-radio-button-checked-color      | #fff                    |