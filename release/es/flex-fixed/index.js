/*!
* rong-ui3 v0.0.1 Thu Jan 12 2023 17:43:35 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
import { p as preventscroll, c as createNamespace, _ as _export_sfc, w as withInstall } from "../_plugin-vue_export-helper.fbb6b36e.mjs";
import { defineComponent, toRefs, reactive, ref, onMounted, onUnmounted, resolveDirective, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode } from "vue";
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
export {
  FlexFixed,
  FlexFixed as default
};
