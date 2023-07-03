import type { VNode } from 'vue';

export type PickerOption = {
  text?: string | number | VNode;
  value?: string | number;
  disabled?: boolean;
  children?: PickerOption[];
  className?: unknown;
  [key: PropertyKey]: any;
};

export type PickerColumn = PickerOption[];

export type PickerFieldNames = {
  text?: string;
  value?: string;
  children?: string;
  disabled?: string;
  className?: string;
};
