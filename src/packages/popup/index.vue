<template>
  <teleport :to="teleport" :disabled="teleport === undefined">
    <r-overlay
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
    ></r-overlay>
    <Transition
      :css="animate"
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      appear
    >
      <div :class="classes.root" :style="style" v-preventscroll v-show="isPopupShow">
        <slot></slot>
      </div>
    </Transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { createNamespace, makeBooleanProp, makeStringProp, makeNumberProp, makeStyleProp, withInstall } from '../utils';
import { preventscroll } from '../directives';
import Overlay from '../overlay/index.vue';

const { name, bem, prefixCls } = createNamespace('popup');

export const popupProps = {
  show: Boolean,
  overlay: makeBooleanProp(),
  overlayClass: [String, Array, Object],
  overlayStyle: makeStyleProp(),
  overlayTransition: String,
  closeOnClickOverlay: makeBooleanProp(false),
  position: makeStringProp<PopupPosition>('center'),
  popupStyle: makeStyleProp(),
  popupClass: [String, Array, Object],
  zIndex: makeNumberProp(1000),
  teleport: [String, Element],
  round: makeBooleanProp(),
  animate: makeBooleanProp(),
  duration: makeNumberProp(0.5),
  transition: String
};

export type PopupProps = ExtractPropTypes<typeof popupProps>;
export type PopupPosition = 'top' | 'right' | 'bottom' | 'left' | 'center';

const Popup = defineComponent({
  name,
  props: popupProps,
  emits: ['clickOverlay', 'update:show', 'opened', 'closed', 'open', 'close'],
  directives: { preventscroll },
  components: {
    [Overlay.name]: Overlay
  },
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => [bem({ [props.position]: true, round: props.round }), props.popupClass])
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
      return props.transition || `${prefixCls}-${props.position === 'center' ? 'bounce' : props.position}`;
    });

    return {
      classes,
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

export default withInstall(Popup);
</script>
