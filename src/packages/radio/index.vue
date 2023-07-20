<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive, h, onBeforeUnmount, withModifiers } from 'vue';

// Utils
import { createNamespace, withInstall, makeStringProp, RenderText, makeStyleProp } from '../utils';

// Components
import Icon from '../icon/index.vue';

// Composables
import { useInject } from '../composables';

// Keys
import { radioGroupKey } from '../radio-group/keys';

const { name, bem } = createNamespace('radio');

export const radioProps = {
  disabled: Boolean,
  textPosition: makeStringProp<'left' | 'right'>('right'),
  name: makeStringProp(''),
  shape: makeStringProp<'radio' | 'round' | 'square' | 'button'>('radio'),
  iconStyle: makeStyleProp(),
  labelDisabled: Boolean
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;

export const Radio = defineComponent({
  name,
  props: radioProps,
  components: {
    RenderText
  },
  emits: ['change', 'update:modelValue', 'clickLabel'],
  setup(props, { slots, emit }) {
    const { parent } = useInject(radioGroupKey);
    const classes = reactive({
      root: computed(() =>
        bem({
          reverse: props.textPosition === 'left',
          [props.shape]: true,
          horizontal: parent?.instance.props.direction === 'horizontal'
        })
      ),
      button: computed(() => bem('button', { checked: isChecked.value })),
      icon: computed(() => bem('icon', { disabled: isDisabled.value, checked: isChecked.value })),
      label: computed(() => bem('label', { disabled: isDisabled.value }))
    });

    const isChecked = computed(() => parent?.checked.value === props.name);
    const isDisabled = computed(() => !!parent?.instance.props.disabled || props.disabled);

    const renderButton = () => h('div', { class: classes.button }, slots.default?.());

    const IconMap: Record<string, any> = { square: 'check-square', round: 'check-circle', radio: 'radio-circle' };
    const IconActiveMap: Record<string, any> = {
      square: 'check-active-square',
      round: 'check-active-circle',
      radio: 'radio-active-circle'
    };
    const renderIcon = () => {
      const iconName = isChecked.value ? IconActiveMap[props.shape] : IconMap[props.shape];
      const iconSlot = isChecked.value ? slots.checkedIcon : slots.icon;
      return h(
        Icon,
        { class: classes.icon, name: iconName, style: props.iconStyle },
        {
          default: () => iconSlot?.({ checked: isChecked.value })
        }
      );
    };

    const renderLabel = () => {
      return h(
        'label',
        {
          class: classes.label,
          onClick: withModifiers((event: MouseEvent) => emit('clickLabel', event), [props.labelDisabled ? 'stop' : ''])
        },
        slots.default?.()
      );
    };

    const handleClick = () => {
      if (isDisabled.value) return;

      parent?.updateValue(props.name);
    };

    onBeforeUnmount(() => {
      if (parent && parent.checked.value === props.name) parent.updateValue('');
    });

    return () =>
      h(
        'div',
        { class: classes.root, onClick: handleClick },
        props.shape === 'button' ? renderButton() : [renderIcon(), renderLabel()]
      );
  }
});

export default withInstall(Radio);
</script>
