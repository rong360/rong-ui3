import { createNamespace, clamp } from '../utils';
import type { Numeric } from '../types';
import type { PickerOption, PickerFieldNames } from './types';

const { name, bem } = createNamespace('picker');

export { name, bem };

// 级联数据格式化
export const formatCascade = (
  columns: PickerOption[],
  defaultValues: (number | string)[] = [],
  fields: Required<PickerFieldNames>
) => {
  const formatted: PickerOption[][] = [];

  function searchChildren(options: PickerOption[], columnIndex: number) {
    formatted.push(options);

    const index = options.findIndex((option) => option[fields.value] === defaultValues[columnIndex]);
    const cursor = options[index > -1 ? index : 0];
    const children = cursor[fields.children];
    if (children) searchChildren(children, columnIndex + 1);
  }
  searchChildren(columns, 0);

  return formatted;
};

export function findOptionByValue(options: PickerOption[], value: Numeric, fieldNames: Required<PickerFieldNames>) {
  return options.find((option) => option[fieldNames.value] === value);
}

export function findIndexOfEnabledOption(
  options: PickerOption[],
  index: number,
  fieldNames: Required<PickerFieldNames>
) {
  index = clamp(index, 0, options.length - 1);

  for (let i = index; i < options.length; i++) {
    if (!options[i][fieldNames.disabled]) return i;
  }
  for (let i = index - 1; i >= 0; i--) {
    if (!options[i][fieldNames.disabled]) return i;
  }

  return 0;
}

// 惯性滚动 距离
export const momentum = (distance: number, duration: number) => {
  // 惯性滚动的速度
  const speed = Math.abs(distance / duration);
  // 惯性滚动的距离
  distance = (speed / 0.003) * (distance < 0 ? -1 : 1);
  return distance;
};
