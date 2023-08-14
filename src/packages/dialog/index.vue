<template>
  <r-popup
    :css-transition="cssTransition"
    :teleport="teleport"
    :position="position"
    :close-on-click-overlay="closeOnClickOverlay"
    :popup-class="classes.popup"
    :popup-style="popupStyle"
    :overlay-class="classes.overlay"
    :overlay-style="overlayStyle"
    :round="round"
    :show-close-icon="showCloseIcon"
    :close-icon-position="closeIconPosition"
    :close-icon="closeIcon"
    :close-icon-class="closeIconClass"
    :close-on-click-close-icon="closeOnClickCloseIcon"
    @click-overlay="clickOverlay"
    @click-popup="clickPopup"
    @click-close-icon="clickCloseIcon"
    @opened="popupOpened"
    @closed="popupClosed"
    v-model:show="isDialogShow"
  >
    <div :class="classes.header" :style="headerStyle" v-if="$slots.header || title">
      <slot name="header">{{ title }}</slot>
    </div>
    <template #close-icon><slot name="close-icon"></slot></template>
    <div :class="classes.content" :style="contentStyle">
      <slot>
        <div v-if="typeof message === 'string'" v-html="message"></div>
        <RenderText v-else :text="message" />
      </slot>
    </div>
    <slot name="footer">
      <div :class="classes.footer" :style="footerStyle" v-if="showConfirmButton || showCancelButton || $slots.footer">
        <r-button
          :class="classes.cancel"
          :style="cancelButtonStyle"
          :text="cancelButtonText"
          shape="square"
          v-if="showCancelButton"
          @click="clickCancel"
        />
        <r-button
          :class="classes.confirm"
          :style="confirmButtonStyle"
          :text="confirmButtonText"
          shape="square"
          v-if="showConfirmButton"
          @click="clickConfirm"
        />
      </div>
    </slot>
  </r-popup>
</template>

<script lang="ts">
import { defineComponent, ref, watch, render, type ExtractPropTypes, reactive, computed } from 'vue';
import Popup, { popupProps } from '../popup/index.vue';
import Icon from '../icon/index.vue';
import Button from '../button/index.vue';
import {
  createNamespace,
  makeStringProp,
  makeStyleProp,
  makeBooleanProp,
  makeTextualProp,
  withInstall,
  RenderText
} from '../utils';
import { useEventListener, useCustomEvent } from '../composables';
import { showDialog } from './function-call';

export { showDialog, showCustomDialog } from './function-call';

const { name, bem } = createNamespace('dialog');

export const dialogProps = {
  ...popupProps,
  round: makeBooleanProp(true),
  title: makeStringProp(),
  headerStyle: makeStyleProp(),
  message: makeTextualProp(),
  contentStyle: makeStyleProp(),
  footerStyle: makeStyleProp(),
  showCancelButton: makeBooleanProp(true),
  cancelButtonText: makeTextualProp('取消'),
  cancelButtonStyle: makeStyleProp(),
  closeOnClickCancelButton: makeBooleanProp(true),
  showConfirmButton: makeBooleanProp(true),
  confirmButtonText: makeTextualProp('确定'),
  confirmButtonStyle: makeStyleProp()
};

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

const Dialog = defineComponent({
  inheritAttrs: false,
  name,
  props: dialogProps,
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Button.name]: Button,
    RenderText
  },
  emits: ['clickOverlay', 'clickPopup', 'clickCloseIcon', 'update:show', 'cancel', 'confirm', 'opened', 'closed'],
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
    const unmountDialog = () => {
      if (attrs.dialogId) {
        const dialog = document.getElementById(attrs.dialogId as string) as HTMLElement;
        render(null, dialog);
        document.body.removeChild(dialog);
      } else {
        render(null, document.body);
      }
    };
    if (attrs.from$dialog) {
      useEventListener(window, 'hashchange', unmountDialog);
      useEventListener(window, 'popstate', unmountDialog);
      useCustomEvent(window, 'pushstate', unmountDialog);
      useCustomEvent(window, 'replacestate', unmountDialog);
    }

    const popupOpened = (e: MouseEvent) => emit('opened', e);
    const popupClosed = (e: MouseEvent) => {
      emit('update:show', false);
      emit('closed', e);
      if (attrs.from$dialog) unmountDialog();
    };

    const clickOverlay = (e: MouseEvent) => emit('clickOverlay', e);
    const clickPopup = (e: MouseEvent) => emit('clickPopup', e);
    const clickCloseIcon = (e: MouseEvent) => emit('clickCloseIcon', e);
    const clickConfirm = (e: MouseEvent) => emit('confirm', e);
    const clickCancel = (e: MouseEvent) => {
      emit('cancel', e);
      if (props.closeOnClickCancelButton) isDialogShow.value = false;
    };

    return {
      classes,
      isDialogShow,
      clickOverlay,
      clickPopup,
      clickCloseIcon,
      clickConfirm,
      clickCancel,
      popupOpened,
      popupClosed
    };
  }
});

export default withInstall(Dialog, { $dialog: showDialog });
</script>
