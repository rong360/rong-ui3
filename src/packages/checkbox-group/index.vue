<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  h,
  provide,
  ref,
  watch,
  type ExtractPropTypes,
  type ComponentPublicInstance
} from 'vue';

// Utils
import { createNamespace, withInstall, makeArrayProp, isSameValue, makeStringProp, numericProp } from '../utils';

const { name, bem } = createNamespace('checkbox-group');

export const checkboxGroupProps = {
  modelValue: makeArrayProp<unknown>(),
  disabled: Boolean,
  direction: makeStringProp<'horizontal' | 'vertical'>(),
  max: numericProp
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

export const CheckboxGroup = defineComponent({
  name,
  props: checkboxGroupProps,
  emits: ['click', 'change', 'update:modelValue'],
  setup(props, { slots, emit, expose }) {
    const checked = ref([...props.modelValue]);

    const classes = reactive({
      root: computed(() => bem({ horizontal: props.direction === 'horizontal' }))
    });

    const children = ref<ComponentPublicInstance[]>([]);
    const add = (child: ComponentPublicInstance) => {
      children.value.push(child);
    };
    const remove = (child: ComponentPublicInstance) => {
      const index = children.value.indexOf(child);
      if (index !== -1) children.value.splice(index, 1);
    };
    const updateValue = (value: string[]) => {
      checked.value = value;
      emit('update:modelValue', value);
      emit('change', value);
    };
    provide('checkboxGroup', {
      props,
      add,
      remove,
      updateValue,
      checked
    });

    const toggleAll = (checked: Boolean) => {
      const names: string[] = [];
      children.value.forEach((item: any) => {
        if (!item.props.disabled) {
          names.push(item.props.name);
        }
      });

      updateValue(checked ? names : []);
    };

    const toggleReverse = () => {
      const names: string[] = [];
      children.value.forEach((item: any) => {
        if (!item.props.disabled && !checked.value.includes(item.props.name)) {
          names.push(item.props.name);
        }
      });

      updateValue(names);
    };

    expose({
      toggleAll,
      toggleReverse
    });

    watch(
      () => props.modelValue,
      (newVal) => {
        if (!isSameValue(newVal, checked.value)) {
          checked.value = [...newVal];
        }
      }
    );
    return () => h('div', { class: classes.root }, [slots.default?.()]);
  }
});

export default withInstall(CheckboxGroup);
</script>
