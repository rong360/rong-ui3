import type { PropType, CSSProperties } from 'vue';

export const numericProp = [Number, String];

export const makeStringProp = <T>(defaultVal?: T) => ({
  type: String as unknown as PropType<T>,
  default: defaultVal
});

export const makeStringNumberProp = <T>(defaultVal?: T) => ({
  type: [String, Number],
  default: defaultVal
});

export const makeNumberProp = <T>(defaultVal: T) => ({
  type: Number as unknown as PropType<T>,
  default: defaultVal
});

export const makeNumericProp = <T>(defaultVal: T) => ({
  type: numericProp,
  default: defaultVal
});

export const makeStyleProp = () => ({
  type: Object as PropType<CSSProperties>,
  default: () => ({})
});
export const makeBooleanProp = <T>(defaultVal?: T) => ({
  type: Boolean,
  default: defaultVal
});
export const truthProp = {
  type: Boolean,
  default: true as const
};

export const makeStringObjectProp = <T>(defaultVal?: T) => ({
  type: [String, Object],
  default: defaultVal
});

export const makeObjectProp = () => ({
  type: Object,
  default: () => ({})
});

export const makeClassProp = () => ({
  type: [String, Array, Object]
});
