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
<script setup>
  import Base from '../demo/Base.vue?raw'
</script>
<HljsBlock :code="Base"></HljsBlock>