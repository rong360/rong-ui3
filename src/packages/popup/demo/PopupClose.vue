<template>
  <r-cell-group title="关闭图标" round>
    <r-cell title="关闭图标" is-link @click="showIcon = true" />
    <r-popup
      v-model:show="showIcon"
      position="bottom"
      :show-close-icon="true"
      :round="false"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="图标位置" is-link @click="showIconPosition = true" />
    <r-popup
      v-model:show="showIconPosition"
      position="bottom"
      close-icon-position="top-left"
      :show-close-icon="true"
      :round="false"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="自定义图标" is-link @click="showIconCustom = true" />
    <r-popup
      v-model:show="showIconCustom"
      position="bottom"
      close-icon="loading"
      :show-close-icon="true"
      :round="false"
      :popup-style="{ height: '30%' }"
    >
      <!-- <template #close-icon> close </template> -->
    </r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showIcon = ref(false);
const showIconPosition = ref(false);
const showIconCustom = ref(false);
</script>
