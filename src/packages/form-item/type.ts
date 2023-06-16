import type { ComputedRef } from 'vue';
import type { FormItemProps } from './index.vue';

export interface Field {
  props: FormItemProps;
  labelFor: ComputedRef;
  validate: () => Promise<any>;
  reset: () => void;
  getValue: () => any;
  currentValue: ComputedRef;
  isCompleted: ComputedRef;
}

export interface FormItemRuleWithoutValidator {
  pattern?: RegExp;
  message: string;
  required?: boolean;
  [key: string]: any;
}

export interface FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (value: any, rules: FormItemRuleWithoutValidator) => boolean | Promise<boolean>;
}
