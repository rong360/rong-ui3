<template>
  <div :class="bem({ useFixed })" v-preventscroll>
    <header :class="bem('header')">
      <slot name="header"></slot>
    </header>
    <main :class="bem('main')" class="scroll-area" @touchstart.passive="touchstartMain" @scroll.passive="onScroll">
      <div :class="bem('headercopy')" v-if="useFixed">
        <slot name="header"></slot>
      </div>
      <slot></slot>
      <div :class="bem('footercopy')" v-if="useFixed">
        <slot name="footer"></slot>
      </div>
    </main>
    <footer :class="bem('footer')" v-if="showFooter">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, onMounted, onUnmounted } from 'vue';
import { createNamespace } from '../utils';
import { preventscroll } from '../directives';

const { name, bem } = createNamespace('flex-fixed');

function scrollDirection(scrollTop: number, maxScrollTop: number, preScrollTop: number) {
  let direction = '';
  if (scrollTop > preScrollTop) {
    direction = 'up';
  } else if (scrollTop < preScrollTop) {
    direction = 'down';
  } else {
    direction = '';
  }
  if (scrollTop <= 0) {
    direction = 'down';
  } else if (scrollTop >= maxScrollTop) {
    direction = 'up';
  }
  return direction;
}

export default defineComponent({
  name,
  props: {
    hideFooterOnKeyboardShow: {
      type: Boolean
    },
    // header、footer采用position: fixed方式固定
    useFixed: {
      type: Boolean
    }
  },
  emits: ['scroll', 'scroll-debounce'],
  directives: {
    preventscroll
  },
  setup(props, { emit }) {
    const { useFixed } = toRefs(props);

    // --- touchmove on main element ---
    const mainInfo = reactive({
      scrollTop: 0,
      maxScrollTop: 0,
      prevScrollTop: 0
    });
    let scrollTimer: number;
    function touchstartMain(e: Event) {
      const mainEl = e.currentTarget as HTMLElement;
      mainInfo.maxScrollTop = mainEl.scrollHeight - mainEl.offsetHeight;
    }
    function onScroll(e: Event) {
      const mainEl = e.currentTarget as HTMLElement;
      mainInfo.scrollTop = mainEl.scrollTop;

      const mainScrollDirection = scrollDirection(mainInfo.scrollTop, mainInfo.maxScrollTop, mainInfo.prevScrollTop);
      mainInfo.prevScrollTop = mainInfo.scrollTop;

      // 抛出main滚动信息
      const scrollInfo = {
        scrollTop: mainInfo.scrollTop,
        maxScrollTop: mainInfo.maxScrollTop,
        direction: mainScrollDirection
      };
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        emit('scroll-debounce', scrollInfo);
      }, 150);
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
      document.addEventListener('scroll', hideFooterOnScroll, false); // ios
      window.addEventListener('resize', hideFooterOnResize, false); // android
    });
    onUnmounted(() => {
      document.removeEventListener('scroll', hideFooterOnScroll, false);
      window.removeEventListener('resize', hideFooterOnResize, false);
    });

    return {
      bem,
      onScroll,
      touchstartMain,
      showFooter
    };
  }
});
</script>
