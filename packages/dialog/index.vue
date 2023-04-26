<template>
  <r-popup
    :animate="animate"
    :teleport="teleport"
    :position="position"
    :close-on-click-overlay="closeOnClickOverlay"
    :popup-class="classes.popup"
    :popup-style="popupStyle"
    :overlay-class="classes.overlay"
    :overlay-style="overlayStyle"
    :round="round"
    @click-overlay="clickOverlay"
    @closed="popupClosed"
    v-model:show="isDialogShow"
  >
    <div :class="classes.header" :style="headerStyle" v-if="$slots.header || title">
      <slot name="header">{{ title }}</slot>
    </div>
    <r-icon name="close" :class="classes.close" @click="isDialogShow = false" v-if="showCloseButton" />
    <div :class="classes.content" :style="contentStyle">
      <slot>
        <div v-if="typeof message === 'string'" v-html="message"></div>
        <component v-else :is="message" />
      </slot>
    </div>
    <div :class="classes.footer" :style="footerStyle" v-if="showConfirmButton || showCancelButton">
      <r-button :class="classes.cancel" shape="square" v-if="showCancelButton">取消</r-button>
      <r-button :class="classes.confirm" shape="square" v-if="showConfirmButton">确认</r-button>
    </div>
  </r-popup>
</template>

<script lang="ts">
import { defineComponent, ref, watch, render, type ExtractPropTypes, reactive, computed } from 'vue';
import Popup, { popupProps } from '../popup/index.vue';
import Icon from '../icon/index.vue';
import Button from '../button/index.vue';
import { createNamespace, makeStringProp, makeStyleProp, makeBooleanProp, withInstall } from '../utils';
import { useEventListener, useCustomEvent } from '../composables';
import { $dialog, type $Dialog } from './function-call';

const { name, bem } = createNamespace('dialog');

export const dialogProps = {
  ...popupProps,
  title: makeStringProp(''),
  headerStyle: makeStyleProp(),
  showCloseButton: makeBooleanProp(),
  message: [String, Object, Function],
  contentStyle: makeStyleProp(),
  footerStyle: makeStyleProp(),
  showConfirmButton: makeBooleanProp(),
  showCancelButton: makeBooleanProp()
  // onClickOverlay: Function,
  // 自定义类名
  // className: [String, Array, Object]
  // onClickOverlay: Function,
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

const Dialog = defineComponent({
  inheritAttrs: false,
  name,
  props: dialogProps,
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  emits: ['clickOverlay', 'update:show'],
  setup(props, { emit, attrs, slots }) {
    const classes = reactive({
      close: computed(() => bem('close')),
      popup: computed(() => [`${bem()}`, props.popupClass]),
      overlay: computed(() => [`${bem()}-overlay`, props.overlayClass]),
      header: computed(() => bem('header')),
      content: computed(() => bem('content', { 'has-title': !!slots.header || !!props.title })),
      footer: computed(() => [bem('footer'), 'r-hairline--top']),
      cancel: computed(() => bem('cancel')),
      confirm: computed(() => [
        bem('confirm'),
        { 'r-hairline--left': props.showConfirmButton && props.showCancelButton }
      ])
    });

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
      classes,
      isDialogShow,
      clickOverlay,
      popupClosed
    };
  }
});

export default withInstall(Dialog, { $dialog });
</script>
