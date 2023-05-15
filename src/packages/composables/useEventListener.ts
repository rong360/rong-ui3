import { onMounted, onUnmounted, unref } from 'vue';
import type { Ref } from 'vue';
import type { D } from 'vitest/dist/global-732f9b14';

type DD = 'pushState' | 'replaceState';

// GlobalEventHandlersEventMap -> https://github.com/microsoft/TypeScript/blob/v3.7.5/lib/lib.dom.d.ts#L18434-L18532
export function useEventListener<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Ref,
  type: K,
  listener: (this: GlobalEventHandlers, ev: HTMLElementEventMap[K]) => any
): void;
export function useEventListener<K extends keyof WindowEventMap>(
  target: Window,
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any
): void;
export function useEventListener(target: any, type: any, listener: any): void {
  onMounted(() => unref(target).addEventListener(type, listener));
  onUnmounted(() => unref(target).addEventListener(type, listener));
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
