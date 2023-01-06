/*!
* rong-ui3 v0.0.1 Fri Jan 06 2023 18:43:11 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
import { p as preventscroll, c as createNamespace, _ as _export_sfc, w as withInstall } from "./_plugin-vue_export-helper.a7bd363e.mjs";
import { defineComponent, computed, resolveDirective, openBlock, createBlock, Transition, withCtx, withDirectives, createElementBlock, normalizeClass, normalizeStyle, renderSlot, vShow } from "vue";
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
const { name, bem, prefixCls } = createNamespace("overlay");
const overlayProps = {
  show: Boolean,
  className: String,
  customStyle: makeObjectProp(),
  zIndex: makeNumericProp(1e3),
  animate: truthProp,
  duration: makeNumberProp(0.5),
  transition: makeStringProp(`${prefixCls}-fade`),
  closeOnClickOverlay: truthProp
};
const _sfc_main = defineComponent({
  name,
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
      bem,
      onClick,
      style
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
const _Overlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Overlay = withInstall(_Overlay);
export {
  Overlay as O,
  makeStringProp as a,
  makeNumericProp as b,
  makeNumberProp as c,
  makeObjectProp as m,
  truthProp as t
};
