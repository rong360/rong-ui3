# FlexFixed 吸顶或吸底(flex布局)

### 介绍

按钮用于触发一个操作，如提交表单。

### 安装
```javascript
import { createApp } from 'vue';
import { FlexFixed } from 'rong-ui3';

const app = createApp();
app.use(FlexFixed);
```

### 代码演示
<script setup>
  import Index from '../demo/index.vue?raw'
</script>
<HljsBlock :code="Index"></HljsBlock>


## API
### props
| 参数                     | 说明                                         | 类型    | 默认值  |
|--------------------------|--------------------------------------------|---------|---------|
| hideFooterOnKeyboardShow | 键盘弹起时隐藏footer                         | boolean | `false` |
| useFixed                 | 滚动区域包含header, 常用于给滚动区域加背景图 | boolean | `false` |

### Slots
| 名称      | 说明    |
|---------- |-------- |
| default  | 滚动区域   |
| header  | 头部   |
| footer  | 底部   |


### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-scroll  | 滚动事件    | ({scrollTop, maxScrollTop, direction}）|
| on-scroll-debounce  | 滚动事件    | ({scrollTop, maxScrollTop, direction}）|


