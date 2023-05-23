<template>
  <r-cell-group title="弹出位置" round>
    <r-cell title="顶部弹出" is-link @click="clickTop" />
    <r-popup
      v-model:show="showTop"
      position="top"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="底部弹出" is-link @click="clickBottom" />
    <r-popup
      v-model:show="showBottom"
      position="bottom"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="左侧弹出" is-link @click="clickLeft" />
    <r-popup
      v-model:show="showLeft"
      position="left"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ width: '30%', height: '100%' }"
    ></r-popup>

    <r-cell title="右侧弹出" is-link @click="clickRight" />
    <r-popup
      v-model:show="showRight"
      position="right"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ width: '30%', height: '100%' }"
    ></r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 顶部弹出
const showTop = ref(false);
const clickTop = () => {
  showTop.value = true;
};

// 底部弹出
const showBottom = ref(false);
const clickBottom = () => {
  showBottom.value = true;
};

// 左侧弹出
const showLeft = ref(false);
const clickLeft = () => {
  showLeft.value = true;
};

// 右侧弹出
const showRight = ref(false);
const clickRight = () => {
  showRight.value = true;
};
</script>
