<template>
  <teleport :to="teleport" :disabled="teleport === undefined">
    <Overlay
      :class="overlayClass"
      :style="overlayStyle"
      :close-on-click-overlay="closeOnClickOverlay"
      :animate="animate"
      :duration="duration"
      :transition="overlayTransition"
      :z-index="zIndex"
      @click="clickOverlay"
      v-model:show="isPopupShow"
      v-if="overlay"
    ></Overlay>
    <Transition
      :css="animate"
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      appear
    >
      <div :class="[bem({ [position]: true, round }), popupClass]" :style="style" v-preventscroll v-show="isPopupShow">
        <slot></slot>
      </div>
    </Transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import type { CSSProperties, ExtractPropTypes } from 'vue';
import { createNamespace, truthProp, makeStringProp, makeNumberProp, makeObjectProp, makeStyleProp } from '../utils';
import { preventscroll } from '../directives';
import Overlay from '../overlay';

const { name, bem, prefixCls } = createNamespace('popup');

export const popupProps = {
  show: Boolean,
  overlay: truthProp,
  overlayClass: [String, Array, Object],
  overlayStyle: makeStyleProp(),
  overlayTransition: String,
  closeOnClickOverlay: truthProp,
  position: makeStringProp<PopupPosition>('center'),
  popupStyle: makeObjectProp<CSSProperties>(),
  popupClass: [String, Array, Object],
  zIndex: makeNumberProp(1000),
  teleport: [String, Element],
  round: truthProp,
  animate: truthProp,
  duration: makeNumberProp(0.5),
  transition: String
};

export type PopupProps = ExtractPropTypes<typeof popupProps>;
export type PopupPosition = 'top' | 'right' | 'bottom' | 'left' | 'center';

export default defineComponent({
  name,
  props: popupProps,
  emits: ['clickOverlay', 'update:show', 'opened', 'closed', 'open', 'close'],
  directives: { preventscroll },
  components: { Overlay },
  setup(props, { emit }) {
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
      return props.transition || `${prefixCls}-${props.position === 'center' ? 'bounce' : props.position}`;
    });

    return {
      bem,
      isPopupShow,
      beforeEnter,
      afterEnter,
      beforeLeave,
      afterLeave,
      clickOverlay,
      style,
      transitionName
    };
  }
});
</script>
