<template>
  <r-cell-group title="圆角弹窗" round>
    <r-cell title="圆角弹窗（居中）" is-link @click="showCenter = true" />
    <r-popup
      v-model:show="showCenter"
      :round="true"
      :popup-style="{ padding: '50px 50px' }"
      :close-on-click-overlay="true"
      >内容</r-popup
    >

    <r-cell title="圆角弹窗（底部）" is-link @click="showIconBottom = true" />
    <r-popup
      v-model:show="showIconBottom"
      position="bottom"
      :round="true"
      :popup-style="{ height: '30%' }"
      :close-on-click-overlay="true"
    ></r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showCenter = ref(false);
const showIconBottom = ref(false);
</script>
