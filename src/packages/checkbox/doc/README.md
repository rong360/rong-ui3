# Checkbox 复选按钮

### 介绍

多选按钮用于选择。

### 安装

``` ts
import { createApp } from 'vue';
import { Checkbox, CheckboxGroup } from 'rong-ui3';

const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
```

### 基础用法
通过 `v-model` 绑定复选框的勾选状态。  
将 text-position 属性设置为 'left'，可以将文本位置调整到复选框左侧。
<script setup>
  import Base from '../demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>


### 半选状态
通过 `indeterminate` 属性设置是否支持半选状态。
<script setup>
  import Indeterminate from '../demo/Indeterminate.vue?raw'
</script>
<HljsBlock :code="Indeterminate"></HljsBlock>


### 禁用状态
通过设置 `disabled` 属性可以禁用复选框。
<script setup>
  import Disabled from '../demo/Disabled.vue?raw'
</script>
<HljsBlock :code="Disabled"></HljsBlock>


### 自定义大小
通过设置 `style` 或者 `class` 的font-size可以控制 `Icon` 大小。 
<script setup>
  import CustomSize from '../demo/CustomSize.vue?raw'
</script>
<HljsBlock :code="CustomSize"></HljsBlock>



### 自定义颜色
通过设置 `class` 的color可以控制 `Icon` 颜色。 
<script setup>
  import CustomColor from '../demo/CustomColor.vue?raw'
</script>
<HljsBlock :code="CustomColor"></HljsBlock>


### 自定义图标
通过 slot 自定义图标, `icon` `checkedIcon` `indeterminate` 分别对应 `未选择` `已选择` `半选择` 三种状态所对应的图标。
<script setup>
  import IconSlot from '../demo/IconSlot.vue?raw'
</script>
<HljsBlock :code="IconSlot"></HljsBlock>


### change事件
值发生变化时，将触发 `change` 事件
<script setup>
  import Event from '../demo/Event.vue?raw'
</script>
<HljsBlock :code="Event"></HljsBlock>


### 复选框组
复选框可以与复选框组一起使用，复选框组通过 `v-model` 数组绑定复选框的勾选状态。
<script setup>
  import Group from '../demo/Group.vue?raw'
</script>
<HljsBlock :code="Group"></HljsBlock>


### 水平排列
将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。
<script setup>
  import Direction from '../demo/Direction.vue?raw'
</script>
<HljsBlock :code="Direction"></HljsBlock>


### checkboxGroup禁用
`CheckboxGroup` 设置 `disabled` 属性可以禁用复选框。
<script setup>
  import CheckboxGroupDisabled from '../demo/CheckboxGroupDisabled.vue?raw'
</script>
<HljsBlock :code="CheckboxGroupDisabled"></HljsBlock>


### checkboxGroup使用，限制最大可选数（2个）
`CheckboxGroup` 设置 `max` 属性可以限制复选框组的最大可选数。
<script setup>
  import Max from '../demo/Max.vue?raw'
</script>
<HljsBlock :code="Max"></HljsBlock>


### checkboxGroup 全选/取消/反选
通过 `CheckboxGroup` 实例上的 `toggleAll` 方法切换所有复选框，传 true 为选中，false 为取消选中，不传参为取反。  
// 全部反选  
checkboxGroupRef?.value.toggleAll();  
// 全部选中  
checkboxGroupRef?.value.toggleAll(true);  
// 全部取消  
checkboxGroupRef?.value.toggleAll(false);  

// 全部反选，并跳过禁用的复选框  
checkboxGroupRef?.value.toggleAll({  skipDisabled: true });  
// 全部选中，并跳过禁用的复选框  
checkboxGroupRef?.value.toggleAll({  checked: true,  skipDisabled: true });  

<script setup>
  import Toggle from '../demo/Toggle.vue?raw'
</script>
<HljsBlock :code="Toggle"></HljsBlock>

### checkboxGroup 全选/半选/取消
<script setup>
  import ToggleIndeterminate from '../demo/ToggleIndeterminate.vue?raw'
</script>
<HljsBlock :code="ToggleIndeterminate"></HljsBlock>


### 按钮形状
设置 `shape` 属性可改变复选框为 `button` 形状。
<script setup>
  import Shape from '../demo/Shape.vue?raw'
</script>
<HljsBlock :code="Shape"></HljsBlock>


### 搭配单元格组件使用
利用 `CheckboxGroup` 抛出的 `children` 和 `Checkbox` 抛出的 `toggle`方法进行切换。
<script setup>
  import CellGroup from '../demo/CellGroup.vue?raw'
</script>
<HljsBlock :code="CellGroup"></HljsBlock>


## API

### Checkbox Props

| 参数          | 说明                                 | 类型    | 默认值  |
|---------------|------------------------------------|---------|---------|
| v-model       | 是否处于选中状态                     | boolean | `false` |
| disabled      | 是否禁用选择                         | boolean | `false` |
| text-position | 文本所在的位置，可选值：`left`,`right` | string  | `right` |
| name          | 标识符，通常为一个唯一的字符串或数字  | string  | -       |
| indeterminate | 当前是否支持半选状态，一般用在全选操作中        | boolean                  | `false` |
| shape | 形状，可选值：`button`、`round` | String | `round` |
| icon-style | 自定义icon样式 | CSSProperties | - |

### Checkbox Slots
| 名称          | 说明           |
|---------------|--------------|
| icon          | 未选中时的图标 |
| checkedIcon   | 选中时的图标   |
| indeterminate | 半选时的图标   |
### CheckboxGroup Props

| 参数      | 说明                                                           | 类型    | 默认值     |
|-----------|--------------------------------------------------------------|---------|------------|
| v-model   | 当前选中项的标识符，和 `name` 相对应                            | Array   | -          |
| disabled  | 是否禁用选择,将用于其下的全部复选框                            | boolean | `false`    |
| max       | 限制选择的数量，不能和`全选/取消/反选`一起使用, `0`表示没有限制 | number  | `0`        |
| direction | 排列方向，可选值为 `horizontal`                                 | string  | `vertical` |



### Checkbox Events

| 事件名 | 说明         | 回调参数                                                          |
|--------|------------|---------------------------------------------------------------|
| change | 值变化时触发 | (checked, label), `checked` 代表当前状态，`label` 表示当前选中的值 |

### Checkbox Methods

| 方法名 | 说明       | 参数 |
|--------|----------|------|
| toggle | 切换复选框 | -    |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 
|----- | ----- | ----- 
| change | 值变化时触发 | `label`,`label` 返回一个数组，表示当前选中项的集合


### CheckboxGroup Methods

| 方法名    | 说明                                                            | 参数                        |
|-----------|---------------------------------------------------------------|-----------------------------|
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | `options?: boolean \| object` |


## 主题定制

### 样式变量

| 名称                                   | 默认值                  |
|----------------------------------------|-------------------------|
| --r-checkbox-line-height               | var(--r-line-height-md) |
| --r-checkbox-line-height               | var(--r-line-height-md) |
| --r-checkbox-font-size                 | var(--r-font-size-md)   |
| --r-checkbox-label-margin-left         | var(--r-padding-xs)     |
| --r-checkbox-horizontal-margin-right   | var(--r-padding-sm)     |
| --r-checkbox-label-margin-left         | var(--r-padding-xs)     |
| --r-checkbox-label-disabled-color      | #999                    |
| --r-checkbox-icon-color                | #d6d6d6                 |
| --r-checkbox-icon-font-size            | inherit                 |
| --r-checkbox-icon-checked-color        | var(--r-primary-color)  |
| --r-checkbox-icon-indeterminate-color  | var(--r-primary-color)  |
| --r-checkbox-icon-disabled-color       | #d6d6d6                 |
| --r-checkbox-button-background         | #f6f7f9                 |
| --r-checkbox-button-border-radius      | 15px                    |
| --r-checkbox-button-padding            | 5px 18px                |
| --r-checkbox-button-checked-background | #666                    |
| --r-checkbox-button-checked-color      | #fff                    |