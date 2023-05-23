<template>
  <div :class="classes.root">
    <div :class="classes.title" :style="titleStyle">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :class="classes.content" :style="contentStyle" ref="cellContent">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { createNamespace, withInstall, makeBooleanProp, makeStyleProp } from '../utils';

const { name, bem } = createNamespace('cell-group');

const CellGroup = defineComponent({
  name,
  props: {
    title: String,
    titleStyle: makeStyleProp(),
    round: makeBooleanProp(false),
    contentStyle: makeStyleProp()
  },
  setup(props) {
    const classes = reactive({
      root: bem(),
      title: bem('title'),
      content: bem('content', { round: props.round })
    });

    const cellContent = ref();
    onMounted(() => {
      const cells = cellContent.value?.querySelectorAll('.r-cell');
      if (cells && cells.length > 0) cells[cells.length - 1].classList.add('r-cell--last');
    });

    return {
      classes,
      cellContent
    };
  }
});

export default withInstall(CellGroup);
</script>
