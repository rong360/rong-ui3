<template>
  <h2>固定到顶部</h2>
  <r-nav-bar title="标题" :show-arrow-left="true" left-text="返回" :fixed="fixed" placeholder style="z-index: 100;" class-name="custom"/>
  <r-button @click="fixed = !fixed" type="primary">{{ fixed ? '取消固定到顶部' : '固定到顶部' }}</r-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fixed = ref(false);
</script>
