<template>
  <div :class="classes.root" @click.prevent.stop>
    <Toolbar v-if="showToolbar" v-bind="toolbarProps" @confirm="onConfirm" @cancel="onCancel"></Toolbar>
    <slot name="columns-top"></slot>
    <div :class="classes.columns" :style="columnsStyle">
      <Column
        v-for="(options, columnIndex) in currentColumns"
        ref="columnRef"
        :key="columnIndex"
        :fields="fields"
        :options="options"
        :optionHeight="optionHeight"
        :value="selectedValues[columnIndex]"
        :visibleOptionNum="visibleOptionNum"
        :swipeDuration="swipeDuration"
        @change="(value: Numeric, selectedIndex: number) => onColumnChange(value, selectedIndex, columnIndex)"
      ></Column>
      <div :class="classes.mask" :style="maskStyle">
        <div ref="frameRef" :class="classes.frame"></div>
      </div>
    </div>
    <slot name="columns-bottom"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onMounted, nextTick, watch, type PropType } from 'vue';

// Utils
import { withInstall, makeArrayProp, makeNumericProp, truthProp, pick, isSameValue } from '../utils';
import { name, bem, formatCascade, findOptionByValue } from './utils';

// Components
import Toolbar, { pickerToolbarProps } from './Toolbar.vue';
import Column from './Column.vue';

// Types
import type { PickerOption, PickerColumn, PickerFieldNames } from './types';
import type { Numeric } from '../types';

export const pickerProps = {
  modelValue: makeArrayProp<string | number>(),
  columns: makeArrayProp<PickerOption | PickerColumn>(),
  columnsFieldNames: Object as PropType<PickerFieldNames>,
  visibleOptionNum: makeNumericProp(6),
  swipeDuration: makeNumericProp(1000),
  showToolbar: truthProp,
  ...pickerToolbarProps
};

const Picker = defineComponent({
  name,
  props: pickerProps,
  components: {
    Toolbar,
    Column
  },
  emits: ['change', 'update:modelValue', 'confirm', 'cancel'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem()),
      columns: computed(() => bem('columns')),
      mask: computed(() => bem('mask')),
      frame: computed(() => [bem('frame'), 'r-hairline--top', 'r-hairline--bottom'])
    });

    const columnRef = ref<InstanceType<typeof Column>[]>();
    const frameRef = ref<HTMLElement>();
    const selectedValues = ref(props.modelValue.slice(0));

    const fields = computed(() =>
      Object.assign(
        { text: 'text', value: 'value', children: 'children', className: 'className', disabled: 'disabled' },
        props.columnsFieldNames
      )
    );

    const toolbarProps = computed(() => pick(props, Object.keys(pickerToolbarProps), true));

    const columnsType = computed(() => {
      const firstColumn = props.columns[0];
      if (firstColumn) {
        if (Array.isArray(firstColumn)) {
          return 'multiple';
        }
        if (fields.value.children in firstColumn) {
          return 'cascade';
        }
      }
      return 'single';
    });

    const currentColumns = computed<PickerColumn[]>(() => {
      const { columns } = props;

      switch (columnsType.value) {
        case 'multiple': // 多列选择
          return columns as PickerColumn[];
        case 'cascade': // 级联选择
          return formatCascade(columns, selectedValues.value, fields.value);
        default: // 单列选择
          return [columns];
      }
    });

    const optionHeight = ref(44);
    onMounted(() => {
      optionHeight.value = parseInt(getComputedStyle(frameRef.value as HTMLElement).height);
    });

    const columnsHeight = computed(() => optionHeight.value * Number(props.visibleOptionNum));
    const columnsStyle = computed(() => ({ height: `${columnsHeight.value}px` }));
    const maskStyle = computed(() => ({ backgroundSize: `100% ${(columnsHeight.value - optionHeight.value) / 2}px` }));

    const selectedOptions = computed(() =>
      currentColumns.value.map((options, index) =>
        findOptionByValue(options, selectedValues.value[index], fields.value)
      )
    );

    const selectedIndexes = computed(() =>
      currentColumns.value.map((options, index) =>
        options.findIndex((option) => option[fields.value.value] === selectedValues.value[index])
      )
    );

    const setValue = (index: number, value: Numeric) => {
      if (selectedValues.value[index] !== value) {
        const newValues = selectedValues.value.slice(0);
        newValues[index] = value;
        selectedValues.value = newValues;
      }
    };

    const getEventParams = () => ({
      selectedValues: selectedValues.value.slice(0),
      selectedOptions: selectedOptions.value,
      selectedIndexes: selectedIndexes.value
    });

    const onColumnChange = (value: Numeric, selectedIndex: number, columnIndex: number) => {
      setValue(columnIndex, value);

      if (columnsType.value === 'cascade') {
        for (let i = columnIndex + 1; i < currentColumns.value.length; i++) {
          setValue(i, currentColumns.value[i][0][fields.value.value]);
        }
      }

      emit('update:modelValue', selectedValues.value.slice(0));
      emit('change', Object.assign({ columnIndex, selectedIndex }, getEventParams()));
    };

    const stopMomentum = () => columnRef.value?.forEach((column) => column.stopMomentum());

    const onConfirm = () => {
      stopMomentum();
      nextTick(() => emit('confirm', getEventParams()));
    };

    const onCancel = () => {
      stopMomentum();
      nextTick(() => emit('cancel', getEventParams()));
    };

    watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, selectedValues.value)) {
          selectedValues.value = newValues.slice(0);
        }
      }
    );

    return {
      classes,
      columnRef,
      frameRef,
      currentColumns,
      fields,
      columnsStyle,
      maskStyle,
      optionHeight,
      selectedValues,
      toolbarProps,
      onColumnChange,
      onConfirm,
      onCancel
    };
  }
});

export default withInstall(Picker);
</script>
