<template>
  <transition :name="transition" :css="animate" appear>
    <div :class="bem()" :style="style" v-preventscroll @click="onClick" v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { CSSProperties } from 'vue';

import { preventscroll } from '../../directives';

import {
  createNamespace,
  truthProp,
  makeStringProp,
  makeNumberProp,
  makeNumericProp,
  makeObjectProp
} from '../../utils';

const { name, bem, prefixCls } = createNamespace('overlay');

export const overlayProps = {
  show: Boolean,
  className: String,
  customStyle: makeObjectProp<CSSProperties>(),
  zIndex: makeNumericProp(1000),
  animate: truthProp,
  duration: makeNumberProp(0.5),
  transition: makeStringProp(`${prefixCls}-fade`),
  closeOnClickOverlay: truthProp
};

export default defineComponent({
  name,
  props: overlayProps,
  emits: ['click', 'update:show'],
  directives: { preventscroll },
  setup(props, { emit }) {
    const onClick = (e: MouseEvent) => {
      emit('click', e);
      if (props.closeOnClickOverlay) {
        emit('update:show', false);
      }
    };

    const style = computed(() => {
      return Object.assign(
        {
          transitionDuration: `${props.duration}s`,
          zIndex: props.zIndex
        },
        props.customStyle
      );
    });

    return {
      bem,
      onClick,
      style
    };
  }
});
</script>
