<template>
  <div :class="classes.root" @click="handleClick">
    <slot name="left-icon"></slot>
    <div :class="classes.titleContent">
      <div :class="classes.title">
        <slot>{{ title }}</slot>
      </div>
      <div :class="classes.titleDesc" :style="titleDescStyle" v-if="titleDesc || $slots['title-desc']">
        <slot name="title-desc">{{ titleDesc }}</slot>
      </div>
    </div>
    <div :class="classes.valueContent">
      <div :class="classes.value">
        <slot name="value">{{ value }}</slot>
      </div>
      <slot name="right-icon">
        <r-icon :name="`arrow-${arrowDirection}`" v-if="isLink" />
      </slot>
    </div>
    <slot name="extra"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive } from 'vue';
import {
  createNamespace,
  makeStringProp,
  makeBooleanProp,
  makeNumericProp,
  makeStyleProp,
  withInstall
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
  title: makeStringProp('单元格'),
  titleDesc: makeStringProp(''),
  titleDescStyle: makeStyleProp(),
  value: makeNumericProp(''),
  center: makeBooleanProp(false),
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
    [Icon.name]: Icon
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const classes = reactive({
      root: computed(() =>
        bem({
          center: props.center,
          'no-border': !props.border,
          clickable: props.isLink || !!props.to,
          large: props.size === 'large'
        })
      ),
      titleContent: computed(() => bem('title-content', { 'has-left-icon': !!slots['left-icon'] })),
      title: computed(() => bem('title')),
      titleDesc: computed(() => bem('title-desc')),
      valueContent: computed(() => bem('value-content')),
      value: computed(() => bem('value', { 'has-right-icon': !!slots['right-icon'] || props.isLink }))
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
