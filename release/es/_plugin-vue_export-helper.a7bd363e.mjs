/*!
* rong-ui3 v0.0.1 Fri Jan 06 2023 18:43:11 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
function genBem(name, mods) {
  if (!mods)
    return "";
  if (typeof mods == "string")
    return ` ${name}--${mods.toLowerCase()}`;
  if (mods instanceof Array) {
    return mods.reduce((ret, item) => ret + genBem(name, item), "");
  }
  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name, key) : ""),
    ""
  );
}
function createBEM(name) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name}__${el}` : name;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace(name) {
  const prefixedName = `r-${name}`;
  return {
    name: prefixedName,
    prefixedName,
    prefixCls: prefixedName,
    bem: createBEM(prefixedName)
  };
}
const withInstall = (comp) => {
  comp.install = (app) => {
    const { name } = comp;
    if (name) {
      app.component(camelize(`-${name}`), comp);
    }
  };
  return comp;
};
const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
const preventscroll = {
  mounted(el, binding) {
    let currentScrollArea;
    const mouseInfo = {
      startX: 0,
      startY: 0,
      direction: 0
    };
    const searchScrollArea = (el2) => {
      let scrollArea = null;
      while (el2) {
        if (el2.className && el2.className.indexOf && el2.className.indexOf("scroll-area") > -1) {
          scrollArea = el2;
          break;
        }
        el2 = el2.parentNode;
      }
      return scrollArea;
    };
    const touchstartHandler = (e) => {
      currentScrollArea = searchScrollArea(e.target);
      mouseInfo.startX = e.targetTouches[0].clientX;
      mouseInfo.startY = e.targetTouches[0].clientY;
    };
    const touchmoveHandler = (e) => {
      mouseInfo.direction = getDirection(
        mouseInfo.startX,
        mouseInfo.startY,
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      );
      if (!currentScrollArea || currentScrollArea && (mouseInfo.direction == 2 && currentScrollArea.scrollTop == 0 || mouseInfo.direction == 1 && currentScrollArea.scrollTop >= currentScrollArea.scrollHeight - currentScrollArea.offsetHeight) && e.cancelable) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (typeof binding.value === "function")
        binding.value(e);
    };
    el.__vueTouchstartHandle__ = touchstartHandler;
    el.__vueTouchmoveHandle__ = touchmoveHandler;
    el.addEventListener("touchstart", el.__vueTouchstartHandle__, { passive: false });
    el.addEventListener("touchmove", el.__vueTouchmoveHandle__, { passive: false });
  },
  unmounted(el) {
    el.removeEventListener("touchstart", el.__vueTouchstartHandle__);
    el.removeEventListener("touchmove", el.__vueTouchmoveHandle__);
  }
};
function getAngle(angx, angy) {
  return Math.atan2(angy, angx) * 180 / Math.PI;
}
function getDirection(startx, starty, endx, endy) {
  const angx = endx - startx;
  const angy = endy - starty;
  let result = 0;
  if (Math.abs(angx) < 5 && Math.abs(angy) < 5) {
    return result;
  }
  const angle = getAngle(angx, angy);
  if (angle >= -135 && angle <= -45) {
    result = 1;
  } else if (angle > 45 && angle < 135) {
    result = 2;
  } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    result = 4;
  }
  return result;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  createNamespace as c,
  preventscroll as p,
  withInstall as w
};
