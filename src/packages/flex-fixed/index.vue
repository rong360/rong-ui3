<template>
  <div :class="classes.root" v-preventscroll>
    <header :class="classes.header">
      <slot name="header"></slot>
    </header>
    <main :class="classes.main" class="scroll-area" @touchstart.passive="touchstartMain" @scroll.passive="onScroll">
      <div :class="classes['header-copy']" v-if="useFixed">
        <slot name="header"></slot>
      </div>
      <slot></slot>
      <div :class="classes['footer-copy']" v-if="useFixed">
        <slot name="footer"></slot>
      </div>
    </main>
    <footer :class="classes.footer" v-if="showFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, computed } from 'vue';
import { createNamespace, withInstall, makeBooleanProp } from '../utils';
import { preventscroll } from '../directives';
import { useEventListener } from '../composables';

const { name, bem } = createNamespace('flex-fixed');

const FlexFixed = defineComponent({
  name,
  props: {
    hideFooterOnKeyboardShow: makeBooleanProp(false),
    // header、footer采用position: fixed方式固定
    useFixed: makeBooleanProp(false)
  },
  emits: ['scroll', 'scroll-debounce'],
  directives: {
    preventscroll
  },
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem({ usefixed: props.useFixed })),
      header: computed(() => bem('header')),
      main: computed(() => bem('main')),
      footer: computed(() => bem('footer')),
      'header-copy': computed(() => bem('header-copy')),
      'footer-copy': computed(() => bem('footer-copy'))
    });

    // --- touchmove on main element ---
    const scrollInfo = reactive({
      scrollTop: 0,
      maxScrollTop: 0,
      prevScrollTop: 0,
      direction: ''
    });
    let scrollTimer: number;
    function touchstartMain(e: TouchEvent) {
      const mainEl = e.currentTarget as HTMLElement;
      scrollInfo.maxScrollTop = mainEl.scrollHeight - mainEl.offsetHeight;
    }
    function onScroll(e: TouchEvent) {
      const mainEl = e.currentTarget as HTMLElement;

      if (!scrollInfo.maxScrollTop) scrollInfo.maxScrollTop = mainEl.scrollHeight - mainEl.offsetHeight;

      scrollInfo.scrollTop = Math.min(Math.max(0, mainEl.scrollTop), scrollInfo.maxScrollTop);

      scrollInfo.direction = scrollInfo.scrollTop > scrollInfo.prevScrollTop ? 'up' : 'down';
      if (scrollInfo.scrollTop >= scrollInfo.maxScrollTop) scrollInfo.direction = 'up';

      scrollInfo.prevScrollTop = scrollInfo.scrollTop;

      // 抛出main滚动信息
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        emit('scroll-debounce', scrollInfo);
      }, 100);
      emit('scroll', scrollInfo);
    }

    // --- 弹出键盘时隐藏footer ---
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
    });
    useEventListener(document, 'scroll', hideFooterOnScroll, false); // ios
    useEventListener(window, 'resize', hideFooterOnResize, false); // android

    return {
      bem,
      classes,
      onScroll,
      touchstartMain,
      showFooter
    };
  }
});

export default withInstall(FlexFixed);
</script>
