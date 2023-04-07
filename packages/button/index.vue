<template>
  <div> </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes } from 'vue';
import { createNamespace, makeStringProp } from '../utils';
import type { ButtonShape, ButtonSize, ButtonType } from './type';

const { name, bem } = createNamespace('button');

export const buttonProps = {
  type: makeStringProp<ButtonType>('default'),
  shape: makeStringProp<ButtonShape>('round'),
  size: makeStringProp<ButtonSize>('normal'),
  color: String
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name,
  props: buttonProps,
  setup() {
    return {
      bem
    };
  }
});
</script>
