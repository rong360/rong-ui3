<script lang="ts">
import {
  defineComponent,
  type ExtractPropTypes,
  computed,
  reactive,
  h,
  inject,
  watch,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
  withModifiers
} from 'vue';

// Utils
import { createNamespace, withInstall, makeStringProp, RenderText, isSameValue, makeStyleProp } from '../utils';

// Components
import Icon from '../icon/index.vue';

const { name, bem } = createNamespace('checkbox');

export const checkboxProps = {
  modelValue: Boolean,
  disabled: Boolean,
  textPosition: makeStringProp<'left' | 'right'>('right'),
  name: makeStringProp(''),
  indeterminate: Boolean,
  shape: makeStringProp<'round' | 'square' | 'button'>('round'),
  iconStyle: makeStyleProp(),
  labelDisabled: Boolean
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export const Checkbox = defineComponent({
  name,
  props: checkboxProps,
  components: {
    RenderText
  },
  emits: ['change', 'update:modelValue', 'clickLabel'],
  setup(props, { slots, emit, expose }) {
    const checkboxGroup = inject('checkboxGroup', null) as any;

    const state = reactive({
      partialSelect: props.indeterminate,
      checked: props.modelValue
    });

    const classes = reactive({
      root: computed(() =>
        bem({
          reverse: props.textPosition === 'left',
          [props.shape]: true,
          horizontal: checkboxGroup && checkboxGroup.props.direction === 'horizontal'
        })
      ),
      button: computed(() => bem('button', { checked: isChecked.value })),
      icon: computed(() =>
        bem('icon', { disabled: isDisabled.value, checked: isChecked.value, indeterminate: state.partialSelect })
      ),
      label: computed(() => bem('label', { disabled: isDisabled.value }))
    });

    const isChecked = computed(() => {
      if (checkboxGroup) {
        return checkboxGroup.checked.value.includes(props.name);
      } else {
        return props.modelValue;
      }
    });

    const isDisabled = computed(() => {
      return (checkboxGroup && checkboxGroup.props.disabled) || props.disabled;
    });

    const renderButton = () => {
      return h('div', { class: classes.button }, slots.default?.());
    };

    const renderIcon = () => {
      const iconName = state.partialSelect
        ? 'check-disabled-circle'
        : isChecked.value
        ? props.shape === 'square'
          ? 'check-active-square'
          : 'check-active-circle'
        : props.shape === 'square'
        ? 'check-square'
        : 'check-circle';
      const iconSlot = state.partialSelect ? slots.indeterminate : isChecked.value ? slots.checkedIcon : slots.icon;
      return h(
        Icon,
        { class: classes.icon, name: iconName, style: props.iconStyle },
        {
          default: () => iconSlot?.({ checked: isChecked.value })
        }
      );
    };

    const renderLabel = () => {
      return h(
        'label',
        {
          class: classes.label,
          onClick: withModifiers((event: MouseEvent) => emit('clickLabel', event), [props.labelDisabled ? 'stop' : ''])
        },
        slots.default?.()
      );
    };

    const handleClick = () => {
      if (isDisabled.value) return;

      state.checked = !state.checked;

      if (state.partialSelect) {
        state.partialSelect = false;
        state.checked = true;
      }

      emit('update:modelValue', state.checked);
      emit('change', state.checked, slots.default?.()[0].children);

      if (checkboxGroup) {
        let value = [...checkboxGroup.checked.value];
        let index = value.indexOf(props.name);
        let max = checkboxGroup.props.max;
        if (index === -1 && (max === undefined || value.length < max)) {
          value.push(props.name);
        } else if (index > -1) {
          value.splice(index, 1);
        }
        checkboxGroup.updateValue(value);
      }
    };

    const instance = getCurrentInstance();
    onMounted(() => checkboxGroup?.add(instance));
    onBeforeUnmount(() => {
      checkboxGroup?.remove(instance);

      if (checkboxGroup) {
        let value = [...checkboxGroup.checked.value];
        let index = value.indexOf(props.name);
        if (index > -1) {
          value.splice(index, 1);
          checkboxGroup.updateValue(value);
        }
      }
    });

    watch(
      () => props.indeterminate,
      (newVal) => {
        if (!isSameValue(newVal, state.partialSelect)) {
          state.partialSelect = newVal;
        }
      }
    );

    watch(
      () => props.modelValue,
      (newVal) => {
        if (!isSameValue(newVal, state.checked)) {
          state.checked = newVal;
        }
      }
    );

    expose({
      toggle: handleClick,
      isChecked
    });

    return () =>
      h(
        'div',
        { class: classes.root, onClick: handleClick },
        props.shape === 'button' ? renderButton() : [renderIcon(), renderLabel()]
      );
  }
});

export default withInstall(Checkbox);
</script>
