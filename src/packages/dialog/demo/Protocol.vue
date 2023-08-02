<template>
  <div class="protocol">
    <div>this is protocol content</div>
    <button @click="closeProtocolDialog"> 关闭 </button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closeProtocolDialog']);
const closeProtocolDialog = () => {
  emit('closeProtocolDialog');
};
</script>

<style scoped>
.protocol {
  background-color: #fff;
}
</style>
