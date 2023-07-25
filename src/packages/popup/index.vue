<template>
  <Teleport :to="teleport" :disabled="teleport === undefined">
    <r-overlay
      :class="overlayClass"
      :style="overlayStyle"
      :close-on-click-overlay="closeOnClickOverlay"
      :css-transition="cssTransition"
      :duration="duration"
      :transition-name="overlayTransitionName"
      :z-index="zIndex"
      @click="clickOverlay"
      v-model:show="isPopupShow"
      v-if="overlay"
    ></r-overlay>
    <Transition
      :css="cssTransition"
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      appear
    >
      <div :class="classes.root" :style="style" v-preventscroll v-show="isPopupShow" @click="clickPopup">
        <slot></slot>
        <r-icon :name="closeIcon" :class="classes.closeIcon" v-if="showCloseIcon" @click="clickCloseIcon"
          ><slot name="close-icon"></slot
        ></r-icon>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { createNamespace, makeBooleanProp, makeStringProp, makeStyleProp, withInstall } from '../utils';
import { preventscroll } from '../directives';
import Overlay, { overlayProps } from '../overlay/index.vue';
import Icon, { type IconType } from '../icon/index.vue';

const { name, bem, prefixCls } = createNamespace('popup');

export const popupProps = {
  ...overlayProps,
  overlay: makeBooleanProp(true),
  overlayClass: [String, Array, Object],
  overlayStyle: makeStyleProp(),
  overlayTransitionName: String,
  popupStyle: makeStyleProp(),
  popupClass: [String, Array, Object],
  popupTransitionName: String,
  position: makeStringProp<PopupPosition>('center'),
  teleport: [String, Element],
  round: makeBooleanProp(false),
  closeIcon: makeStringProp<IconType>('close'),
  showCloseIcon: makeBooleanProp(false),
  closeIconPosition: makeStringProp<CloseIconPosition>('top-right'),
  closeIconClass: String,
  closeOnClickCloseIcon: makeBooleanProp(true)
};

export type PopupProps = ExtractPropTypes<typeof popupProps>;
export type PopupPosition = 'top' | 'right' | 'bottom' | 'left' | 'center';
export type CloseIconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const Popup = defineComponent({
  inheritAttrs: false,
  name,
  props: popupProps,
  emits: ['clickOverlay', 'clickPopup', 'update:show', 'opened', 'closed', 'open', 'close', 'clickCloseIcon'],
  directives: { preventscroll },
  components: {
    [Overlay.name]: Overlay,
    [Icon.name]: Icon
  },
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => [bem({ [props.position]: true, round: props.round }), props.popupClass]),
      closeIcon: computed(() => [bem('close-icon', { [props.closeIconPosition]: true }), props.closeIconClass])
    });

    // 显示与隐藏
    const isPopupShow = ref(props.show);
    watch(
      () => props.show,
      (newVal) => {
        isPopupShow.value = newVal;
      }
    );

    const beforeEnter = () => {
      emit('open');
    };
    const afterEnter = () => {
      emit('opened');
    };
    const beforeLeave = () => {
      emit('close');
    };
    const afterLeave = () => {
      emit('closed');
      emit('update:show', false);
    };
    const clickOverlay = (e: TouchEvent) => {
      emit('clickOverlay', e);
    };

    const style = computed(() => {
      return Object.assign(
        {
          [props.position === 'center' ? 'animationDuration' : 'transitionDuration']: `${props.duration}s`,
          zIndex: props.zIndex
        },
        props.popupStyle
      );
    });

    const transitionName = computed(() => {
      return props.popupTransitionName || `${prefixCls}-${props.position === 'center' ? 'bounce' : props.position}`;
    });

    const clickCloseIcon = (e: MouseEvent) => {
      if (props.closeOnClickCloseIcon) isPopupShow.value = false;
      emit('clickCloseIcon', e);
    };

    const clickPopup = (e: MouseEvent) => {
      emit('clickPopup', e);
    };

    return {
      classes,
      isPopupShow,
      beforeEnter,
      afterEnter,
      beforeLeave,
      afterLeave,
      clickOverlay,
      style,
      transitionName,
      clickCloseIcon,
      clickPopup
    };
  }
});

export default withInstall(Popup);
</script>
