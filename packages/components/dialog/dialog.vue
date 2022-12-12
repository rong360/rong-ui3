<template>
  <Popup
    :animate="animate"
    :round="round"
    :teleport="teleport"
    :position="position"
    :close-on-click-overlay="closeOnClickOverlay"
    :popup-class="[`${bem()}`, className]"
    @click-overlay="clickOverlay"
    @closed="PopupClosed"
    v-model:show="showDialog"
  >
    收到分身乏术地方
  </Popup>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue';
import Popup, { popupProps } from '../popup';
import { createNamespace } from '../../utils';
import { useCurrentInstance } from '../../composables';

const { name, bem } = createNamespace('dialog');

export const dialogProps = {
  ...popupProps,
  message: [String, Object, Function],
  // onClickOverlay: Function,
  // 自定义类名
  className: [String, Array, Object],
  // onClickOverlay: Function,
  // hash变化时移除dialog
  removeDialogOnHashChange: {
    type: Boolean,
    default: true
  }
};

export default defineComponent({
  name,
  props: dialogProps,
  components: {
    Popup
  },
  emits: ['clickOverlay', 'update:show'],
  setup(props, { emit }) {
    const { globalProperties, appContext } = useCurrentInstance();
    // 显示与隐藏
    const showDialog = ref(props.show);
    watch(
      () => props.show,
      (newValue) => {
        showDialog.value = newValue;
      }
    );

    // hash变化时移除dialog
    const unmountDialog = () => appContext.app.unmount();
    onMounted(() => {
      if (props.removeDialogOnHashChange && globalProperties.from$dialog) {
        window.addEventListener('hashchange', unmountDialog);
        window.addEventListener('pushstate', unmountDialog);
        window.addEventListener('replacestate', unmountDialog);
        window.addEventListener('popstate', unmountDialog);
      }
    });
    onUnmounted(() => {
      if (props.removeDialogOnHashChange && globalProperties.from$dialog) {
        window.removeEventListener('hashchange', unmountDialog);
        window.removeEventListener('pushstate', unmountDialog);
        window.removeEventListener('replacestate', unmountDialog);
        window.removeEventListener('popstate', unmountDialog);
      }
    });

    const clickOverlay = (e: MouseEvent) => {
      emit('clickOverlay', e);
    };

    const PopupClosed = () => {
      if (globalProperties.from$dialog) appContext.app.unmount();
      emit('update:show', false);
    };

    return {
      bem,
      showDialog,
      clickOverlay,
      PopupClosed
    };
  }
});
</script>

<style lang="scss">
@keyframes moving {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(v-bind('distance'));
  }
}
@-webkit-keyframes moving {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    transform: translateX(v-bind('distance'));
  }
}
</style>
