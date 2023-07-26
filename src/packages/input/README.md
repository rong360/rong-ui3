# Input 输入框

### 介绍

用户可以在文本框里输入内容。

### 安装

``` javascript
import { createApp } from 'vue';
import { Input } from 'rong-ui3';

const app = createApp();
app.use(Input);
```

### 基础用法
可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。
<script setup>
  import Base from './demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>


### 自定义类型
根据 `type` 属性定义不同类型的输入框，默认值为 text。
<script setup>
  import CustomType from './demo/CustomType.vue?raw'
</script>
<HljsBlock :code="CustomType"></HljsBlock>



### 显示清除图标
通过设置 `clearable` 在输入过程中展示清除图标。
通过 `show-clear-icon-always` 设置始终显示清除图标。
<script setup>
  import Clearable from './demo/Clearable.vue?raw'
</script>
<HljsBlock :code="Clearable"></HljsBlock>


### 格式化输入内容
通过 `formatter` 属性可以对输入的内容进行格式化，通过 `format-trigger` 属性可以指定执行格式化的时机。例如对银行卡进行分隔：
<script setup>
  import Formatter from './demo/Formatter.vue?raw'
</script>
<HljsBlock :code="Formatter"></HljsBlock>


### 禁用和只读
通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。
<script setup>
  import Readonly from './demo/Readonly.vue?raw'
</script>
<HljsBlock :code="Readonly"></HljsBlock>


### 对齐方式
通过 `input-align` 设置输入框对齐方式。
<script setup>
  import InputAlign from './demo/InputAlign.vue?raw'
</script>
<HljsBlock :code="InputAlign"></HljsBlock>


### 事件演示
<script setup>
  import Event from './demo/Event.vue?raw'
</script>
<HljsBlock :code="Event"></HljsBlock>

### 组件暴露的方法
组件对外暴露的方法有 `focus` `blur` `select`
<script setup>
  import Method from './demo/Method.vue?raw'
</script>
<HljsBlock :code="Method"></HljsBlock>


### 插槽演示
可以通过 `left` `right` 插槽, 在输入框前后插入自定义内容。
<script setup>
  import Slots from './demo/Slots.vue?raw'
</script>
<HljsBlock :code="Slots"></HljsBlock>


### 配合表单使用
<script setup>
  import Form from './demo/Form.vue?raw'
</script>
<HljsBlock :code="Form"></HljsBlock>



## API
### Props

| 参数                | 说明                                              | 类型                      | 默认值    |
|---------------------|-------------------------------------------------|---------------------------|-----------|
| v-model             | 输入值，双向绑定                                   | string                    | -         |
| type                | 输入框类型, 支持原生 input 标签的所有 `type` 属性，额外支持了 `digit` 类型  | string   | `text`  |
| placeholder         | 输入框为空时占位符                                | string                    | -         |
| input-align         | 输入框内容对齐方式，可选值 `left`、`center`、`right` | string                    | `left`    |
| disabled            | 是否禁用                                          | boolean                   | `false`   |
| readonly            | 是否只读                                          | boolean                   | `false`   |
| autofocus           | 是否自动获得焦点，`iOS` 系统不支持该属性           | boolean                   | `false`   |
| max-length          | 限制最长输入字符                                  | string ｜ number           | -         |
| clearable           | 展示清除 `Icon`                                   | boolean                   | `false`   |
| autocomplete        | 原生的自动完成功能                                | string                    | `off`     |
| showClearIconAlways | 是否始终展示清除按钮                              | boolean                   | `false`   |
| formatter           | 输入内容格式化函数                                | `(val: string) => string` | -         |
| format-trigger      | 格式化函数触发的时机，可选值为 `onInput`、`onBlur`  | string                    | `onInput` |


### Events

| 事件名             | 说明                 | 回调参数 |
|--------------------|--------------------|----------|
| update:model-value | 输入框内容变化时触发 | `val`    |
| focus              | 输入框聚焦时触发     | `event`  |
| blur               | 输入框失焦时触发     | `event`  |
| clear              | 点击清除按钮时触发   | `event`  |
| click              | 点击组件时触发       | `event`  |
| input              | 输入框输入内容时触发 | `event`  |


### Slots
| 名称  | 说明                     |
|-------|------------------------|
| clear | 自定义输入框尾部清除按钮 |
| left  | 自定义输入框左侧插槽内容 |
| right | 自定义输入框右侧插槽内容 |

### Ref
| 名称   | 说明     |
|--------|--------|
| focus  | 获取焦点 |
| blur   | 失去焦点 |
| select | 选择文字 |


### 样式变量

| 名称                              | 默认值                          |
|-----------------------------------|---------------------------------|
| --r-input-line-height             | var(--r-cell-line-height, 24px) |
| --r-input-font-size               | var(--r-cell-font-size, 14px)   |
| --r-input-input-color             | #323232                         |
| --r-input-input-font-size         | var(--r-cell-font-size, 14px)   |
| --r-input-input-placeholder-color | #c8c9cc                         |
| --r-input-input-disabled-color    | #999                            |
| --r-input-input-slot-margin-left  | 4px                             |
| --r-input-input-slot-margin-right | 4px                             |
| --r-input-clear-color             | #c8c9cc                         |