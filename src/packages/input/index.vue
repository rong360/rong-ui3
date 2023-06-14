<template>
  <div :class="classes.root" @click="onClick">
    <slot name="left"></slot>
    <input
      v-bind="inputAttrs"
      ref="inputRef"
      :class="classes.input"
      :id="elementId"
      :value="modelValue"
      :maxlength="maxLength"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @compositionstart="onCompositionStart"
      @compositionend="onCompositionEnd"
    />
    <r-icon name="close-mask" :class="classes.clear" @click="onClear" v-show="showClear">
      <slot name="clear"></slot>
    </r-icon>
    <slot name="right"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive, inject, ref, type PropType } from 'vue';
import {
  createNamespace,
  withInstall,
  makeStringProp,
  makeBooleanProp,
  makeStringNumberProp,
  formatNumber,
  objectAssign
} from '../utils';
import Icon from '../icon/index.vue';
import type { HTMLInput, InputFormatTrigger } from './type';

const { name, bem } = createNamespace('input');

export const inputProps = {
  type: makeStringProp<'text' | 'number' | 'digit' | 'tel' | 'email' | 'password' | 'search' | 'url'>('text'),
  modelValue: makeStringNumberProp(''),
  elementId: makeStringProp(''),
  clearable: makeBooleanProp(),
  showClearIconAlways: makeBooleanProp(),
  disabled: makeBooleanProp(),
  readonly: makeBooleanProp(),
  autofocus: makeBooleanProp(),
  maxLength: makeStringNumberProp(),
  placeholder: makeStringProp(''),
  autocomplete: makeStringProp('off'),
  inputAlign: makeStringProp<'left' | 'right'>(),
  decimal: makeStringNumberProp(0), // 小数点后保留的位数，默认为 0
  padZero: makeBooleanProp(false), // 是否用 0 在小数点后面补齐不足的位数，默认为 false
  formatter: Function as PropType<(value: string) => string>,
  formatTrigger: makeStringProp<InputFormatTrigger>('onInput')
};

export type InputProps = ExtractPropTypes<typeof inputProps>;

const Input = defineComponent({
  name,
  props: inputProps,
  emits: ['update:modelValue', 'blur', 'focus', 'clear', 'input', 'click'],
  expose: ['focus', 'blur', 'select'],
  components: {
    [Icon.name]: Icon
  },
  setup(props, { emit, slots }) {
    const formItem = inject('form-item', null) as any;
    const form = inject('form', null) as any;

    const computedProps = computed(() => objectAssign({}, form && form.props, formItem && formItem.props, props));

    const classes = reactive({
      root: computed(() =>
        bem({
          'show-clear': showClear.value
        })
      ),
      input: computed(() =>
        bem('input', {
          'has-left-slot': !!slots.left,
          'has-right-slot': !!slots.right,
          [props.inputAlign || computedProps.value.valueAlign]: true
        })
      ),
      clear: computed(() => bem('clear'))
    });

    const state = reactive({
      isFocused: false,
      blurTimer: null as any
    });

    const inputRef = ref<HTMLInputElement>();
    const elementId = computed(() => props.elementId || (formItem && formItem.labelFor.value));
    const showClear = computed(
      () =>
        computedProps.value.showClearIconAlways ||
        (computedProps.value.clearable && state.isFocused && props.modelValue != '')
    );
    const inputAttrs = computed(() => {
      let type = props.type;
      let inputmode = 'text';
      if (props.type === 'number') {
        type = 'text';
        inputmode = 'decimal';
      } else if (props.type === 'digit') {
        type = 'tel';
        inputmode = 'numeric';
      } else if (props.type === 'email') {
        inputmode = 'email';
      } else if (props.type === 'tel') {
        inputmode = 'tel';
      } else if (props.type === 'search') {
        inputmode = 'search';
      } else if (props.type === 'url') {
        inputmode = 'url';
      }
      const attrs: Record<string, any> = {
        type,
        inputmode
      };
      return attrs;
    });

    const onInput = (event: Event) => {
      const input = event.target as HTMLInput;
      if (!input.isLocked) typingEnglishOrChineseWordEnd(input, event);
    };

    const onFocus = (event: Event) => {
      if (props.disabled || props.readonly) return;
      state.isFocused = true;
      emit('focus', event);
    };

    const onBlur = (event: Event) => {
      const input = event.target as HTMLInput;
      updateValue(input.value, 'onBlur');
      state.blurTimer = setTimeout(() => {
        state.isFocused = false;
      }, 300);
      emit('blur', event);
    };

    const onCompositionStart = (event: Event) => {
      const input = event.target as HTMLInput;
      input.isLocked = true;
    };

    const onCompositionEnd = (event: Event) => {
      const input = event.target as HTMLInput;
      typingEnglishOrChineseWordEnd(input, event);
      input.isLocked = false;
    };

    const typingEnglishOrChineseWordEnd = (input: HTMLInput, event: Event) => {
      updateValue(input.value);
      emit('input', event);
    };

    const updateValue = (value: string, trigger: InputFormatTrigger = 'onInput') => {
      // 限定输入的内容为数字
      if (trigger === 'onInput') {
        if (props.type === 'digit' || props.type === 'tel') {
          value = formatNumber(value, true, 0);
        } else if (props.type === 'number') {
          let decimal = Number(props.decimal);
          value = formatNumber(value, decimal > 0, decimal);
        }
      }

      // 数字小数点后面位数不足时，自动补0
      if (trigger === 'onBlur' && props.type === 'number' && props.padZero && Number(props.decimal) > 0) {
        value = formatNumber(value, true, Number(props.decimal), true);
      }

      // 自定义格式化输入内容
      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      // 修复input 属性为 number，maxlength不起作用
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }

      value = value.trim();

      if (inputRef.value && inputRef.value.value !== value) {
        inputRef.value.value = value;
      }

      if (props.modelValue !== value) {
        emit('update:modelValue', value);
      }
    };

    const onClear = (event: Event) => {
      updateValue('');
      emit('clear', event);

      if (state.blurTimer) clearTimeout(state.blurTimer);
      focus();
      state.isFocused = true;
    };

    const onClick = (event: Event) => {
      emit('click', event);
    };

    const focus = () => inputRef.value?.focus();
    const blur = () => inputRef.value?.blur();
    const select = () => inputRef.value?.select();

    return {
      classes,
      elementId,
      showClear,
      inputRef,
      inputAttrs,
      onInput,
      onFocus,
      onBlur,
      onCompositionStart,
      onCompositionEnd,
      onClear,
      onClick,
      focus,
      blur,
      select
    };
  }
});

export default withInstall(Input);
</script>
