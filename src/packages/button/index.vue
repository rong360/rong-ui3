<template>
  <div :class="classes.root" @click="handleClick">
    <div :class="classes.content">
      <slot name="prepend"></slot>
      <div :class="classes.text">
        <slot>
          <RenderText :text="text"></RenderText>
        </slot>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive } from 'vue';

// Utils
import { createNamespace, makeStringProp, makeBooleanProp, makeTextualProp, RenderText, withInstall } from '../utils';

// Types
import type { ButtonShape, ButtonSize, ButtonType } from './type';

const { name, bem } = createNamespace('button');

export const buttonProps = {
  type: makeStringProp<ButtonType>('default'),
  shape: makeStringProp<ButtonShape>('round'),
  size: makeStringProp<ButtonSize>('normal'),
  disabled: makeBooleanProp(false),
  plain: makeBooleanProp(false),
  block: makeBooleanProp(false),
  text: makeTextualProp()
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export const Button = defineComponent({
  name,
  props: buttonProps,
  components: {
    RenderText
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const classes = reactive({
      root: computed(() =>
        bem([
          props.type,
          props.shape,
          props.size,
          {
            disabled: props.disabled,
            plain: props.plain,
            block: props.block
          }
        ])
      ),
      content: computed(() => bem('content')),
      text: computed(() => bem('text', { prepend: !!slots.prepend, append: !!slots.append }))
    });

    const handleClick = (event: MouseEvent) => {
      if (!props.disabled) {
        emit('click', event);
      }
    };

    return {
      classes,
      handleClick
    };
  }
});

export default withInstall(Button);
</script>
