<template>
  <demo-item title="点击遮罩不关闭">
    <r-button type="primary" @click="show = true">点击遮罩不关闭</r-button>
    <r-overlay v-model:show="show" :close-on-click-overlay="false">
      <div class="wrapper">
        <div class="content" @click.stop="show = false">close</div>
      </div>
    </r-overlay>
  </demo-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>
