# Overlay 遮罩层

### 介绍
创建一个遮罩层，通常用于阻止用户进行其它操作


### 安装
```javascript
import { createApp } from 'vue';
import { OverLay } from 'rong-ui3';

const app = createApp();
app.use(OverLay);
```


### 基础用法
使用 show 控制遮罩层的显示/隐藏
<script setup>
  import OverlayBasic from '../demo/OverlayBasic.vue?raw'
</script>
<HljsBlock :code="OverlayBasic"></HljsBlock>