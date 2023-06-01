# Navbar 头部导航

### 介绍 

为页面提供导航功能，常用于页面顶部。

### 安装

```javascript
import { createApp } from 'vue';
import { NavBar } from '@rong-ui3';

const app = createApp();
app.use(NavBar);
```

### 基础用法
通过 `title` 属性设置导航栏标题。
<script setup>
  import BaseUsage from '../demo/BaseUsage.vue?raw'
</script>
<HljsBlock :code="BaseUsage"></HljsBlock>


### 返回上级
在导航栏实现返回上级功能。
<script setup>
  import BackTo from '../demo/BackTo.vue?raw'
</script>
<HljsBlock :code="BackTo"></HljsBlock>



### 右侧按钮
在导航栏右侧添加可点击的按钮。
<script setup>
  import RightButton from '../demo/RightButton.vue?raw'
</script>
<HljsBlock :code="RightButton"></HljsBlock>



### 使用插槽
可以通过插槽自定义导航栏两侧的内容。
<script setup>
  import UseSlot from '../demo/UseSlot.vue?raw'
</script>
<HljsBlock :code="UseSlot"></HljsBlock>



### 固定到顶部
通过 `fixed` 属性固定到顶部。同时可以用 `placeholder` 属性设置是否在标签位置生成一个等高的占位元素
<script setup>
  import FixedTop from '../demo/FixedTop.vue?raw'
</script>
<HljsBlock :code="FixedTop"></HljsBlock>


## API
### Props

| 参数                | 说明                                              | 类型         | 默认值  |
|---------------------|-------------------------------------------------|--------------|---------|
| title               | 标题名称                                          | string｜VNode | -       |
| left-text           | 左侧文案                                          | string｜VNode | -       |
| left-style          | 左侧样式                                          | string       | -       |
| show-left-arrow     | 是否展示左侧箭头                                  | boolean      | `false` |
| right-text          | 右侧文案                                          | string｜VNode | -       |
| right-style         | 右侧样式                                          | string       | -       |
| border              | 是否显示下边框                                    | boolean      | `false` |
| fixed               | 是否固定到顶部                                    | boolean      | `false` |
| placeholder         | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | boolean      | `false` |
| safe-area-inset-top | 是否开启顶部安全区适配                            | boolean      | `false` |
| className           | 导航类名                                          | string       | -       |


### Slots
| 名称    | 说明               |
|---------|------------------|
| left    | 自定义左侧区域内容 |
| right   | 自定义右侧区域内容 |
| bottom  | 自定义底部区域内容 |
| default | 自定义标题         |

### Events
| 事件名      | 说明               | 回调参数         |
|-------------|------------------|------------------|
| click-right | 点击左侧按钮时触发 | event:MouseEvent |
| click-right | 点击右侧按钮时触发 | event:MouseEvent |

### 样式变量

| 名称                           | 默认值  |
|--------------------------------|---------|
| --r-nav-bar-z-index            | 1       |
| --r-nav-bar-background         | #fff    |
| --r-nav-bar-border-color       | #ebedf0 |
| --r-nav-bar-height             | 44px    |
| --r-nav-bar-title-color        | #323233 |
| --r-nav-bar-title-font-size    | 16px    |
| --r-nav-bar-title-font-weight  | 0       |
| --r-nav-bar-left-padding       | 0 16px  |
| --r-nav-bar-left-font-size     | 14px    |
| --r-nav-bar-left-color         | #1989fa |
| --r-nav-bar-arrow-margin-right | 4px     |
| --r-nav-bar-right-padding      | 0 16px  |
| --r-nav-bar-right-font-size    | 14px    |
| --r-nav-bar-right-color        | #1989fa |