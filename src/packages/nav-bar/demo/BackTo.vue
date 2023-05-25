<template>
  <h2>返回上级</h2>
  <r-nav-bar title="标题" :show-arrow-left="true" left-text="返回" @click-left="clickLeft" />
  <br />
  <r-nav-bar title="标题" :show-arrow-left="true" :left-text="leftText" />
</template>

<script lang="ts" setup>
import { createVNode } from 'vue';

const clickLeft = () => alert('back');

// left-text、right-text、title类型可以是string 或者 vNode
const leftText = createVNode('span', { style: { color: 'red' } }, '返回');
</script>
