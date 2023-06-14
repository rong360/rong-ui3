import type { ComputedRef } from 'vue';
import type { FormItemProps } from './index.vue';

export type Field = {
  props: FormItemProps;
  labelFor: ComputedRef;
  validate: (trigger: string, callback: (errors?: string) => void) => boolean | undefined;
  reset: () => void;
  getValue: () => any;
  currentValue: ComputedRef;
};
