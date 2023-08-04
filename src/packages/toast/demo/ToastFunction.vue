<template>
  <r-cell-group title="函数式调用" round>
    <r-cell title="文字提示" is-link @click="clickBase" />
    <r-cell title="成功提示" is-link @click="clickSuccess" />
    <r-cell title="失败提示" is-link @click="clickFail" />
    <r-cell title="长文案提示" is-link @click="clickLong" />
    <r-cell title="自定义内容、图标" is-link @click="clickCustomContent" />
    <r-cell title="手动关闭 Toast" is-link @click="clickToastAlwaysShow" />
    <r-cell title="Loading 提示" is-link @click="clickLoadingAlwaysShow" />
    <r-cell title="动态更新提示" is-link @click="clickLoading" />
    <r-cell title="设置遮罩" is-link @click="clickMask" />
  </r-cell-group>
</template>

<script lang="ts" setup>
import { createVNode, h } from 'vue';

// 文字提示
const clickBase = () => showToast('提示内容');

// 成功提示
const clickSuccess = () => showSuccessToast('成功文案');

// 失败提示
const clickFail = () => showFailToast('失败文案');

// 长文案提示
const clickLong = () => showLongToast('This message will contain a incomprehensibilities long word.');

// 自定义内容、图标
const clickCustomContent = () =>
  showToast({
    message: createVNode('span', { style: { color: 'pink' } }, '我可以是一个自定义组件 vNode/.vue'),
    icon: h('img', { width: '60', src: 'https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' })
    // slots: {
    //   icon: () =>
    //     createVNode('img', { width: '60', src: 'https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' })
    // }
  });

// 手动关闭 Toast
const clickToastAlwaysShow = () => {
  const toast = showToast({ message: '手动关闭 Toast', duration: 0 });

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

// Loading 提示
const clickLoadingAlwaysShow = () => {
  const loading = showLoadingToast();

  setTimeout(() => {
    loading.remove();
  }, 3000);
};

// 动态更新提示
const clickLoading = () => {
  const loading = showLoadingToast('倒计时 3 秒');

  let second = 3;
  const timer = setInterval(() => {
    second--;
    if (second) {
      loading.setMessage(`倒计时 ${second} 秒`);
    } else {
      clearInterval(timer);
      loading.remove();
    }
  }, 1000);
};

// 设置遮罩
const clickMask = () => {
  showToast({
    message: 'click overlay',
    duration: 0,
    overlayStyle: { background: 'rgba(10,20,30,0.5)' },
    overlayClass: 'custom-overlay',
    closeOnClickOverlay: true,
    onClickOverlay() {
      alert('click overlay');
    }
  });
};
</script>
