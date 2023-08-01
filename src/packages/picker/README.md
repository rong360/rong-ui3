# Picker


<div class="card">

### 介绍

提供多个选项集合供用户选择，支持单列选择、多列选择和级联选择，通常与弹出层组件配合使用。

</div>



<div class="card">

### 安装

```javascript
import { createApp } from 'vue';
import { Picker } from 'rong-ui3';

const app = createApp();
app.use(Picker);
```

</div>



<div class="card">

### 基础用法
<script setup>
  import Base from './demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>

</div>




<div class="card">

### 搭配弹出层使用
Picker 通常作为用于辅助表单填写，可以搭配 Popup 实现效果。
<script setup>
  import Popup from './demo/Popup.vue?raw'
</script>
<HljsBlock :code="Popup"></HljsBlock>

</div>



<div class="card">

### 双向绑定
通过 `v-model` 可以绑定当前选中项的 values，修改 `v-model` 绑定的值时，Picker 的选中状态也会随之改变。

`v-model` 的值是一个数组，数组的第一位对应第一列选中项的 `value`，第二位对应第二列选中项的 `value`，以此类推。
<script setup>
  import Model from './demo/Model.vue?raw'
</script>
<HljsBlock :code="Model"></HljsBlock>

</div>



<div class="card">

### 多列选择
`columns` 属性可以通过二维数组的形式配置多列选择。
<script setup>
  import Multiple from './demo/Multiple.vue?raw'
</script>
<HljsBlock :code="Multiple"></HljsBlock>

</div>



<div class="card">

### 级联选择
使用 `columns` 的 `children` 字段可以实现选项级联的效果
<script setup>
  import Cascade from './demo/Cascade.vue?raw'
</script>
<HljsBlock :code="Cascade"></HljsBlock>

</div>



<div class="card">

### 禁用选项
<script setup>
  import Disabled from './demo/Disabled.vue?raw'
</script>
<HljsBlock :code="Disabled"></HljsBlock>

</div>


<div class="card">

### 自定义 Columns 的结构
<script setup>
  import CustomColumns from './demo/CustomColumns.vue?raw'
</script>
<HljsBlock :code="CustomColumns"></HljsBlock>

</div>


## API


<div class="card">

### Props

| 参数                 | 说明                               | 类型                               | 默认值 |
|----------------------|----------------------------------|------------------------------------|--------|
| v-model:value        | 默认选中项                         | Array                              | `[]`   |
| columns              | 对象数组，配置每一列显示的数据      | PickerOption[] \| PickerOption[][] | -      |
| columns-field-names                  | 定义 `columns` 结构中的字段                   | object  | `{ text: 'text', value: 'value', children: 'children' }`    |
| title                | 设置标题                           | string \| VNode                    | -      |
| title-style          | 标题样式                           | CSSProperties                      | -      |
| cancel-button-text   | 取消按钮文案                       | string \| VNode                    | `取消` |
| cancel-button-style  | 取消按钮样式                       | CSSProperties                      | -      |
| confirm-button-text  | 确定按钮文案                       | string \| VNode                    | `确定` |
| confirm-button-style | 确定按钮样式                       | CSSProperties                      | -      |
| show-toolbar         | 是否显示顶部导航                   | boolean                            | `true` |
| visible-option-num   | 可见的选项个数                     | number \| string                   | `6`    |
| swipe-duration       | 快速滑动时惯性滚动的时长，单位 `ms` | number \| string                   | `1000` |

</div>



<div class="card">

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| confirm  | 点击确定按钮时触发 | `{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }` |
| cancel  | 点击取消按钮时触发 | `{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }` |
| change  | 选项发生改变时触发 | `{ columnIndex, selectedIndex, selectedValues, selectedOptions, selectedIndexes }` |

</div>



<div class="card">

### Slots

| 名称 | 说明           | 
|--------|----------------|
| columns-top  | 自定义滑动数据顶部区域 |
| columns-bottom  | 自定义滑动数据底部区域 |

</div>



<div class="card">

### PickerOption 数据结构

| 键名      | 说明                | 类型                      | 默认值 |
|-----------|-------------------|---------------------------|--------|
| text      | 选项的文字内容      | string \| number          | -      |
| value     | 选项对应的值，且唯一 | string \| number          | -      |
| children  | 用于级联选项        | PickerOption[]            | -      |
| disabled  | 是否禁用选项        | boolean                   | -      |
| className | 添加额外的类名      | string \| Array \| object | -      |

</div>



<div class="card">

### 样式变量

| 名称                            | 默认值  |
|---------------------------------|---------|
| --r-picker-background           | #fff    |
| --r-picker-toolbar-height       | 44px    |
| --r-picker-action-padding       | 0 16px  |
| --r-picker-action-font-size     | 14px    |
| --r-picker-confirm-action-color | #1989fa |
| --r-picker-cancel-action-color  | #969799 |
| --r-picker-title-font-weight    | 500     |
| --r-picker-title-font-size      | 16px    |
| --r-picker-option-font-size     | 16px    |
| --r-picker-option-text-color    | #323233 |
| --r-picker-option-height        | 44px    |
| --r-picker-frame-border-color   | #ebedf0 |

</div>
