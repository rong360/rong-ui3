<template>
  <div :class="classes.root" @click="show = true">
    <div :class="classes.content">{{ placeholderText }}</div>
    <r-icon name="arrow-right" />
  </div>
  <r-popup v-bind="popupPropss" position="bottom" v-model:show="show">
    <r-picker
      v-bind="pickerPropss"
      v-model="selectedValues"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
      @change-on-initial-value="onChangeOnInitialValue"
    />
  </r-popup>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, type PropType, computed, reactive, ref, watch } from 'vue';

// Utils
import { createNamespace, withInstall, pick, makeBooleanProp, makeStringProp, isSameValue } from '../utils';
import { formatValueToArray, formatValueToString } from './utils';

// components
import Icon from '../icon/index.vue';
import Popup, { popupProps } from '../popup/index.vue';
import Picker, { pickerProps } from '../picker/index.vue';

const { name, bem } = createNamespace('select');

export const selectProps = {
  ...pickerProps,
  ...popupProps,
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  round: makeBooleanProp(true),
  formatText: Function as PropType<(value: string[]) => string>,
  textSeparator: String,
  valueSeparator: makeStringProp(','),
  placeholder: String
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;

export const Select = defineComponent({
  name,
  props: selectProps,
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem()),
      content: computed(() => bem('content'))
    });

    const show = ref(false);
    const selectedValues = ref(formatValueToArray(props.modelValue, props.valueSeparator));
    const selectedTexts = ref<string[]>([]);

    const pickerPropss = computed(() =>
      pick(
        props,
        Object.keys(pickerProps).filter((key) => key != 'modelValue'),
        true
      )
    );
    const popupPropss = computed(() => pick(props, Object.keys(popupProps), true));
    const placeholderText = computed(
      () => selectedTexts.value.filter((item) => item !== '').join(props.textSeparator) || props.placeholder
    );

    const onConfirm = (value: any) => {
      show.value = false;
      selectedTexts.value = value.selectedTexts;
      emit('confirm', value);
      emit(
        'update:modelValue',
        Array.isArray(props.modelValue)
          ? value.selectedValues
          : formatValueToString(value.selectedValues, props.valueSeparator)
      );
    };
    const onCancel = (value: any) => {
      show.value = false;
      emit('cancel', value);
    };
    const onChange = (value: any) => {
      emit('change', value);
    };

    const onChangeOnInitialValue = (value: any) => {
      selectedTexts.value = value.selectedTexts;
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        newValue = formatValueToArray(newValue, props.valueSeparator);

        if (!isSameValue(newValue, selectedValues.value)) {
          selectedValues.value = newValue;
        }
      }
    );

    return {
      classes,
      show,
      pickerPropss,
      popupPropss,
      selectedValues,
      selectedTexts,
      placeholderText,
      onConfirm,
      onCancel,
      onChange,
      onChangeOnInitialValue
    };
  }
});

export default withInstall(Select);
</script>
