# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 安装

```javascript
import { createApp } from 'vue';
import { Cell, CellGroup } from 'rong-ui3';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

### 基础用法
`Cell` 可以单独使用。
<script setup>
  import CellBase from '../demo/CellBase.vue?raw'
  import CellGroup from '../demo/CellGroup.vue?raw'
</script>
<HljsBlock :code="CellBase"></HljsBlock>

也可以于 `CellGroup` 搭配使用，展示分组标题，转换为圆角卡片风格.
<HljsBlock :code="CellGroup"></HljsBlock>


### 单元格大小
通过 `size` 属性可以控制单元格的大小。
<script setup>
  import CellSize from '../demo/CellSize.vue?raw'
</script>
<HljsBlock :code="CellSize"></HljsBlock>


### 展示箭头
设置 `is-link` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。
<script setup>
  import CellArrow from '../demo/CellArrow.vue?raw'
</script>
<HljsBlock :code="CellArrow"></HljsBlock>


### 页面导航
可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。
<script setup>
  import CellNav from '../demo/CellNav.vue?raw'
</script>
<HljsBlock :code="CellNav"></HljsBlock>


### slot 插槽
通过 slot `left-icon` `right-icon` `title-desc` 可以插入左右Icon、标题内容、描述内容等
<script setup>
  import CellSlot from '../demo/CellSlot.vue?raw'
</script>
<HljsBlock :code="CellSlot"></HljsBlock>

### 垂直居中
通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。
<script setup>
  import CellCenter from '../demo/CellCenter.vue?raw'
</script>
<HljsBlock :code="CellCenter"></HljsBlock>


### CellGroup Props

| 字段  | 说明         | 类型    | 默认值 |
|-------|------------|---------|--------|
| title | 分组标题     | String  | -      |
| round | 是否圆角展示 | Boolean | false  |

### Cell Props

| 字段        | 说明                                          | 类型             | 默认值           |
|-----------|----------------------------------------------|-----------------|------------------|
| title     | 标题名称                                      | String \| VNode    | -                |
| title-desc| 标题描述                                      | String           | -                |
| title-align| 标题对齐 可选值为 `left` `center` `right`          | String           | -             |
| value     | 右侧内容                                      | String           | -                |
| value-align| 右侧内容对齐 可选值为 `left` `center` `right`          | String           | -             |
| border    | 是否显示下边框                                    | Boolean          | true            |
| center    | 是否使内容垂直居中                                | Boolean          | true            |
| size      | 单元格大小，可选值为 `large`                       | String           | -                |
| is-link   | 是否展示右侧箭头并开启点击反馈                    | Boolean          | false            |
| url       | 点击后跳转的链接地址                             | String           | -         |
| to        | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | String ｜ Object | -                |
| replace   | 是否在跳转时替换当前页面历史                        | Boolean          | false           |
| arrow-direction  | 单元格大小，可选值为 `up` `down` `left`     | String           | right            |



### Cell Slots

| 名称       | 说明                         |
|------------|----------------------------|
| title    | 自定义左侧标题               |
| title-desc | 自定义标题下方的描述信息     |
| value      | 自定义右侧内容               |
| left-icon  | 自定义左侧图标               |
| right-icon | 自定义右侧图标               |
| extra      | 自定义单元格最右侧的额外内容 |

### CellGroup Slots

| 名称    | 说明                  |
|---------|---------------------|
| title   | 自定义`title`标题区域 |
| value | 默认插槽              |


### Cell Events

| 事件名 | 说明             | 回调参数         |
|--------|----------------|------------------|
| click  | 点击单元格时触发 | event:MouseEvent |



### 样式变量
| 名称                             | 默认值             |
|----------------------------------|--------------------|
| --r-cell-vertical-padding        | 10px               |
| --r-cell-horizontal-padding      | 16px               |
| --r-cell-color                   | #666               |
| --r-cell-font-size               | 14px               |
| --r-cell-line-height             | 24px               |
| --r-cell-background              | #fff               |
| --r-cell-title-desc-font-size    | 12px               |
| --r-cell-title-desc-line-height  | 18px               |
| --r-cell-title-desc-color        | #666               |
| --r-cell-title-desc-margin-top   | 4px                |
| --r-cell-value-color             | #ccc               |
| --r-cell-border-color            | #ccc               |
| --r-cell-right-icon-margin-left  | 4px                |
| --r-cell-left-icon-margin-right  | 4px                |
| --r-cell-large-vertical-padding  | 12px               |
| --r-cell-large-title-font-size   | 16px               |
| --r-cell-active-background-color | rgba(0, 0, 0, 0.1) |