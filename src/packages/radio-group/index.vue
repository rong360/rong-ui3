<script lang="ts">
import { defineComponent, computed, reactive, h, ref, watch, type ExtractPropTypes } from 'vue';

// Utils
import { createNamespace, withInstall, unknownProp, isSameValue, makeStringProp } from '../utils';

// Composables
import { useProvide } from '../composables';

// Types
import type { RadioGroupProvide } from './types';

// Keys
import { radioGroupKey } from './keys';

const { name, bem } = createNamespace('radio-group');

export const radioGroupProps = {
  modelValue: unknownProp,
  disabled: Boolean,
  direction: makeStringProp<'horizontal' | 'vertical'>()
};

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

export const RadioGroup = defineComponent({
  name,
  props: radioGroupProps,
  emits: ['change', 'update:modelValue'],
  setup(props, { slots, emit }) {
    const checked = ref(props.modelValue);

    const classes = reactive({
      root: computed(() => bem({ horizontal: props.direction === 'horizontal' }))
    });

    const updateValue = (value: string) => {
      checked.value = value;
      emit('update:modelValue', value);
      emit('change', value);
    };

    const radioGroupProvide: RadioGroupProvide = {
      updateValue,
      checked
    };
    useProvide(radioGroupKey, radioGroupProvide);

    watch(
      () => props.modelValue,
      (newVal) => {
        if (!isSameValue(newVal, checked.value)) {
          checked.value = newVal;
        }
      }
    );
    return () => h('div', { class: classes.root }, [slots.default?.()]);
  }
});

export default withInstall(RadioGroup);
</script>
