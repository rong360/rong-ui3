export const formatValueToArray = (value: string | string[], separator: string | undefined) =>
  Array.isArray(value) ? value : separator ? value.split(separator) : [value];

export const formatValueToString = (value: string | string[], separator: string | undefined) =>
  Array.isArray(value) ? value.join(separator) : value;
