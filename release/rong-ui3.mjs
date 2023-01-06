/*!
* rong-ui3 v0.0.1 Fri Jan 06 2023 18:43:08 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
import { defineComponent, computed, resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createElementBlock, normalizeClass, normalizeStyle, renderSlot, vShow, ref, watch, resolveComponent, Teleport, createCommentVNode, createVNode, getCurrentInstance, onMounted, onUnmounted, useCssVars, createTextVNode, createApp, toRefs, reactive, createElementVNode } from "vue";
function genBem(name2, mods) {
  if (!mods)
    return "";
  if (typeof mods == "string")
    return ` ${name2}--${mods.toLowerCase()}`;
  if (mods instanceof Array) {
    return mods.reduce((ret, item) => ret + genBem(name2, item), "");
  }
  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name2, key) : ""),
    ""
  );
}
function createBEM(name2) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name2}__${el}` : name2;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace(name2) {
  const prefixedName = `r-${name2}`;
  return {
    name: prefixedName,
    prefixedName,
    prefixCls: prefixedName,
    bem: createBEM(prefixedName)
  };
}
const withInstall = (comp) => {
  comp.install = (app) => {
    const { name: name2 } = comp;
    if (name2) {
      app.component(camelize(`-${name2}`), comp);
    }
  };
  return comp;
};
const numericProp = [Number, String];
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
const makeNumberProp = (defaultVal) => ({
  type: Number,
  default: defaultVal
});
const makeNumericProp = (defaultVal) => ({
  type: numericProp,
  default: defaultVal
});
const makeObjectProp = (defaultVal) => ({
  type: Object,
  default: () => defaultVal || {}
});
const truthProp = {
  type: Boolean,
  default: true
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
const { name: name$3, bem: bem$3, prefixCls: prefixCls$1 } = createNamespace("overlay");
const overlayProps = {
  show: Boolean,
  className: String,
  customStyle: makeObjectProp(),
  zIndex: makeNumericProp(1e3),
  animate: truthProp,
  duration: makeNumberProp(0.5),
  transition: makeStringProp(`${prefixCls$1}-fade`),
  closeOnClickOverlay: truthProp
};
const _sfc_main$2 = defineComponent({
  name: name$3,
  props: overlayProps,
  emits: ["click", "update:show"],
  directives: { preventscroll },
  setup(props, { emit }) {
    const onClick = (e) => {
      emit("click", e);
      if (props.closeOnClickOverlay) {
        emit("update:show", false);
      }
    };
    const style = computed(() => {
      return Object.assign(
        {
          transitionDuration: `${props.duration}s`,
          zIndex: props.zIndex
        },
        props.customStyle
      );
    });
    return {
      bem: bem$3,
      onClick,
      style
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_preventscroll = resolveDirective("preventscroll");
  return openBlock(), createBlock(Transition, {
    name: _ctx.transition,
    css: _ctx.animate,
    appear: ""
  }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.bem()),
        style: normalizeStyle(_ctx.style),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6)), [
        [_directive_preventscroll],
        [vShow, _ctx.show]
      ])
    ]),
    _: 3
  }, 8, ["name", "css"]);
}
const _Overlay = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$3]]);
const Overlay = withInstall(_Overlay);
const { name: name$2, bem: bem$2, prefixCls } = createNamespace("popup");
const popupProps = {
  show: Boolean,
  overlay: truthProp,
  overlayClass: String,
  overlayStyle: makeObjectProp(),
  overlayTransition: String,
  closeOnClickOverlay: truthProp,
  position: makeStringProp("center"),
  round: Boolean,
  popupStyle: makeObjectProp(),
  popupClass: [String, Array, Object],
  zIndex: makeNumericProp(1e3),
  teleport: [String, Element],
  animate: truthProp,
  duration: makeNumberProp(0.5),
  transition: String
};
const _sfc_main$1 = defineComponent({
  name: name$2,
  props: popupProps,
  emits: ["clickOverlay", "update:show", "opened", "closed", "open", "close"],
  directives: { preventscroll },
  components: { Overlay },
  setup(props, { emit }) {
    const showPopup = ref(props.show);
    watch(
      () => props.show,
      (newVal) => {
        showPopup.value = newVal;
      }
    );
    const beforeEnter = () => {
      emit("open");
    };
    const afterEnter = () => {
      emit("opened");
    };
    const beforeLeave = () => {
      emit("close");
    };
    const afterLeave = () => {
      emit("closed");
      emit("update:show", false);
    };
    const clickOverlay = (e) => {
      emit("clickOverlay", e);
    };
    const style = computed(() => {
      return Object.assign(
        {
          [props.position === "center" ? "animationDuration" : "transitionDuration"]: `${props.duration}s`,
          zIndex: props.zIndex
        },
        props.popupStyle
      );
    });
    const transitionName = computed(() => {
      return props.transition || `${prefixCls}-${props.position === "center" ? "bounce" : props.position}`;
    });
    return {
      bem: bem$2,
      showPopup,
      beforeEnter,
      afterEnter,
      beforeLeave,
      afterLeave,
      clickOverlay,
      style,
      transitionName
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Overlay = resolveComponent("Overlay");
  const _directive_preventscroll = resolveDirective("preventscroll");
  return openBlock(), createBlock(Teleport, {
    to: _ctx.teleport,
    disabled: _ctx.teleport === void 0
  }, [
    _ctx.overlay ? (openBlock(), createBlock(_component_Overlay, {
      key: 0,
      class: normalizeClass(_ctx.overlayClass),
      "custom-style": _ctx.overlayStyle,
      "close-on-click-overlay": _ctx.closeOnClickOverlay,
      animate: _ctx.animate,
      duration: _ctx.duration,
      transition: _ctx.overlayTransition,
      "z-index": _ctx.zIndex,
      onClick: _ctx.clickOverlay,
      show: _ctx.showPopup,
      "onUpdate:show": _cache[0] || (_cache[0] = ($event) => _ctx.showPopup = $event)
    }, null, 8, ["class", "custom-style", "close-on-click-overlay", "animate", "duration", "transition", "z-index", "onClick", "show"])) : createCommentVNode("", true),
    createVNode(Transition, {
      css: _ctx.animate,
      name: _ctx.transitionName,
      onBeforeEnter: _ctx.beforeEnter,
      onAfterEnter: _ctx.afterEnter,
      onBeforeLeave: _ctx.beforeLeave,
      onAfterLeave: _ctx.afterLeave,
      appear: ""
    }, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass([_ctx.bem({ round: _ctx.round, [_ctx.position]: true }), _ctx.popupClass]),
          style: normalizeStyle(_ctx.style)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)), [
          [_directive_preventscroll],
          [vShow, _ctx.showPopup]
        ])
      ]),
      _: 3
    }, 8, ["css", "name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const _Popup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$2]]);
const Popup = withInstall(_Popup);
function useCurrentInstance() {
  const { appContext } = getCurrentInstance();
  const globalProperties = appContext.config.globalProperties;
  return {
    globalProperties,
    appContext
  };
}
const { name: name$1, bem: bem$1 } = createNamespace("dialog");
const dialogProps = {
  ...popupProps,
  message: [String, Object, Function],
  className: [String, Array, Object],
  removeDialogOnHashChange: {
    type: Boolean,
    default: true
  }
};
const __default__ = defineComponent({
  name: name$1,
  props: dialogProps,
  components: {
    Popup
  },
  emits: ["clickOverlay", "update:show"],
  setup(props, { emit }) {
    const { globalProperties, appContext } = useCurrentInstance();
    const showDialog = ref(props.show);
    watch(
      () => props.show,
      (newValue) => {
        showDialog.value = newValue;
      }
    );
    const unmountDialog = () => appContext.app.unmount();
    onMounted(() => {
      if (props.removeDialogOnHashChange && globalProperties.from$dialog) {
        window.addEventListener("hashchange", unmountDialog);
        window.addEventListener("pushstate", unmountDialog);
        window.addEventListener("replacestate", unmountDialog);
        window.addEventListener("popstate", unmountDialog);
      }
    });
    onUnmounted(() => {
      if (props.removeDialogOnHashChange && globalProperties.from$dialog) {
        window.removeEventListener("hashchange", unmountDialog);
        window.removeEventListener("pushstate", unmountDialog);
        window.removeEventListener("replacestate", unmountDialog);
        window.removeEventListener("popstate", unmountDialog);
      }
    });
    const clickOverlay = (e) => {
      emit("clickOverlay", e);
    };
    const PopupClosed = () => {
      if (globalProperties.from$dialog)
        appContext.app.unmount();
      emit("update:show", false);
    };
    return {
      bem: bem$1,
      showDialog,
      clickOverlay,
      PopupClosed
    };
  }
});
const __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "18e92a65": _ctx.distance
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const dialog_vue_vue_type_style_index_0_lang = "";
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Popup = resolveComponent("Popup");
  return openBlock(), createBlock(_component_Popup, {
    animate: _ctx.animate,
    round: _ctx.round,
    teleport: _ctx.teleport,
    position: _ctx.position,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    "popup-class": [`${_ctx.bem()}`, _ctx.className],
    "overlay-class": _ctx.overlayClass,
    "overlay-style": _ctx.overlayStyle,
    onClickOverlay: _ctx.clickOverlay,
    onClosed: _ctx.PopupClosed,
    show: _ctx.showDialog,
    "onUpdate:show": _cache[0] || (_cache[0] = ($event) => _ctx.showDialog = $event)
  }, {
    default: withCtx(() => [
      createTextVNode(" \u6536\u5230\u5206\u8EAB\u4E4F\u672F\u5730\u65B9 ")
    ]),
    _: 1
  }, 8, ["animate", "round", "teleport", "position", "close-on-click-overlay", "popup-class", "overlay-class", "overlay-style", "onClickOverlay", "onClosed", "show"]);
}
const _Dialog = /* @__PURE__ */ _export_sfc(__default__, [["render", _sfc_render$1]]);
const $dialog = (options, components) => {
  options = Object.assign(
    {
      show: true,
      round: true
    },
    options
  );
  const frag = document.createDocumentFragment();
  const app = createApp(_Dialog, options);
  app.config.globalProperties.from$dialog = true;
  components.forEach((component) => app.use(component));
  const vm = app.mount(frag);
  document.body.append(frag);
  const remove = () => vm.showDialog = false;
  return {
    remove,
    vm,
    app
  };
};
const Dialog = withInstall(_Dialog);
const { name, bem } = createNamespace("flex-fixed");
function scrollDirection(scrollTop, maxScrollTop, preScrollTop) {
  let direction = "";
  if (scrollTop > preScrollTop) {
    direction = "up";
  } else if (scrollTop < preScrollTop) {
    direction = "down";
  } else {
    direction = "";
  }
  if (scrollTop <= 0) {
    direction = "down";
  } else if (scrollTop >= maxScrollTop) {
    direction = "up";
  }
  return direction;
}
const _sfc_main = defineComponent({
  name,
  props: {
    hideFooterOnKeyboardShow: {
      type: Boolean
    },
    useFixed: {
      type: Boolean
    }
  },
  emits: ["scroll", "scroll-debounce"],
  directives: {
    preventscroll
  },
  setup(props, { emit }) {
    toRefs(props);
    const mainInfo = reactive({
      scrollTop: 0,
      maxScrollTop: 0,
      prevScrollTop: 0
    });
    let scrollTimer;
    function touchstartMain(e) {
      const mainEl = e.currentTarget;
      mainInfo.maxScrollTop = mainEl.scrollHeight - mainEl.offsetHeight;
    }
    function onScroll(e) {
      const mainEl = e.currentTarget;
      mainInfo.scrollTop = mainEl.scrollTop;
      const mainScrollDirection = scrollDirection(mainInfo.scrollTop, mainInfo.maxScrollTop, mainInfo.prevScrollTop);
      mainInfo.prevScrollTop = mainInfo.scrollTop;
      const scrollInfo = {
        scrollTop: mainInfo.scrollTop,
        maxScrollTop: mainInfo.maxScrollTop,
        direction: mainScrollDirection
      };
      if (scrollTimer)
        clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        emit("scroll-debounce", scrollInfo);
      }, 150);
      emit("scroll", scrollInfo);
    }
    const showFooter = ref(true);
    const docHeight = ref(0);
    function hideFooterOnScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      showFooter.value = scrollTop <= 0;
    }
    function hideFooterOnResize() {
      const _docHeight = document.documentElement.clientHeight;
      showFooter.value = _docHeight / docHeight.value > 0.8;
    }
    onMounted(() => {
      docHeight.value = document.documentElement.clientHeight;
      document.addEventListener("scroll", hideFooterOnScroll, false);
      window.addEventListener("resize", hideFooterOnResize, false);
    });
    onUnmounted(() => {
      document.removeEventListener("scroll", hideFooterOnScroll, false);
      window.removeEventListener("resize", hideFooterOnResize, false);
    });
    return {
      bem,
      onScroll,
      touchstartMain,
      showFooter
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_preventscroll = resolveDirective("preventscroll");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.bem({ useFixed: _ctx.useFixed }))
  }, [
    createElementVNode("header", {
      class: normalizeClass(_ctx.bem("header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2),
    createElementVNode("main", {
      class: normalizeClass([_ctx.bem("main"), "scroll-area"]),
      onTouchstartPassive: _cache[0] || (_cache[0] = (...args) => _ctx.touchstartMain && _ctx.touchstartMain(...args)),
      onScrollPassive: _cache[1] || (_cache[1] = (...args) => _ctx.onScroll && _ctx.onScroll(...args))
    }, [
      _ctx.useFixed ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.bem("headercopy"))
      }, [
        renderSlot(_ctx.$slots, "header")
      ], 2)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default"),
      _ctx.useFixed ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.bem("footercopy"))
      }, [
        renderSlot(_ctx.$slots, "footer")
      ], 2)) : createCommentVNode("", true)
    ], 34),
    _ctx.showFooter ? (openBlock(), createElementBlock("footer", {
      key: 0,
      class: normalizeClass(_ctx.bem("footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("", true)
  ], 2)), [
    [_directive_preventscroll]
  ]);
}
const _FlexFixed = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const FlexFixed = withInstall(_FlexFixed);
const index$4 = "";
const index$3 = "";
const index$2 = "";
const index$1 = "";
const install = (app) => {
  const components = [Dialog, FlexFixed, Overlay, Popup];
  components.forEach((component) => {
    app.use(component);
  });
};
const version = "0.0.1";
const index = { install, version };
export {
  $dialog,
  Dialog,
  FlexFixed,
  Overlay,
  Popup,
  index as default,
  install,
  popupProps,
  version
};
