<template>
  <div :class="[classes.root, classes.rootCommon, className]" :style="style">
    <div :class="classes.content">
      <div :class="classes.left" :style="leftStyle" @click="clickLeft">
        <slot name="left">
          <r-icon name="arrow-left" v-if="showLeftArrow"></r-icon>
          <RenderText :text="leftText"></RenderText>
        </slot>
      </div>
      <div :class="classes.title" :style="titleStyle">
        <slot><RenderText :text="title"></RenderText></slot>
      </div>
      <div :class="classes.right" :style="rightStyle" @click="clickRight">
        <slot name="right"><RenderText :text="rightText"></RenderText></slot>
      </div>
    </div>
  </div>
  <div :class="[classes.rootPlaceholder, classes.rootCommon]" v-if="fixed && placeholder">
    <div :class="classes.content">placeholder</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import {
  createNamespace,
  withInstall,
  makeBooleanProp,
  makeStringObjectProp,
  makeStyleProp,
  RenderText
} from '../utils';
import Icon from '../icon/index.vue';

const { name, bem, prefixCls } = createNamespace('nav-bar');

export const navBarProps = {
  border: makeBooleanProp(),
  showLeftArrow: makeBooleanProp(),
  leftText: makeStringObjectProp(),
  leftStyle: makeStyleProp(),
  title: makeStringObjectProp(),
  titleStyle: makeStyleProp(),
  rightText: makeStringObjectProp(),
  rightStyle: makeStyleProp(),
  clickable: makeBooleanProp(),
  fixed: makeBooleanProp(false),
  placeholder: makeBooleanProp(false),
  safeAreaInsetTop: makeBooleanProp(false),
  style: makeStyleProp(),
  className: [String, Array, Object]
};

const NavBar = defineComponent({
  inheritAttrs: false,
  name,
  props: navBarProps,
  components: {
    [Icon.name]: Icon,
    RenderText
  },
  emits: ['clickLeft', 'clickRight'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem({ fixed: props.fixed })),
      rootPlaceholder: computed(() => bem({ placeholder: true })),
      rootCommon: computed(() => ({
        'r-hairline--bottom': props.border,
        [`${prefixCls}--safe-area-inset-top`]: props.safeAreaInsetTop
      })),
      content: computed(() => bem('content')),
      left: computed(() => [bem('left'), { 'r-click-feedback': props.clickable }]),
      title: computed(() => [bem('title'), 'r-ellipsis']),
      right: computed(() => [bem('right'), { 'r-click-feedback': props.clickable }])
    });

    const clickLeft = (e: MouseEvent) => emit('clickLeft', e);
    const clickRight = (e: MouseEvent) => emit('clickRight', e);

    return {
      classes,
      clickLeft,
      clickRight
    };
  }
});

export default withInstall(NavBar);
</script>
