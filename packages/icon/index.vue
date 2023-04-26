<script lang="ts">
import { defineComponent, h, defineAsyncComponent } from 'vue';
import { createNamespace, kebabCase, makeStringProp, withInstall } from '../utils';
const { name } = createNamespace('icon');

const icons = {
  close: defineAsyncComponent(() => import('./close.vue')),
  'close-circle': defineAsyncComponent(() => import('./close-circle.vue')),
  loading: defineAsyncComponent(() => import('./loading.vue')),
  'arrow-up': defineAsyncComponent(() => import('./arrow-up.vue')),
  'arrow-down': defineAsyncComponent(() => import('./arrow-down.vue')),
  'arrow-left': defineAsyncComponent(() => import('./arrow-left.vue')),
  'arrow-right': defineAsyncComponent(() => import('./arrow-right.vue'))
};

export type IconType = keyof typeof icons;

const Icon = defineComponent({
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

export default withInstall(Icon);
</script>
