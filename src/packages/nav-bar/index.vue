<script lang="ts">
import { defineComponent, createVNode } from 'vue';
import { createNamespace, withInstall } from '../utils';
import NavBarVue, { navBarProps, navBarEmits } from './nav-bar.vue';

const { name } = createNamespace('nav-bar');

const NavBar = defineComponent({
  inheritAttrs: false,
  name,
  props: navBarProps,
  emits: navBarEmits,
  setup(props, { emit, attrs, slots }) {
    const data = {
      ...props,
      ...attrs,
      onClickLeft: (e: MouseEvent) => emit('clickLeft', e),
      onClickRight: (e: MouseEvent) => emit('clickRight', e)
    };
    return () =>
      props.fixed && props.placeholder
        ? [
            createVNode(NavBarVue, { ...data, fixed: true, placeholder: false }, slots),
            createVNode(NavBarVue, { ...data, fixed: false, placeholder: true }, slots)
          ]
        : createVNode(NavBarVue, { ...data, fixed: false, placeholder: false }, slots);
  }
});

export default withInstall(NavBar);
</script>
