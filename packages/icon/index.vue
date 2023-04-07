<script lang="ts">
import { defineComponent, h, defineAsyncComponent } from 'vue';
import { createNamespace, kebabCase, makeStringProp } from '../utils';
const { name } = createNamespace('icon');

const icons = {
  close: defineAsyncComponent(() => import('./close.vue')),
  closeCircle: defineAsyncComponent(() => import('./close-circle.vue')),
  loading: defineAsyncComponent(() => import('./loading.vue'))
};

type IconType = keyof typeof icons;

export default defineComponent({
  name,
  props: {
    name: makeStringProp<IconType>('close'),
    color: String,
    size: [String, Number]
  },
  setup(props, { slots }) {
    return () =>
      h(
        (icons as Record<string, any>)[props.name],
        {
          class: `r-icon r-icon-${kebabCase(props.name)}`,
          style: {
            color: props.color,
            fontSize:
              typeof props.size === 'string'
                ? /^[0-9]*$/.test(props.size)
                  ? props.size + 'px'
                  : props.size
                : props.size + 'px'
          }
        },
        {
          default: () => slots.default?.()
        }
      );
  }
});
</script>
