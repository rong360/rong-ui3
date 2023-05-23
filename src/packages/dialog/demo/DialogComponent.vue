<template>
  <r-cell-group title="组件式使用" round>
    <r-cell title="基础弹框" is-link @click="clickBase" />
    <r-dialog
      title="组件调用"
      message="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
      v-model:show="showBase"
    >
    </r-dialog>

    <r-cell title="teleport 使用" is-link @click="clickTeleport"></r-cell>
    <r-dialog
      title="teleport to body"
      message="打开开发者工具看一下 Elements Tab"
      teleport="body"
      v-model:show="showTeleport"
    >
      <template #header>
        <div>this is header</div>
      </template>
    </r-dialog>
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
