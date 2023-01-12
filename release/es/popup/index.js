/*!
* rong-ui3 v0.0.1 Thu Jan 12 2023 17:43:35 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
import { p as preventscroll, c as createNamespace, _ as _export_sfc, w as withInstall } from "../_plugin-vue_export-helper.fbb6b36e.mjs";
import { defineComponent, ref, watch, computed, resolveComponent, resolveDirective, openBlock, createBlock, Teleport, normalizeClass, createCommentVNode, createVNode, Transition, withCtx, withDirectives, createElementBlock, normalizeStyle, renderSlot, vShow } from "vue";
import { O as Overlay, t as truthProp, m as makeObjectProp, a as makeStringProp, b as makeNumericProp, c as makeNumberProp } from "../index.268fb49d.mjs";
const { name, bem, prefixCls } = createNamespace("popup");
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
const _sfc_main = defineComponent({
  name,
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
      bem,
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
const _Popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Popup = withInstall(_Popup);
export {
  Popup,
  Popup as default,
  popupProps
};
