<template>
  <div :class="classes.root" @click="handleClick">
    <slot name="left-icon"></slot>
    <div :class="classes.title">
      <slot name="title">
        <RenderText :text="title" />
      </slot>
      <div :class="classes.titleDesc" :style="titleDescStyle" v-if="titleDesc || $slots['title-desc']">
        <slot name="title-desc">{{ titleDesc }}</slot>
      </div>
    </div>
    <div :class="classes.value">
      <slot name="value">{{ value }}</slot>
    </div>
    <slot name="right-icon">
      <r-icon :name="`arrow-${arrowDirection}`" v-if="isLink" />
    </slot>

    <slot name="extra"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive } from 'vue';
import {
  createNamespace,
  makeStringProp,
  makeTextualProp,
  makeBooleanProp,
  makeNumericProp,
  makeStyleProp,
  makeClassProp,
  withInstall,
  RenderText
} from '../utils';
import { useCurrentInstance } from '../composables';
import Icon from '../icon/index.vue';

const { name, bem } = createNamespace('cell');

export type CellArrowDirection = 'up' | 'down' | 'left' | 'right';
export type CellSize = 'large' | 'normal';

export const routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};

export const cellProps = {
  title: makeTextualProp(),
  titleDesc: makeStringProp(''),
  titleDescStyle: makeStyleProp(),
  titleClass: makeClassProp(),
  titleAlign: makeStringProp<'left' | 'right' | 'center'>(),
  value: makeNumericProp(''),
  valueClass: makeClassProp(),
  valueAlign: makeStringProp<'left' | 'right' | 'center'>(),
  center: makeBooleanProp(true),
  border: makeBooleanProp(true),
  isLink: makeBooleanProp(false),
  ...routeProps,
  arrowDirection: makeStringProp<CellArrowDirection>('right'),
  size: makeStringProp<CellSize>('normal')
};

export type CellProps = ExtractPropTypes<typeof cellProps>;

const Cell = defineComponent({
  name,
  props: cellProps,
  components: {
    [Icon.name]: Icon,
    RenderText
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const classes = reactive({
      root: computed(() =>
        bem({
          'no-border': !props.border,
          top: !props.center,
          clickable: props.isLink || !!props.to,
          large: props.size === 'large'
        })
      ),
      title: computed(() => [
        bem('title', {
          'has-left-icon': !!slots['left-icon'],
          [props.titleAlign]: true
        }),
        props.titleClass
      ]),
      titleDesc: computed(() => bem('title-desc')),
      value: computed(() => [
        bem('value', {
          'has-right-icon': !!slots['right-icon'] || props.isLink,
          [props.valueAlign]: true
        }),
        props.valueClass
      ])
    });

    const { $router } = useCurrentInstance();

    const handleClick = (event: MouseEvent) => {
      emit('click', event);

      if (props.to && $router) {
        $router[props.replace ? 'replace' : 'push'](props.to);
      } else if (props.url) {
        props.replace ? location.replace(props.url) : (location.href = props.url);
      }
    };

    return {
      classes,
      handleClick
    };
  }
});

export default withInstall(Cell);
</script>
