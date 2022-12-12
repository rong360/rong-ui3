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
import type { DirectiveBinding } from "vue";

interface DirectiveTarget extends HTMLElement {
  __vueTouchstartHandle__: (e: TouchEvent) => void;
  __vueTouchmoveHandle__: (e: TouchEvent) => void;
}

export const preventscroll = {
  mounted(el: DirectiveTarget, binding: DirectiveBinding) {
    let currentScrollArea: HTMLElement | null;
    const mouseInfo = {
      startX: 0,
      startY: 0,
      direction: 0,
    };
    const searchScrollArea = (el: HTMLElement | null) => {
      let scrollArea = null;
      while (el) {
        if (el.className && el.className.indexOf && el.className.indexOf("scroll-area") > -1) {
          scrollArea = el;
          break;
        }
        el = el.parentNode as HTMLElement | null;
      }
      return scrollArea;
    };
    const touchstartHandler = (e: TouchEvent) => {
      currentScrollArea = searchScrollArea(e.target as HTMLElement);
      mouseInfo.startX = e.targetTouches[0].clientX;
      mouseInfo.startY = e.targetTouches[0].clientY;
    };
    const touchmoveHandler = (e: TouchEvent) => {
      mouseInfo.direction = getDirection(
        mouseInfo.startX,
        mouseInfo.startY,
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      );
      if (
        !currentScrollArea ||
        (currentScrollArea &&
          ((mouseInfo.direction == 2 && currentScrollArea.scrollTop == 0) ||
            (mouseInfo.direction == 1 &&
              currentScrollArea.scrollTop >= currentScrollArea.scrollHeight - currentScrollArea.offsetHeight)) &&
          e.cancelable)
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (typeof binding.value === "function") binding.value(e);
    };
    el.__vueTouchstartHandle__ = touchstartHandler;
    el.__vueTouchmoveHandle__ = touchmoveHandler;
    el.addEventListener("touchstart", el.__vueTouchstartHandle__, { passive: false });
    el.addEventListener("touchmove", el.__vueTouchmoveHandle__, { passive: false });
  },
  unmounted(el: DirectiveTarget) {
    el.removeEventListener("touchstart", el.__vueTouchstartHandle__);
    el.removeEventListener("touchmove", el.__vueTouchmoveHandle__);
  },
};

// 获得角度
function getAngle(angx: number, angy: number) {
  return (Math.atan2(angy, angx) * 180) / Math.PI;
}

// 根据起点终 点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx: number, starty: number, endx: number, endy: number) {
  const angx = endx - startx;
  const angy = endy - starty;
  let result = 0;

  // 如果滑动距离太短
  if (Math.abs(angx) < 5 && Math.abs(angy) < 5) {
    return result;
  }
  const angle = getAngle(angx, angy);
  if (angle >= -135 && angle <= -45) {
    result = 1;
  } else if (angle > 45 && angle < 135) {
    result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    result = 4;
  }
  return result;
}
