<template>
  <h2>基础用法</h2>
  <r-cell title="单元格" value="内容" />
  <r-cell title="单元格" value="内容" title-desc="描述信息" />
  <r-cell title="点击测试" :border="false" @click="testClick" />
</template>

<script lang="ts" setup>
const testClick = () => alert('click');
</script>
