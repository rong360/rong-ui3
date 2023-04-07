<template>
  <div>
    this is dialog demo -- {{ isDialogVisible }}
    <button @click="handleClick">click</button>
    <r-dialog v-model:show="isDialogVisible" :message="Message" position="center">
      <template #header> this is header </template>
    </r-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, h, type ComponentOptions } from 'vue';
// import { useRouter } from 'vue-router';
// import { Dialog as Dialog2 } from 'rong-ui3';
import Message from './Message.vue';
// import { Dialog } from '../../index';
// const { $dialog } = Dialog;

const app = getCurrentInstance();
const isDialogVisible = ref(true);
const message = 'hello';
const message2 = h('span', 'hello2');
const message3: ComponentOptions = {
  setup() {
    const count = ref(1);
    let interval = setInterval(function () {
      count.value += 1;
      if (count.value > 10) clearInterval(interval);
    }, 1000);
    // 返回渲染函数
    return () => h('div', 'hello3--' + count.value);
  }
};
const Message2 = function () {
  return h('span', '函数式组件');
};

// const router = useRouter();
onMounted(() => {});

const handleClick = () => {
  // console.log(Dialog);
  // const dialog = app?.appContext.config.globalProperties.$dialog({});
  // $dialog({
  //   message: 'SDDF'
  // });

  setTimeout(() => {
    // dialog.remove();
  }, 3000);
};
</script>
