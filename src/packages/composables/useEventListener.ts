import { onMounted, onUnmounted, unref } from 'vue';
import type { Ref } from 'vue';

// GlobalEventHandlersEventMap -> https://github.com/microsoft/TypeScript/blob/v3.7.5/lib/lib.dom.d.ts#L18434-L18532
export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Ref,
  type: K,
  listener: (this: GlobalEventHandlers, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;
export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;
export function useEventListener<K extends keyof DocumentEventMap>(
  target: Document,
  type: K,
  listener: (this: GlobalEventHandlers, ev: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;
export function useEventListener(
  target: any,
  type: any,
  listener: any,
  options?: boolean | AddEventListenerOptions
): void {
  let el: any;
  onMounted(() => {
    el = unref(target);
    el.addEventListener(type, listener, options);
  });
  onUnmounted(() => {
    el.removeEventListener(type, listener, options);
    el = null;
  });
}

export function useCustomEvent(target: Window, type: string, listener: (event: CustomEventInit) => void) {
  const dispatchEvent = (detail: any) => target.dispatchEvent(new CustomEvent(type, { detail }));
  onMounted(() => {
    target.addEventListener(type, listener);
    // 在调用 pushState / replaceState 时同时触发自定义事件
    const { history } = target;
    const pushState = history.pushState;
    const replaceState = history.replaceState;
    history.pushState = function (state: any, title: string, url?: string | null) {
      pushState.call(history, state, title, url);
      dispatchEvent({ state, url });
    };
    history.replaceState = function (state: any, title: string, url?: string | null) {
      replaceState.call(history, state, title, url);
      dispatchEvent({ state, url });
    };
  });
  onUnmounted(() => target.removeEventListener(type, listener));
}
