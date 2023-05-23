<template>
  <r-cell-group title="事件监听" round>
    <r-cell title="监听点击事件" is-link @click="showClickEvent = true" />
    <r-popup
      v-model:show="showClickEvent"
      position="bottom"
      :popup-style="{ height: '30%' }"
      :close-on-click-overlay="true"
      :show-close-icon="true"
      @click-popup="clickPopup"
      @click-overlay="clickOverlay"
      @click-close-icon="clickCloseIcon"
    ></r-popup>

    <r-cell title="监听显示事件" is-link @click="showDisplayEvent = true" />
    <r-popup
      v-model:show="showDisplayEvent"
      position="bottom"
      :popup-style="{ height: '30%' }"
      :close-on-click-overlay="true"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
    ></r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 监听点击事件
const showClickEvent = ref(false);
const clickPopup = () => console.log('click popup');
const clickOverlay = () => console.log('click overlay');
const clickCloseIcon = () => console.log('click close icon');

// 监听显示事件
const showDisplayEvent = ref(false);
const open = () => console.log('open');
const opened = () => console.log('opened');
const close = () => console.log('close');
const closed = () => console.log('closed');
</script>
