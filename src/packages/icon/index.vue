<script lang="ts">
import { defineComponent, h, defineAsyncComponent, type ExtractPropTypes } from 'vue';
import { createNamespace, kebabCase, makeStringProp, withInstall } from '../utils';
const { name } = createNamespace('icon');

const icons = {
  loading: defineAsyncComponent(() => import('./loading.vue')),
  close: defineAsyncComponent(() => import('./close.vue')),
  'close-circle': defineAsyncComponent(() => import('./close-circle.vue')),
  'close-mask': defineAsyncComponent(() => import('./close-mask.vue')),
  'arrow-up': defineAsyncComponent(() => import('./arrow-up.vue')),
  'arrow-down': defineAsyncComponent(() => import('./arrow-down.vue')),
  'arrow-left': defineAsyncComponent(() => import('./arrow-left.vue')),
  'arrow-right': defineAsyncComponent(() => import('./arrow-right.vue')),
  'question-circle': defineAsyncComponent(() => import('./question-circle.vue')),
  'check-active-circle': defineAsyncComponent(() => import('./check-active-circle.vue')),
  'check-circle': defineAsyncComponent(() => import('./check-circle.vue')),
  'check-disabled-circle': defineAsyncComponent(() => import('./check-disabled-circle.vue')),
  'check-square': defineAsyncComponent(() => import('./check-square.vue')),
  'check-active-square': defineAsyncComponent(() => import('./check-active-square.vue')),
  'radio-circle': defineAsyncComponent(() => import('./radio-circle.vue')),
  'radio-active-circle': defineAsyncComponent(() => import('./radio-active-circle.vue')),
  success: defineAsyncComponent(() => import('./success.vue')),
  fail: defineAsyncComponent(() => import('./fail.vue'))
};

export type IconType = keyof typeof icons;

export const iconProps = {
  name: makeStringProp<IconType>('close'),
  color: String,
  size: [String, Number]
};

export type IconProps = ExtractPropTypes<typeof iconProps>;

const Icon = defineComponent({
  name,
  props: iconProps,
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
