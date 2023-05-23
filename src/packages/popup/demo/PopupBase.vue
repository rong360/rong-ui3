<template>
  <h2>基础用法</h2>
  <r-cell title="展示弹出层" is-link @click="clickBase" :border="false" />
  <r-popup :popup-style="{ padding: '30px 50px' }" :close-on-click-overlay="true" v-model:show="show">内容</r-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
const clickBase = () => {
  show.value = true;
};
</script>
