<template>
  <h2>右侧按钮</h2>
  <r-nav-bar
    title="标题"
    :show-arrow-left="true"
    left-text="返回"
    right-text="按钮"
    @click-left="clickLeft"
    @click-right="clickRight"
  />
</template>

<script lang="ts" setup>
const clickLeft = () => alert('back');
const clickRight = () => alert('按钮');
</script>
