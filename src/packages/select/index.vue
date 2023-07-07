<template>
  <div :class="classes.root" @click="show = true">
    <div :class="classes.content">{{ selectedTexts }}</div>
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
import { createNamespace, withInstall, pick, makeBooleanProp, isSameValue } from '../utils';

// components
import Icon from '../icon/index.vue';
import Popup, { popupProps } from '../popup/index.vue';
import Picker, { pickerProps } from '../picker/index.vue';

const { name, bem } = createNamespace('select');

export const selectProps = {
  ...pickerProps,
  ...popupProps,
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    default: ''
  },
  round: makeBooleanProp(true)
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

    const show = ref(true);
    const selectedValues = ref(Array.isArray(props.modelValue) ? props.modelValue.slice(0) : [props.modelValue]);
    const selectedTexts = ref([]);

    const pickerPropss = computed(() =>
      pick(
        props,
        Object.keys(pickerProps).filter((key) => key != 'modelValue'),
        true
      )
    );
    const popupPropss = computed(() => pick(props, Object.keys(popupProps), true));

    const onConfirm = (value: any) => {
      show.value = false;
      emit('confirm', value);
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
      (newValues) => {
        newValues = Array.isArray(newValues) ? newValues.slice(0) : [newValues];

        if (!isSameValue(newValues, selectedValues.value)) {
          selectedValues.value = newValues.slice(0);
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
      onConfirm,
      onCancel,
      onChange,
      onChangeOnInitialValue
    };
  }
});

export default withInstall(Select);
</script>
