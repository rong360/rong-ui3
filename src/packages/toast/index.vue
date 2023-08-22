<template>
  <r-popup
    v-bind="toastPropss"
    v-model:show="isToastShow"
    :popup-transition-name="popupTransitionName || 'r-popup-fade'"
    :overlay-class="classes.overlay"
    :popup-class="classes.popup"
    :duration="overlayDuration"
    @click-overlay="clickOverlay"
    @click-popup="clickPopup"
    @opened="popupOpened"
    @closed="popupClosed"
  >
    <slot name="icon">
      <template v-if="icon">
        <component v-if="typeof icon === 'object'" :is="icon" />
        <r-icon v-else :name="icon" class="toast-icon" />
      </template>
    </slot>
    <div :class="classes.content" :style="contentStyle">
      <slot>
        <RenderText :text="message" />
      </slot>
    </div>
  </r-popup>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  render,
  type ExtractPropTypes,
  type VNode,
  type PropType,
  reactive,
  computed
} from 'vue';

// Components
import Popup, { popupProps } from '../popup/index.vue';
import Icon, { type IconType } from '../icon/index.vue';

// Utils
import {
  createNamespace,
  withInstall,
  makeStyleProp,
  makeBooleanProp,
  makeTextualProp,
  pick,
  RenderText,
  makeNumberProp,
  makeStringProp
} from '../utils';

// Composables
import { useEventListener, useCustomEvent } from '../composables';

// Types
import type { ToastType } from './types';

export {
  showToast,
  showSuccessToast,
  showFailToast,
  showLongToast,
  showLoadingToast,
  setToastDefaultOptions
} from './function-call';

const { name, bem } = createNamespace('toast');

export const toastProps = {
  ...popupProps,
  round: makeBooleanProp(true),
  message: makeTextualProp(),
  contentStyle: makeStyleProp(),
  overlayDuration: Number,
  duration: makeNumberProp(2000),
  icon: [String, Object] as PropType<IconType | VNode>,
  type: makeStringProp<ToastType>('default')
};

export type ToastProps = ExtractPropTypes<typeof toastProps>;

const Toast = defineComponent({
  name,
  props: toastProps,
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    RenderText
  },
  emits: ['clickOverlay', 'clickPopup', 'clickCloseIcon', 'update:show', 'cancel', 'confirm', 'opened', 'closed'],
  setup(props, { emit, attrs }) {
    const classes = reactive({
      popup: computed(() => [`${bem({ middle: !!props.icon, [props.type]: true })}`, props.popupClass]),
      overlay: computed(() => [`${bem()}-overlay`, props.overlayClass]),
      content: computed(() => bem('content'))
    });

    const toastPropss = computed(() =>
      pick(props, Object.keys(toastProps), true, ['show', 'duration', 'overlayDuration', 'transitionName'])
    );

    // 显示与隐藏
    const isToastShow = ref(false);
    watch(
      () => props.show,
      (newValue) => {
        isToastShow.value = newValue;

        if (newValue === true && props.duration > 0) {
          setTimeout(() => (isToastShow.value = false), props.duration);
        }
      },
      { immediate: true }
    );

    // 通过$toast方法创建的弹窗，hash变化时从根节点移除弹出
    const unmountToast = () => {
      if (attrs.toastId) {
        const toast = document.getElementById(attrs.toastId as string) as HTMLElement;
        render(null, toast);
        document.body.removeChild(toast);
      } else {
        render(null, document.body);
      }
    };
    if (attrs.from$toast) {
      useEventListener(window, 'hashchange', unmountToast);
      useEventListener(window, 'popstate', unmountToast);
      useCustomEvent(window, 'pushstate', unmountToast);
      useCustomEvent(window, 'replacestate', unmountToast);
    }

    const popupOpened = (e: MouseEvent) => emit('opened', e);
    const popupClosed = (e: MouseEvent) => {
      emit('update:show', false);
      emit('closed', e);
      if (attrs.from$toast) unmountToast();
    };

    const clickOverlay = (e: MouseEvent) => emit('clickOverlay', e);
    const clickPopup = (e: MouseEvent) => emit('clickPopup', e);

    return {
      classes,
      isToastShow,
      clickOverlay,
      clickPopup,
      popupOpened,
      popupClosed,
      toastPropss
    };
  }
});

export default withInstall(Toast);
</script>
