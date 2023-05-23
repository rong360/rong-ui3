<template>
  <div :class="classes.root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, type ExtractPropTypes } from 'vue';
import { createNamespace, makeStringProp, makeBooleanProp, withInstall } from '../utils';
import type { Direction, ContentPosition } from './type';

const { name, bem } = createNamespace('divider');

export const dividerProps = {
  contentPosition: makeStringProp<ContentPosition>('center'),
  direction: makeStringProp<Direction>('horizontal'),
  dashed: makeBooleanProp(false),
  hairline: makeBooleanProp(true),
  margin: makeBooleanProp(true)
};

export type DividerProps = ExtractPropTypes<typeof dividerProps>;

const Divider = defineComponent({
  name,
  props: dividerProps,
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
