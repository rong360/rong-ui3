# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。

### 安装

    
``` javascript
import { createApp } from 'vue';
import { Form, FormItem } from '@rong-ui3';

const app = createApp();
app.use(Form);
app.use(FormItem);
```


### 基础用法
通过Form 传递需要校验的值和规则。  
<script setup>
  import Base from '../demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>


### 基础用法二
通过FormItem 传递需要校验的值和规则
<script setup>
  import Base2 from '../demo/Base2.vue?raw'
</script>
<HljsBlock :code="Base2"></HljsBlock>



### 开启非空校验、必填*号、清除按钮、单个表单项验证
Form 设置`requied`可给所有项开启非空校验，FormItem 设置 `:required=false`可取消。 
Form 设置`show-star`可给所有项显示必填的`*`号，FormItem 设置 `:required=false`可取消。   
Form 设置`clearable`可给所有项显示清除按钮。FormItem 设置 `:clearable=false`可取消。  
Form 设置`title-align` 控制标题对齐方式、`value-align` 控制右侧内容对齐方式。  
<script setup>
  import NotEmptyVerify from '../demo/NotEmptyVerify.vue?raw'
</script>
<HljsBlock :code="NotEmptyVerify"></HljsBlock>



### 动态表单
Form 设置 `requied` 可给所有项开启非空校验
<script setup>
  import DynamicForm from '../demo/DynamicForm.vue?raw'
</script>
<HljsBlock :code="DynamicForm"></HljsBlock>



### 滚动到指定表单项
调用Form的 `scrollToField(name: string, options?: boolean | ScrollIntoViewOptions)` 方法：     
不传参数时默认滚动到表单第一个错误项。 传name参数时滚动到指定表单项。
<script setup>
  import ScrollToField from '../demo/ScrollToField.vue?raw'
</script>
<HljsBlock :code="ScrollToField"></HljsBlock>



## API
### Form Props

| 参数               | 说明                                      | 类型    | 默认值 |
|--------------------|-----------------------------------------|---------|--------|
| model              | 表单数据对象                              | object  |        |
| rules              | 统一配置每个 `FormItem` 的 `rules`        | FormItemRule []   | `[]`   |
| title-align        | 标题对齐 可选值为 `left` `center` `right` | String  | -      |
| value-align        | 内容对齐 可选值为 `left` `center` `right` | String  | -      |
| clearable          | `input` 展示清除 `Icon`                   | boolean | true   |
| required           | 所有表单项开启非空校验                    | boolean | -      |
| show-star          | 显示必填`*`号                             | boolean | -      |
| show-error-message | 显示错误提示                              | boolean | true   |

### Form Events

| 事件名   | 说明                                                             | 回调参数 |
|----------|----------------------------------------------------------------|----------|
| complete | 返回所有必填表单项是否输入完毕，常用于没输入完时按钮置灰，禁止提交 | val      |

### FormItem Props

| 参数               | 说明                                                             | 类型            | 默认值 |
|--------------------|----------------------------------------------------------------|-----------------|--------|
| v-model              | 需要验证的数据（Form上的`mode` `rules` 和 FormItem上的v-model 只能二选一）     | FormItemRule [] | []     |
| title               | 输入框左侧文本                                            | string \| VNode          | -      |
| rules              | 定义校验规则                                                     | FormItemRule [] | []     |
| prop               | 表单域 `v-model` 字段， 在使用表单校验功能的情况下，该属性是 _必填_ 的 | string          | -      |
| required           | 是否必填字段                                                     | boolean         | -      |
| title-align        | 表单项 `title` 对齐方式，可选值为 `center` `right`                | string          | `left` |
| value-align        | 右侧插槽对齐方式，可选值为 `center` `right`                       | string          | `left` |
| center             | 垂直居中                                                         | boolean         | false  |
| show-star          | 显示必填 `*` 号                                                  | boolean         | -      |
| show-error-message | 是否在校验不通过时在输入框下方展示错误提示                       | boolean         | `true` |
| label-for   | 指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。  | string      | -  |

### FormItemRule 数据结构

使用 `FormItem` 的 `rules` 属性可以定义校验规则，可选属性如下:

| 键名      | 说明                   | 类型                                                      |
|-----------|----------------------|-----------------------------------------------------------|
| required  | 是否为必选字段         | boolean                                                   |
| message   | 错误提示文案           | string                                                    |
| validator | 通过函数进行校验       | (value:string, rule?:FormItemRule ) => boolean \| Promise |
| pattern   | 通过正则表达式进行校验 | RegExp                                                    |

### FormItem Slots

| 名称    | 说明              |
|---------|-------------------|
| default | 自定义内容        |
| title   | 自定义 `title` 区域 |


``` html
  插槽使用方式
  <r-form-item>
    <template v-slot:title>slot title</template>
  </r-form-item>
```

### Methods

| 方法名            | 说明                   | 参数 | 返回值                                        |
|-------------------|----------------------|------|-----------------------------------------------|
| validate          | 验证表单，支持传入 name 来验证单个表单项，不传入 name 时，会验证所有表单项 | name | Promise |
| reset             | 重置表单项             | -    | -                                             |
| getValue          | 获取所有表单项当前的值 | -    | `[{name: 'age', value: '', rawValue: ''}]` value和rawValue的区别是value值清空了所有空格 |
| getJsonValue      | 获取所有表单项当前的值 | -    | `{name: '', age: ''} `                          |
| getSerializeValue | 获取所有表单项当前的值 | -    | `name=xx&age=18`                                |
| scrollToField | 不传参数时默认滚动到表单第一个错误项。 传name参数时滚动到指定表单项。 | (name: string, options?: boolean \| ScrollIntoViewOptions)   | -                         |


## 主题定制

### 样式变量

| 名称                                    | 默认值  |
|-----------------------------------------|---------|
| --r-form-item-title-width               | 90px    |
| --r-form-item-title-padding-right       | 10px    |
| --r-form-item-required-color            | #f5222d |
| --r-form-item-required-margin-right     | 2px     |
| --r-form-item-error-message-color       | #f5222d |
| --r-form-item-error-message-font-size   | 12px    |
| --r-form-item-error-message-line-height | 1.5     |