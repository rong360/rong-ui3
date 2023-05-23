<template>
  <transition :name="transitionName" :css="cssTransition" appear>
    <div :class="classes.root" :style="style" v-preventscroll @click="onClick" v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { preventscroll } from '../directives';
import { createNamespace, makeBooleanProp, makeStringProp, makeNumberProp, withInstall } from '../utils';

const { name, bem, prefixCls } = createNamespace('overlay');

export const overlayProps = {
  show: Boolean,
  zIndex: makeNumberProp(1000),
  cssTransition: makeBooleanProp(),
  duration: makeNumberProp(0.5),
  transitionName: makeStringProp(`${prefixCls}-fade`),
  closeOnClickOverlay: makeBooleanProp(false)
};

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;

const Overlay = defineComponent({
  name,
  props: overlayProps,
  emits: ['click', 'update:show'],
  directives: { preventscroll },
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem())
    });

    const onClick = (e: MouseEvent) => {
      emit('click', e);
      if (props.closeOnClickOverlay) {
        emit('update:show', false);
      }
    };

    const style = computed(() => {
      return {
        transitionDuration: `${props.duration}s`,
        zIndex: props.zIndex
      };
    });

    return {
      classes,
      style,
      onClick
    };
  }
});

export default withInstall(Overlay);
</script>
