<template>
  <div :class="classes.root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import { createNamespace, makeStringProp, makeBooleanProp, withInstall } from '../utils';
import type { Direction, ContentPosition } from './type';

const { name, bem } = createNamespace('divider');

const Divider = defineComponent({
  name,
  props: {
    contentPosition: makeStringProp<ContentPosition>('center'),
    direction: makeStringProp<Direction>('horizontal'),
    dashed: makeBooleanProp(false),
    hairline: makeBooleanProp(true),
    margin: makeBooleanProp(true)
  },
  setup(props, { slots }) {
    const classes = reactive({
      root: computed(() =>
        bem([
          props.direction,
          props.direction === 'horizontal' ? props.contentPosition : '',
          {
            dashed: props.dashed,
            hairline: props.hairline,
            margin: props.margin,
            hasContent: !!slots.default
          }
        ])
      )
    });

    return {
      classes
    };
  }
});

export default withInstall(Divider);
</script>
