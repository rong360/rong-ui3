import { render, createVNode, type VNode } from 'vue';
import Toast, { type ToastProps } from './index.vue';
import type { ToastType } from './types';

export interface ToastOptions extends Partial<ToastProps> {
  type?: ToastType;
  onClickOverlay?: (this: ToastRet) => void;
  slots?: {
    default?: () => string | VNode;
    icon?: () => string | VNode;
  };
}

export type ToastRet = {
  remove: () => void;
  setMessage: (message: string | VNode) => void;
  vNode: VNode;
};

const parseOptions = (options: string | ToastOptions = {}) =>
  typeof options === 'string' ? { message: options } : options;

const defaultOptionsMap: Record<ToastType, ToastOptions> = {
  loading: { type: 'loading', icon: 'loading', message: '加载中...', duration: 0 },
  success: { type: 'success', icon: 'success' },
  fail: { type: 'fail', icon: 'fail' },
  long: { type: 'long' },
  default: { type: 'default' }
};

export const showToast = (options: string | ToastOptions): ToastRet => {
  const { onClickOverlay, type, ...restOptions } = parseOptions(options);
  const newRestOptions = Object.assign({}, defaultOptionsMap['default'], type && defaultOptionsMap[type], restOptions);

  const vNode = createVNode(
    Toast,
    {
      show: true,
      from$toast: true,
      onClickOverlay: () => onClickOverlay && onClickOverlay.call(ret),
      ...newRestOptions
    },
    newRestOptions.slots
  );

  render(vNode, document.body);

  const remove = () => ((vNode?.component?.proxy as any).isToastShow = false);
  const setMessage = (message: string | VNode) => ((vNode?.component?.props as any).message = message);
  const ret: ToastRet = { remove, vNode, setMessage };

  return ret;
};

const createToast = (type: ToastType) => (options?: string | ToastOptions) =>
  showToast(Object.assign({ type }, parseOptions(options)));

export const showLoadingToast = createToast('loading');
export const showSuccessToast = createToast('success');
export const showFailToast = createToast('fail');
export const showLongToast = createToast('long');

export function setToastDefaultOptions(options: ToastOptions): void;
export function setToastDefaultOptions(type: ToastType, options: ToastOptions): void;
export function setToastDefaultOptions(type: ToastType | ToastOptions, options: ToastOptions = {}) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = Object.assign(defaultOptionsMap[type]!, options);
  } else {
    defaultOptionsMap['default'] = Object.assign(defaultOptionsMap['default']!, type);
  }
}
