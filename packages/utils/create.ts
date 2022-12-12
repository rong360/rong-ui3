import { camelize } from '../utils';
const componentPrefix = 'r';

// 修饰符类型
export type modsType = Record<string, boolean> | Array<string | Record<string, boolean>>;

function genBem(name: string, mods: string): string;
function genBem(name: string, mods?: modsType): string;
function genBem(name: string, mods?: unknown): string {
  if (!mods) return '';

  if (typeof mods == 'string') return ` ${name}--${mods.toLowerCase()}`;

  if (mods instanceof Array) {
    return mods.reduce((ret, item) => ret + genBem(name, item), '');
  }

  return Object.keys(mods as Record<string, boolean>).reduce(
    (ret, key) => ret + ((mods as Record<string, boolean>)[key] ? genBem(name, key) : ''),
    ''
  );
}

/**
 * CSS-BEM 命名规范: block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。
 *
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
function createBEM(name: string) {
  return (el?: string | modsType, mods?: modsType) => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }
    el = el ? `${name}__${el}` : name;
    return `${el}${genBem(el, mods)}`;
  };
}

function createNamespace(name: string) {
  // 组件样式 flexfixed -> r-flexfixed
  // const prefixCls = `${componentPrefix}-${name.toLowerCase().replace(/-(\w)/g, (_, c) => c)}`;

  // 组件命名 flex-fixed -> RFlexfixed
  // const prefixName = camelize(`-${componentPrefix}-${name.replace('-', '')}`.toLowerCase());
  const prefixedName = `r-${name}`;

  return {
    name: prefixedName,
    prefixedName,
    prefixCls: prefixedName,
    bem: createBEM(prefixedName)
  };
}

export { createNamespace, componentPrefix };
