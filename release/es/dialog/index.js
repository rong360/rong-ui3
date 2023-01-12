/*!
* rong-ui3 v0.0.1 Thu Jan 12 2023 17:43:35 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
import { c as createNamespace, _ as _export_sfc, w as withInstall } from "../_plugin-vue_export-helper.fbb6b36e.mjs";
import { getCurrentInstance, defineComponent, ref, watch, onMounted, onUnmounted, useCssVars, resolveComponent, openBlock, createBlock, withCtx, createTextVNode, createApp } from "vue";
import { popupProps, Popup } from "../popup/index.js";
import "../index.268fb49d.mjs";
function useCurrentInstance() {
  const { appContext } = getCurrentInstance();
  const globalProperties = appContext.config.globalProperties;
  return {
    globalProperties,
    appContext
  };
}
const { name, bem } = createNamespace("dialog");
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
  name,
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
      bem,
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
const _Dialog = /* @__PURE__ */ _export_sfc(__default__, [["render", _sfc_render]]);
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
export {
  $dialog,
  Dialog,
  Dialog as default
};
