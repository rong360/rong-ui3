<template>
  <h2>固定到顶部</h2>
  <r-nav-bar
    title="标题"
    :show-arrow-left="true"
    left-text="返回"
    :fixed="fixed"
    safe-area-inset-top
    placeholder
    style="z-index: 100"
    class-name="custom"
  >
    <template #bottom>
      <div class="tips" style="background-color: lightyellow; font-size: 12px; padding: 5px 15px">
        this is tips info.
      </div>
    </template>
  </r-nav-bar>
  <r-button @click="fixed = !fixed" type="primary">{{ fixed ? '取消固定到顶部' : '固定到顶部' }}</r-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fixed = ref(false);
</script>
