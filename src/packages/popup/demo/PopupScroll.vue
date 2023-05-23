<template>
  <h2>内容滚动</h2>
  <r-cell title="内容滚动" is-link @click="show = true" :border="false" />
  <r-popup :close-on-click-overlay="true" v-model:show="show">
    <div style="height: 100px; width: 100px; overflow-y: scroll" class="scroll-area">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  </r-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
</script>
