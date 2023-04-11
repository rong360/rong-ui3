<template>
  <r-popup
    :animate="animate"
    :teleport="teleport"
    :position="position"
    :close-on-click-overlay="closeOnClickOverlay"
    :popup-class="[`${bem()}`, popupClass]"
    :popup-style="popupStyle"
    :overlay-class="[`${bem()}-overlay`, overlayClass]"
    :overlay-style="overlayStyle"
    :round="round"
    @click-overlay="clickOverlay"
    @closed="popupClosed"
    v-model:show="isDialogShow"
  >
    <div :class="bem('header')" :style="headerStyle" v-if="$slots.header || title">
      <slot name="header">{{ title }}</slot>
    </div>

    <div :class="bem('content')" :style="contentStyle">
      <slot>
        <div v-if="typeof message === 'string'" v-html="message"></div>
        <component v-else :is="message" />
      </slot>
    </div>

    <div :class="bem('footer')" :style="footerStyle" v-if="showConfirmBtn || showCancelBtn">
      <r-icon />dsfdf<r-icon name="close" />dfsf<r-icon name="closeCircle"></r-icon><r-icon name="loading"></r-icon>
    </div>
  </r-popup>
</template>

<script lang="ts">
import { defineComponent, ref, watch, render, type ExtractPropTypes } from 'vue';
import Popup, { popupProps } from '../popup';
import Icon from '../icon';
import { createNamespace, truthProp, makeStringProp, makeStyleProp } from '../utils';
import { useEventListener, useCustomEvent } from '../composables';

const { name, bem } = createNamespace('dialog');

export const dialogProps = {
  ...popupProps,
  title: makeStringProp(''),
  headerStyle: makeStyleProp(),
  message: [String, Object, Function],
  contentStyle: makeStyleProp(),
  footerStyle: makeStyleProp(),
  showConfirmBtn: truthProp,
  showCancelBtn: truthProp
  // onClickOverlay: Function,
  // 自定义类名
  // className: [String, Array, Object]
  // onClickOverlay: Function,
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

export default defineComponent({
  inheritAttrs: false,
  name,
  props: dialogProps,
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon
  },
  emits: ['clickOverlay', 'update:show'],
  setup(props, { emit, attrs }) {
    // 显示与隐藏
    const isDialogShow = ref(props.show);
    watch(
      () => props.show,
      (newValue) => (isDialogShow.value = newValue)
    );

    // 通过$dialog方法创建的弹窗，hash变化时从根节点移除弹出
    const unmountDialog = () => render(null, document.body);
    if (attrs.from$dialog) {
      useEventListener(window, 'hashchange', unmountDialog);
      useEventListener(window, 'popstate', unmountDialog);
      useCustomEvent(window, 'pushstate', unmountDialog);
      useCustomEvent(window, 'replacestate', unmountDialog);
    }

    const popupClosed = () => {
      if (attrs.from$dialog) unmountDialog();
      emit('update:show', false);
    };

    const clickOverlay = (e: TouchEvent) => {
      emit('clickOverlay', e);
    };

    return {
      bem,
      isDialogShow,
      clickOverlay,
      popupClosed
    };
  }
});
</script>
