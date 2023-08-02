<template>
  <r-cell-group title="函数式调用" round>
    <r-cell title="基础弹窗" is-link @click="clickBase" />
    <r-cell title="阻止cancel自动关闭" is-link @click="clickCancelButtonAutoClose" />
    <r-cell title="无标题弹窗" is-link @click="clickNoTitle" />
    <r-cell title="提示弹窗" is-link @click="clickTips" />
    <r-cell title="设置遮罩" is-link @click="clickTransparent" />
    <r-cell title="支持富文本 html" is-link @click="clickHtml" />
    <r-cell title="异步关闭" is-link @click="clickAsyncClose" />
    <r-cell title="右上角关闭按钮" is-link @click="clickCloseButton" />
    <r-cell title="嵌套滚动" is-link @click="clickScrollArea" />
    <r-cell title="改变位置" is-link @click="clickPosition" />
    <r-cell title="自定义slot内容" is-link @click="clickCustomSlot" />
    <r-cell title="自定义弹窗" is-link @click="clickCustomDialog" />
  </r-cell-group>
</template>

<script lang="ts" setup>
import { createVNode, h } from 'vue';
import { showDialog, showCustomDialog } from '../../index';
import Protocol from './Protocol.vue';
import ProtocolText from './Protocol.vue?raw';

// 基础弹窗
const clickBase = () => {
  showDialog({
    title: '基础弹窗',
    message: createVNode('span', { style: { color: 'red' } }, '我可以是一个自定义组件 vNode/.vue'),
    onConfirm() {
      this.remove();
    }
  });
};

// 阻止cancel自动关闭
const clickCancelButtonAutoClose = () => {
  const dialog = showDialog({
    title: '阻止cancel自动关闭',
    message: 'cancelButtonAutoClose',
    closeOnClickCancelButton: false, // 可取消默认关闭, 在onCancel里手动关闭
    onCancel() {
      this.remove();
    },
    onConfirm() {
      dialog.remove();
    }
  });
};

// 无标题弹窗
const clickNoTitle = () => {
  showDialog({
    message: '无标题弹窗'
  });
};

// 提示弹窗
const clickTips = () => {
  showDialog({
    title: '温馨提示',
    message: '支持函数调用和组件调用两种方式。',
    showCancelButton: false,
    onConfirm() {
      this.remove();
    }
  });
};

// 设置遮罩
const clickTransparent = () => {
  showDialog({
    title: '设置遮罩',
    message: 'this is a transparent dialog',
    overlayStyle: { background: 'rgba(0,0,0,0)' },
    overlayClass: 'custom-overlay',
    closeOnClickOverlay: true,
    onClickOverlay() {
      alert('click overlay');
    }
  });
};

// 支持富文本 html
const clickHtml = () => {
  showDialog({
    title: '支持富文本 html',
    message: `<p style='color:red'>张小盒</p><img width="100" src='https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' />`
  });
};

// 异步关闭
const clickAsyncClose = () => {
  const dialog = showDialog({
    title: '异步关闭',
    message: `点击确认后，1秒后关闭`,
    onConfirm() {
      setTimeout(() => {
        dialog.remove();
      }, 1000);
    }
  });
};

// 右上角关闭按钮
const clickCloseButton = () => {
  showDialog({
    title: '右上角关闭按钮',
    showCloseIcon: true,
    closeIconPosition: 'top-right', // 默认 top-right
    closeIcon: 'close', // 默认 close
    message: '右上角增加 close button',
    onClickCloseIcon() {
      this.remove();
    }
  });
};

// 嵌套滚动。 弹窗默认锁屏，滚动元素需要添加 class="scroll-area" 样式。
const clickScrollArea = () => {
  showDialog({
    title: '嵌套滚动',
    message: `<div style="height: 100px; overflow-y: scroll" class="scroll-area">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>`
  });
};

// 改变位置
const clickPosition = () => {
  showDialog({
    title: '改变位置',
    message: '通过position改变弹窗显示位置',
    position: 'bottom'
  });
};

// 自定义slot内容
const clickCustomSlot = () => {
  showDialog(
    {
      closeOnClickOverlay: true,
      showCloseIcon: true
    },
    {
      default: () => '自定义内容',
      header: () => createVNode('span', { style: { fontSize: '22px' } }, '自定义标题'),
      footer: () => '自定义底部按钮区域',
      'close-icon': () => createVNode('span', { style: { color: 'red' } }, 'close')
    }
  );
};

// 自定义弹窗
const clickCustomDialog = () => {
  const dialog = showCustomDialog({
    message: h(Protocol, { onCloseProtocolDialog: () => dialog.remove() })
  });
};

// Protocol.vue
/*
<template>
  <div class="protocol">
    <div>this is protocol content</div>
    <button @click="closeProtocolDialog"> 关闭 </button>
  </div>
</template>

const emit = defineEmits(['closeProtocolDialog']);
const closeProtocolDialog = () => {
  emit('closeProtocolDialog');
};
 */
</script>
