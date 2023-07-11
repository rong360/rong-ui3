<template>
  <div :class="classes.root">
    <div :class="classes.toolbar">
      <button :class="classes.cancel" @click="onCancel">
        <RenderText v-if="cancelButtonText" :text="cancelButtonText" />
        <r-icon name="close" v-else></r-icon>
      </button>
      <div :class="classes.title"><RenderText :text="title" /></div>
    </div>
    <ul ref="listRef" :class="classes.list" :style="listStyle">
      <template v-if="options.length">
        <li
          v-for="(option, index) in options"
          :class="[
            classes.item,
            option[fields.className],
            { disabled: option[fields.disabled], active: option[fields.value] === selectedValue }
          ]"
          :key="index"
          @click="onClickOption(option)"
        >
          <span class="text"><RenderText :text="option[fields.text]" /></span>
        </li>
      </template>
      <li v-else>数据为空</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onMounted, watch, type PropType } from 'vue';

// Utils
import {
  createNamespace,
  makeArrayProp,
  makeNumericProp,
  makeTextualProp,
  makeStyleProp,
  truthProp,
  RenderText,
  HAPTICS_FEEDBACK,
  isSameValue
} from '../utils';
import { findOptionByValue } from '../picker/utils';

// Types
import type { PickerOption, PickerFieldNames } from '../picker/types';

// components
import Icon from '../icon/index.vue';

const { name, bem } = createNamespace('tile');

export const tileProps = {
  modelValue: makeArrayProp<string | number>(),
  options: makeArrayProp<PickerOption>(),
  optionsFieldNames: Object as PropType<PickerFieldNames>,
  visibleOptionNum: makeNumericProp(6),
  showToolbar: truthProp,
  title: makeTextualProp(),
  titleStyle: makeStyleProp(),
  cancelButtonText: makeTextualProp(),
  cancelButtonStyle: makeStyleProp()
};

export default defineComponent({
  name,
  props: tileProps,
  emits: ['changeOnInitialValue', 'update:modelValue', 'confirm', 'cancel'],
  components: {
    [Icon.name]: Icon,
    RenderText
  },
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem()),
      toolbar: computed(() => bem('toolbar')),
      cancel: computed(() => [bem('cancel'), HAPTICS_FEEDBACK]),
      title: computed(() => bem('title')),
      list: computed(() => [bem('list'), 'scroll-area']),
      item: computed(() => [bem('item'), 'r-hairline--bottom'])
    });

    const listRef = ref<HTMLElement>();
    const selectedValue = ref<string | number>('');

    const fields = computed(() =>
      Object.assign(
        { text: 'text', value: 'value', children: 'children', className: 'className', disabled: 'disabled' },
        props.optionsFieldNames
      )
    );

    const optionHeight = ref(50);
    onMounted(() => {
      optionHeight.value = parseInt(
        getComputedStyle((listRef.value as HTMLElement).querySelector('li') as HTMLElement).lineHeight
      );
    });

    const listStyle = computed(() => {
      let num = Number(props.visibleOptionNum);
      let style = {};
      if (props.options.length > num) {
        Object.assign(style, {
          height: `${optionHeight.value * num + optionHeight.value / 2}px`
        });
      }
      return style;
    });

    const selectedOption = computed(() => findOptionByValue(props.options, selectedValue.value, fields.value));

    const selectedIndex = computed(() =>
      props.options.findIndex((option) => option[fields.value.value] === selectedValue.value)
    );

    const selectedText = computed(() => (selectedOption.value ? selectedOption.value[fields.value.text] : ''));

    const getEventParams = () => ({
      selectedValues: [selectedValue.value],
      selectedOptions: [selectedOption.value],
      selectedIndexes: [selectedIndex.value],
      selectedTexts: [selectedText.value]
    });

    const onClickOption = (option: PickerOption) => {
      if (option[fields.value.disabled]) return;

      const value = option[fields.value.value];
      selectedValue.value = value;

      emit('update:modelValue', [value]);
      emit('confirm', getEventParams());
    };

    const onCancel = () => {
      emit('cancel', getEventParams());
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        let _newValue = Array.isArray(newValue) ? newValue[0] : newValue;
        if (!isSameValue(_newValue, selectedValue.value)) {
          selectedValue.value = _newValue;
          emit('changeOnInitialValue', getEventParams());
        }
      },
      { immediate: true }
    );

    return {
      classes,
      fields,
      listRef,
      listStyle,
      selectedValue,
      onClickOption,
      onCancel
    };
  }
});
</script>
