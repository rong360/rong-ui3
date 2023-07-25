<template>
  <r-cell-group title="组件式使用" round>
    <r-cell title="基础弹框" is-link @click="clickBase" />
    <r-toast title="组件调用" message="文字提示" v-model:show="showBase"> </r-toast>

    <r-cell title="teleport 使用" is-link @click="clickTeleport"></r-cell>
    <r-toast teleport="body" long v-model:show="showTeleport">
      <template #icon>
        <img width="60" src="https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif" />
      </template>
      打开开发者工具看一下 Elements Tab
    </r-toast>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// 基础弹框
const showBase = ref(false);
const clickBase = () => {
  showBase.value = true;
};

// teleport 使用，挂载到指定节点
const showTeleport = ref(false);
const clickTeleport = () => {
  showTeleport.value = true;
};
</script>
