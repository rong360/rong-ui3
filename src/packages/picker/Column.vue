<template>
  <div
    ref="rootRef"
    :class="classes.root"
    @touchstart.passive="onTouchstart"
    @touchend="onTouchend"
    @transitionend="onTransitionend"
  >
    <ul :class="classes.columnWrapper" :style="wrapperStyle">
      <li
        v-for="(option, index) in options"
        :class="[classes.columnItem, option[fields.className], { disabled: option[fields.disabled] }]"
        :key="index"
        @click="onClickOption(index)"
      >
        <RenderText :text="option[fields.text]" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watch, type PropType } from 'vue';

// Utils
import { makeArrayProp, makeRequiredProp, numericProp, clamp, preventDefault, RenderText } from '../utils';
import { bem, findIndexOfEnabledOption, momentum } from './utils';

// Composables
import { useTouch, useEventListener } from '../composables';

// Types
import type { PickerOption, PickerFieldNames } from './types';

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
// 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
const MOMENTUM_TIME = 300;
const MOMENTUM_DISTANCE = 15;

const DEFAULT_DURATION = 200;

export default defineComponent({
  props: {
    value: numericProp,
    options: makeArrayProp<PickerOption>(),
    fields: makeRequiredProp(Object as PropType<Required<PickerFieldNames>>),
    optionHeight: makeRequiredProp(Number),
    visibleOptionNum: makeRequiredProp(numericProp),
    swipeDuration: makeRequiredProp(numericProp)
  },
  components: {
    RenderText
  },
  emits: ['change', 'update:modelValue'],
  expose: ['stopMomentum'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem('column')),
      columnWrapper: computed(() => bem('column-wrapper')),
      columnItem: computed(() => [bem('column-item'), 'r-ellipsis'])
    });

    let startOffset: number;

    const rootRef = ref<HTMLElement>();
    const currentOffset = ref(0); // 当前偏移量。baseOffset把元素移动到中间位置，以该中间位置为起始点，计算出当前偏移量
    const currentDuration = ref(DEFAULT_DURATION);
    const selectedIndex = ref(0);
    const touch = useTouch();

    const baseOffset = computed(() => (props.optionHeight * (Number(props.visibleOptionNum) - 1)) / 2); // 基础偏移量，负责将元素起始位置移动到中间位置

    const updateValueByIndex = (index: number) => {
      let enabledIndex = findIndexOfEnabledOption(props.options, index, props.fields);
      const offset = -enabledIndex * props.optionHeight;

      currentOffset.value = offset;
      selectedIndex.value = enabledIndex;
    };

    const getIndexByOffset = (offset: number) =>
      clamp(Math.round(-offset / props.optionHeight), 0, props.options.length - 1);

    const onTouchstart = (event: TouchEvent) => {
      touch.start(event);

      currentDuration.value = 0;
      startOffset = currentOffset.value;
    };

    const onTouchMove = (event: TouchEvent) => {
      touch.move(event);

      preventDefault(event, true);

      const newOffset = clamp(
        startOffset + touch.deltaY.value,
        -(props.options.length * props.optionHeight),
        props.optionHeight
      );

      currentOffset.value = newOffset;
    };

    const onTouchend = () => {
      touch.end();

      const distance = touch.deltaY.value;
      const duration = touch.moveTime.value;
      const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE;
      // 惯性滚动
      if (startMomentum) {
        const newOffset = currentOffset.value + momentum(distance, duration);
        const index = getIndexByOffset(newOffset);
        currentDuration.value = +props.swipeDuration;
        updateValueByIndex(index);
        return;
      }

      currentDuration.value = DEFAULT_DURATION;
      if (!touch.isTap.value) {
        const index = getIndexByOffset(currentOffset.value);
        updateValueByIndex(index);
      }
    };

    const onClickOption = (index: number) => {
      if (touch.isTap.value) {
        updateValueByIndex(index);
      }
    };

    const onTransitionend = () => setChooseValue();

    const stopMomentum = () => {
      currentDuration.value = 0;
      setChooseValue();
    };

    const setChooseValue = () => {
      const value = props.options[selectedIndex.value][props.fields.value];
      if (props.value !== value) emit('change', value, selectedIndex.value);
    };

    const wrapperStyle = computed(() => {
      const offset = currentOffset.value + baseOffset.value;
      return {
        transform: `translate3d(0, ${offset}px, 0)`,
        transitionDuration: `${currentDuration.value}ms`,
        transitionProperty: currentDuration.value ? 'all' : 'none'
      };
    });

    watch(
      () => props.value,
      (value: any) => {
        const index = props.options.findIndex((option) => option[props.fields.value] === value);
        updateValueByIndex(index);
      },
      { immediate: true }
    );

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener(rootRef, 'touchmove', onTouchMove, { passive: false });

    return {
      rootRef,
      classes,
      wrapperStyle,
      onTouchstart,
      onTouchMove,
      onTouchend,
      onTransitionend,
      onClickOption,
      stopMomentum
    };
  }
});
</script>
