<template>
  <div :class="classes.root"> select </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive } from 'vue';

// Utils
import { createNamespace, makeTextualProp, withInstall } from '../utils';

const { name, bem } = createNamespace('select');

export const selectProps = {
  text: makeTextualProp()
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;

export const Select = defineComponent({
  name,
  props: selectProps,
  emits: ['click'],
  setup(props) {
    const classes = reactive({
      root: computed(() => bem())
    });

    return {
      classes
    };
  }
});

export default withInstall(Select);
</script>
