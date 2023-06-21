<template>
  <div :class="classes.root" :style="style">
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
    <slot name="bottom"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import {
  createNamespace,
  makeBooleanProp,
  makeStringObjectProp,
  makeStyleProp,
  RenderText,
  HAPTICS_FEEDBACK
} from '../utils';
import Icon from '../icon/index.vue';

const { bem, prefixCls } = createNamespace('nav-bar');

export const navBarProps = {
  border: makeBooleanProp(true),
  showLeftArrow: makeBooleanProp(true),
  leftText: makeStringObjectProp(),
  leftStyle: makeStyleProp(),
  title: makeStringObjectProp(),
  titleStyle: makeStyleProp(),
  rightText: makeStringObjectProp(),
  rightStyle: makeStyleProp(),
  clickable: makeBooleanProp(true),
  fixed: makeBooleanProp(false),
  placeholder: makeBooleanProp(false),
  safeAreaInsetTop: makeBooleanProp(false),
  style: makeStyleProp(),
  className: [String, Array, Object]
};

export const navBarEmits = ['clickLeft', 'clickRight'];
const NavBar = defineComponent({
  inheritAttrs: false,
  props: navBarProps,
  components: {
    [Icon.name]: Icon,
    RenderText
  },
  emits: navBarEmits,
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => [
        bem({ fixed: props.fixed, placeholder: props.placeholder }),
        {
          [`${prefixCls}--safe-area-inset-top`]: props.safeAreaInsetTop
        },
        props.className
      ]),
      content: computed(() => [
        bem('content'),
        {
          'r-hairline--bottom': props.border
        }
      ]),
      left: computed(() => [bem('left'), { [HAPTICS_FEEDBACK]: props.clickable }]),
      title: computed(() => [bem('title')]),
      right: computed(() => [bem('right'), { [HAPTICS_FEEDBACK]: props.clickable }])
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

export default NavBar;
</script>
