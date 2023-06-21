<template>
  <div :class="classes.root">
    <slot name="toolbar">
      <button :class="classes.cancel" @click="onCancel">
        <slot name="cancel">{{ cancelButtonText }}</slot>
      </button>
      <div :class="classes.title">
        <slot name="title">{{ title }}</slot>
      </div>
      <button :class="classes.confirm" @click="onConfirm">
        <slot name="confirm">{{ confirmButtonText }}</slot>
      </button>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { makeStringProp, HAPTICS_FEEDBACK } from '../utils';
import { bem } from './utils';

export const pickerToolbarProps = {
  title: String,
  cancelButtonText: makeStringProp('取消'),
  confirmButtonText: makeStringProp('确认')
};

export const pickerToolbarSlots = ['cancel', 'confirm', 'title', 'toolbar'];

export default defineComponent({
  props: pickerToolbarProps,
  emits: ['cancel', 'confirm'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem('toolbar')),
      title: computed(() => bem('title')),
      cancel: computed(() => [bem('cancel'), HAPTICS_FEEDBACK]),
      confirm: computed(() => [bem('confirm'), HAPTICS_FEEDBACK])
    });

    const onCancel = () => emit('cancel');
    const onConfirm = () => emit('confirm');

    return {
      classes,
      onCancel,
      onConfirm
    };
  }
});
</script>
