export const camelize = (str: string): string => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
export const kebabCase = (str: string): string =>
  str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');

/**
 * 格式化数字，返回指定位数的小数或者整数
 * @param {number} num 要格式化的数字
 * @param {boolean} [isForceFormat=false] 是否强制按照保留位数格式化，默认为 false
 * @param {number} [decimal=0] 小数点后保留的位数，默认为 0
 * @param {boolean} [isPadZero=false] 是否用 0 在小数点后面补齐不足的位数，默认为 false
 * @returns 格式化后的数字
 */
export function formatNumber(num: string | number, isForceFormat = false, decimal = 0, isPadZero = false) {
  let str = num.toString();
  str = isNaN(Number(num))
    ? str
        .replace(/[^-.\d]/g, '')
        .replace(/(?!^)-/g, '')
        .replace(/^([^.]+\.)|\./g, (match, p1) => (p1 ? p1 : ''))
        .replace(/(^-)\.|^\./g, (match, p1) => (p1 ? p1 : ''))
    : str;

  // 如果不强制格式化，直接返回原数字
  if (!isForceFormat) return str;

  const [integer, fraction] = str.split('.');

  // 如果是整数
  if (decimal === 0 || fraction === undefined) return integer;

  // 小数位数足够，直接截取
  if (fraction.length >= decimal) return `${integer}.${fraction.slice(0, decimal)}`;

  // 小数位数不够，需要用 0 补齐
  const diff = decimal - fraction.length;
  const zeroString = isPadZero ? '0'.repeat(diff) : '';

  return `${integer}.${fraction}${zeroString}`;
}

// 限制数字在指定范围内
export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}
