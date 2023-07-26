# Select

### 介绍

提供多个选项集合供用户选择其中一项，带弹层效果。    
### 安装

```javascript
import { createApp } from 'vue';
import { Select } from 'rong-ui3';

const app = createApp();
app.use(Select);
```
### 参数说明
* `Select` 基于 `Picker` `Popup` 封装，参数与 `Picker` `Popup` 相同。  
* `columns` 参数同 `Picker` 可以是一维数组或者二维数组。  
* `v-model` 参数可以是数组或者字符串。当为字符串并且是多列效果时，需传递 `value-separator` 分隔符。
* 多列选择器的标题可以传递 `text-separator` 分隔符进行分割。

### 基础用法
<script setup>
  import Base from './demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>


### 指定根节点
设置 `teleport` 属性指定根节点。
<script setup>
  import Teleport from './demo/Teleport.vue?raw'
</script>
<HljsBlock :code="Teleport"></HljsBlock>

### 多列选择
`v-model` 参数可以是数组或者字符串。为字符串时，需传递 `value-separator` 分隔符。  
标题通过传递 value-separator="_" 进行分隔。  
<script setup>
  import Multiple from './demo/Multiple.vue?raw'
</script>
<HljsBlock :code="Multiple"></HljsBlock>


### 级联选择 
<script setup>
  import Cascade from './demo/Cascade.vue?raw'
</script>
<HljsBlock :code="Cascade"></HljsBlock>


### 自定义 Columns 的结构
通过设置 `columns-field-names` 自定义 columns 结构中的字段。
<script setup>
  import CustomColumns from './demo/CustomColumns.vue?raw'
</script>
<HljsBlock :code="CustomColumns"></HljsBlock>


### 平铺显示
* 通过设置 `type="tile"` 显示平铺效果。
* 平铺显示为一种特殊的 `Select`, 数据结构和参数同 `Select`，但只支持单列效果。
* 设置 `visible-option-num` 指定显示数量，数据超过这个值时才出现滚动效果。
<script setup>
  import Tile from './demo/Tile.vue?raw'
</script>
<HljsBlock :code="Tile"></HljsBlock>


## API

### Props
> 当前组件内部透传了 [Popup组件](#/zh-CN/component/popup) 、[Overlay组件](#/zh-CN/component/overlay) 和 [Picker组件](#/zh-CN/component/picker)

| 参数           | 说明                                    | 类型                      | 默认值 |
|----------------|---------------------------------------|---------------------------|--------|
| v-model        | 默认选中项                              | string \| string[]        | ``     |
| textSeparator  | 多列选择器标题文字分隔符                | string                    | -      |
| textFormatter  | 标题文字格式化，常用于文字过长时截取     | (value: string) => string | -      |
| valueSeparator | 多列选择器value分隔符                   | string                    | `,`    |
| placeholder    | 选择器占位符                            | string                    | -      |
| textAlign      | 标题文字对齐方式，可选值为`left` `right` | string                    | -      |
| type           | 选择器类型，可选值为`picker` `tile`      | string                    | -      |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| confirm  | 点击确定按钮时触发 | `{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }` |
| cancel  | 点击取消按钮时触发 | `{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }` |
| change  | 选项发生改变时触发 | `{ columnIndex, selectedIndex, selectedValues, selectedTexts, selectedOptions, selectedIndexes }` |


## 主题定制

### 样式变量

| 名称                                   | 默认值                          |
|----------------------------------------|---------------------------------|
| --r-select-line-height                 | var(--r-cell-line-height, 24px) |
| --r-select-font-size                   | var(--r-cell-font-size, 14px)   |
| --r-select-color                       | #323233                         |
| --r-select-placeholder-color           | #c8c7cc                         |
| --r-select-content-right-padding-right | 4px                             |
| --r-tile-background                    | #fff                            |
| --r-tile-toolbar-height                | 44px                            |
| --r-tile-toolbar-background            | #f9fafb                         |
| --r-tile-action-padding                | 0 16px                          |
| --r-tile-action-font-size              | 14px                            |
| --r-tile-confirm-action-color          | #1989fa                         |
| --r-tile-cancel-action-color           | #969799                         |
| --r-tile-title-font-weight             | 500                             |
| --r-tile-title-font-size               | 16px                            |
| --r-tile-list-horizontal-padding       | 16px                            |
| --r-tile-option-text-color             | #323233                         |
| --r-tile-option-border-color           | #ebedf0                         |
| --r-tile-option-disabled-opacity       | 0.3                             |
| --r-tile-option-active-text-color      | #4080e8                         |