<template>
  <div :class="classes.root">
    <button :class="classes.cancel" :style="cancelButtonStyle" @click="onCancel">
      <RenderText :text="cancelButtonText" />
    </button>
    <div :class="classes.title" :style="titleStyle">
      <RenderText :text="title" />
    </div>
    <button :class="classes.confirm" :style="confirmButtonStyle" @click="onConfirm">
      <RenderText :text="confirmButtonText" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { makeTextualProp, makeStyleProp, HAPTICS_FEEDBACK, RenderText } from '../utils';
import { bem } from './utils';

export const pickerToolbarProps = {
  title: makeTextualProp(),
  titleStyle: makeStyleProp(),
  cancelButtonText: makeTextualProp('取消'),
  cancelButtonStyle: makeStyleProp(),
  confirmButtonText: makeTextualProp('确认'),
  confirmButtonStyle: makeStyleProp()
};

export const pickerToolbarSlots = ['cancel', 'confirm', 'title', 'toolbar'];

export default defineComponent({
  props: pickerToolbarProps,
  emits: ['cancel', 'confirm'],
  components: {
    RenderText
  },
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
