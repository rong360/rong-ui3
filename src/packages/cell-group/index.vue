<template>
  <div :class="classes.root">
    <div :class="classes.title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :class="classes.content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { createNamespace, withInstall, makeBooleanProp } from '../utils';

const { name, bem } = createNamespace('cell-group');

const CellGroup = defineComponent({
  name,
  props: {
    title: String,
    round: makeBooleanProp(false)
  },
  setup(props) {
    const classes = reactive({
      root: bem(),
      title: bem('title'),
      content: bem('content', { round: props.round })
    });

    return {
      classes
    };
  }
});

export default withInstall(CellGroup);
</script>
