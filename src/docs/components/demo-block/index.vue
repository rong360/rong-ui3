<template>
  <div class="demo-block" :class="{ scroll: isScroll, expand: isExpand }" ref="demoBlock">
    <div class="demo-block-expand" v-if="isScroll">
      <ExpandIcon v-if="isExpand" @click="toggleEpandIcon"></ExpandIcon>
      <UnExpandIcon v-else @click="toggleEpandIcon"></UnExpandIcon>
    </div>
    <slot></slot>
    <div class="demo-block-tools">
      <a :href="jumpHref" class="demo-block-tools__item" target="_blank">
        <img
          class="demo-block-tools__icon"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/159023/13/28499/5084/620f4c48E244573d5/28bfddee9718336e.png"
        />
        <div class="demo-block-tools__tips">codesandbox</div>
      </a>
      <a href="" class="demo-block-tools__item" target="_blank">
        <img
          class="demo-block-tools__icon"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/159023/13/28499/5084/620f4c48E244573d5/28bfddee9718336e.png"
        />
        <div class="demo-block-tools__tips">在线调试</div>
      </a>
      <div href="" class="demo-block-tools__item" target="_blank">
        <img
          class="demo-block-tools__icon"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/159023/13/28499/5084/620f4c48E244573d5/28bfddee9718336e.png"
          @click="copyCode"
        />
        <div class="demo-block-tools__tips">复制代码</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import copy from 'copy-to-clipboard';

import ExpandIcon from '../icons/Expand.vue';
import UnExpandIcon from '../icons/UnExpand.vue';

import { getParameters } from 'codesandbox/lib/api/define';
import { sandboxPackage, sandboxTsConfig, sandboxVite, sandboxHtml, sandboxMainJs } from './sandboxConfig';

import { decompressText } from '../../utils';

// Expand
const isScroll = ref(false);
const isExpand = ref(false);
const demoBlock = ref<HTMLElement | null>(null);

const jumpHref = ref('');
onMounted(() => {
  const codeBlock = demoBlock.value?.querySelector('code') as HTMLElement;
  isScroll.value = codeBlock.scrollHeight > 400;

  const parameters = getParameters({
    files: {
      'index.js': {
        content: "console.log('hello')",
        isBinary: false
      },
      'package.json': {
        content: sandboxPackage,
        isBinary: false
      },
      'tsconfig.json': {
        content: sandboxTsConfig,
        isBinary: false
      },
      'tsconfig.node.json': {
        content: sandboxTsConfig,
        isBinary: false
      },
      'vite.config.ts': {
        content: sandboxVite,
        isBinary: false
      },
      'index.html': {
        content: sandboxHtml,
        isBinary: false
      },
      'src/main.ts': {
        content: sandboxMainJs,
        isBinary: false
      },
      'src/App.vue': {
        content: decompressText(demoBlock.value?.dataset.value || ''),
        isBinary: false
      }
    }
  });
  const query = 'file=/src/App.vue';
  jumpHref.value = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=${query}&resolutionHeight=736`;
});
const toggleEpandIcon = () => {
  isExpand.value = !isExpand.value;
};

const copyCode = () => {
  const sourceCode = decompressText(demoBlock.value?.dataset.value || '');
  copy(sourceCode);
  console.log('复制成功');
};
</script>

<style lang="scss">
.demo-block {
  position: relative;
  &-expand {
    position: absolute;
    right: 28px;
    top: 8px;
    z-index: 2;
    svg {
      font-size: 18px;
    }
  }
  &.scroll {
    code {
      max-height: 400px;
      overflow-y: scroll;
    }
  }
  &.expand {
    code {
      max-height: none !important;
    }
  }
  &-tools {
    display: flex;
    border: 1px solid #eee;
    border-top: none;
    height: 40px;
    &__item {
      flex: 1;
      border-top: 1px dashed #eee;
      border-right: 1px solid #eee;
      border-left: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin: 0 !important;
      &:last-child {
        border-right: none;
      }
    }
    &__icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    &__tips {
      position: absolute;
      top: 0px;
      left: 53%;
      padding: 2px 6px;
      background-color: #333;
      color: #fff;
      font-size: 12px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      display: none;
    }
    &__item:hover {
      background-color: #eee;
    }
    &__item:hover &__tips {
      display: none;
    }
  }
}
</style>
