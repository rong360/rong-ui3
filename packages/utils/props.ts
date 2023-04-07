import type { PropType, CSSProperties } from 'vue';

export const numericProp = [Number, String];

export const makeStringProp = <T>(defaultVal: T) => ({
  type: String as unknown as PropType<T>,
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

export const makeArrayProp = <T>() => ({
  type: Array as PropType<T[]>,
  default: () => []
});

export const makeObjectProp = <T>(defaultVal?: T) => ({
  type: Object as PropType<T>,
  default: () => defaultVal || {}
});

export const makeStyleProp = (defaultVal?: CSSProperties) => ({
  type: Object as PropType<CSSProperties>,
  default: () => defaultVal || {}
});
// export const makeBooleanProp = (defaultVal: Boolean = true) => ({
//   type: Boolean,
//   default: defaultVal
// });
export const truthProp = {
  type: Boolean,
  default: true as const
};
