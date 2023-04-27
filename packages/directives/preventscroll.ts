/**
 * v-preventscroll
 * @desc 阻止页面滚动，需要滚动的区域可通过加'.scroll-area'样式实现
 * @example
 * ```vue
 * <div v-preventscroll="handleMove">
 *  <p>test</p>
 *  <div class="scroll-area"></div>
 *  <p>test</p>
 * </div>
 * ```
 */
import type { DirectiveBinding } from 'vue';
import { getDirection } from '../utils';

interface DirectiveTarget extends HTMLElement {
  __vueTouchstartHandle__: (e: TouchEvent) => void;
  __vueTouchmoveHandle__: (e: TouchEvent) => void;
}
export const preventscroll = {
  mounted(el: DirectiveTarget, binding: DirectiveBinding) {
    let currentScrollArea: HTMLElement | null | undefined;
    const mouse = {
      startX: 0,
      startY: 0,
      direction: 0
    };
    // const searchScrollArea = (el: HTMLElement | null) => {
    //   let scrollArea = null;
    //   while (el) {
    //     if (el.className && el.className.indexOf && el.className.indexOf('scroll-area') > -1) {
    //       scrollArea = el;
    //       break;
    //     }
    //     el = el.parentNode as HTMLElement | null;
    //   }
    //   return scrollArea;
    // };
    const searchScrollArea = (target: HTMLElement | null) => {
      return [].find.call(el.querySelectorAll('.scroll-area'), (scrollArea: HTMLElement) =>
        scrollArea.contains(target)
      );
    };
    const touchstartHandler = (e: TouchEvent) => {
      currentScrollArea = searchScrollArea(e.target as HTMLElement);
      mouse.startX = e.targetTouches[0].clientX;
      mouse.startY = e.targetTouches[0].clientY;
    };
    const touchmoveHandler = (e: TouchEvent) => {
      mouse.direction = getDirection(
        mouse.startX,
        mouse.startY,
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      );
      if (
        !currentScrollArea ||
        (currentScrollArea &&
          ((mouse.direction == 2 && currentScrollArea.scrollTop == 0) ||
            (mouse.direction == 1 &&
              currentScrollArea.scrollTop >= currentScrollArea.scrollHeight - currentScrollArea.offsetHeight)) &&
          e.cancelable)
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (typeof binding.value === 'function') binding.value(e);
    };
    el.__vueTouchstartHandle__ = touchstartHandler;
    el.__vueTouchmoveHandle__ = touchmoveHandler;
    el.addEventListener('touchstart', el.__vueTouchstartHandle__, { passive: false });
    el.addEventListener('touchmove', el.__vueTouchmoveHandle__, { passive: false });
  },
  unmounted(el: DirectiveTarget) {
    el.removeEventListener('touchstart', el.__vueTouchstartHandle__);
    el.removeEventListener('touchmove', el.__vueTouchmoveHandle__);
  }
};
