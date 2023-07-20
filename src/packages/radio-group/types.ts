import type { Ref } from 'vue';

export type RadioGroupProvide = {
  updateValue: (value: string) => void;
  checked: Ref<unknown>;
};
