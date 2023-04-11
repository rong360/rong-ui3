<template>
  <div :class="bem(classes)" @click="handleClick">
    <div :class="bem('content')">
      <slot name="prepend"></slot>
      <span :class="bem('text', { prepend: !!$slots.prepend, append: !!$slots.append })">
        <slot></slot>
      </span>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed } from 'vue';
import { createNamespace, makeStringProp, makeBooleanProp } from '../utils';
import type { ButtonShape, ButtonSize, ButtonType } from './type';

const { name, bem } = createNamespace('button');

export const buttonProps = {
  type: makeStringProp<ButtonType>('default'),
  shape: makeStringProp<ButtonShape>('round'),
  size: makeStringProp<ButtonSize>('normal'),
  disabled: makeBooleanProp(false),
  plain: makeBooleanProp(false),
  block: makeBooleanProp(false)
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() => {
      return [
        props.type,
        props.shape,
        props.size,
        {
          disabled: props.disabled,
          plain: props.plain,
          block: props.block
        }
      ];
    });

    const handleClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit('click', event);
      }
    };

    return {
      bem,
      classes,
      handleClick
    };
  }
});
</script>
