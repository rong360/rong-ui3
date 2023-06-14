<template>
  <r-cell
    :class="classes.root"
    :title-class="classes.title"
    :title-align="computedProps.titleAlign"
    :value-class="classes.value"
    :value-align="computedProps.valueAlign"
    :center="center"
    :border="border"
  >
    <template #title>
      <label :for="labelFor">
        <slot name="title"> <RenderText :text="title" /> </slot>
      </label>
    </template>
    <template #value>
      <slot></slot>
      <div :class="classes.errorMessage" v-if="validateMessage && computedProps.showErrorMessage">
        {{ validateMessage }}
      </div>
    </template>
  </r-cell>
</template>

<script lang="ts">
import {
  defineComponent,
  type ExtractPropTypes,
  reactive,
  computed,
  onMounted,
  onUnmounted,
  inject,
  provide,
  ref,
  watch
} from 'vue';
import { createNamespace, withInstall, makeStringProp, makeBooleanProp, RenderText, objectAssign } from '../utils';
import Cell, { cellProps } from '../cell/index.vue';
import type { Field } from './type';
import AsyncValidator from 'async-validator';

const { name, bem } = createNamespace('form-item');

export const formItemProps = {
  ...cellProps,
  modelValue: [String, Number],
  center: makeBooleanProp(false),
  prop: makeStringProp(''),
  rules: [Array, Object],
  labelFor: makeStringProp(''),
  required: makeBooleanProp(),
  showStar: makeBooleanProp(),
  showErrorMessage: makeBooleanProp()
};

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

function getPropByPath(obj: Record<string, any>, path: string) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;

  for (let len = keyArr.length; i < len - 1; ++i) {
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      throw new Error('[iView warn]: please transfer a valid prop path to form item!');
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj[keyArr[i]]
  };
}

const FormItem = defineComponent({
  name,
  props: formItemProps,
  components: {
    [Cell.name]: Cell,
    RenderText
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const form = inject('form') as any;

    const computedProps = computed(() => objectAssign({}, form && form.props, props));

    const classes = reactive({
      root: computed(() => bem()),
      title: computed(() => bem('title', { star: computedProps.value.showStar && isRequired.value && isField.value })),
      value: computed(() => bem('value', { [computedProps.value.valueAlign]: true })),
      errorMessage: computed(() => bem('error-message'))
    });

    // 校验
    const initialValue = ref('');
    const currentValue = computed(() =>
      typeof props.modelValue != 'undefined' ? props.modelValue : form.props.model[props.prop]
    );
    const validateState = ref('');
    const validateMessage = ref('');
    const fieldRules = computed(() => {
      let formRules = form.props.rules;
      let selfRules = props.rules;
      formRules = formRules && props.prop ? formRules[props.prop] : [];
      let rules = [].concat(selfRules || formRules || []) as Record<string, any>[];
      if (computedProps.value.required && rules.length === 0) {
        rules = [{ required: true, message: (props.title || props.prop) + '不能为空' }];
      }
      return rules;
    });
    const isRequired = computed(() => {
      let rules = fieldRules.value;
      let isRequired = false;
      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    });
    const getFilteredRule = (trigger: string) => {
      const rules = fieldRules.value;
      return rules.filter((rule) => {
        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
      });
    };
    const validate = (trigger: string, callback: (errors?: string) => void) => {
      let rules = getFilteredRule(trigger);

      if (!rules || rules.length === 0) {
        callback();
        return true;
      }

      validateState.value = 'validating';

      const descriptor = { [props.prop]: rules };
      const validator = new AsyncValidator(descriptor);
      const model = { [props.prop]: currentValue.value };
      validator.validate(model, { firstFields: true, suppressWarning: true }, (errors) => {
        validateState.value = !errors ? 'success' : 'error';
        validateMessage.value = errors && errors[0].message ? errors[0].message : '';
        callback(validateMessage.value);
      });
    };
    watch(currentValue, () => {
      validateState.value = '';
      validateMessage.value = '';
    });

    // 重置
    const reset = () => {
      validateState.value = '';
      validateMessage.value = '';
      if (props.prop && form.props.model) {
        const prop = props.prop;
        const path = prop;
        const { o, k } = getPropByPath(form.props.model, path);
        o[k] = initialValue.value;
      }
      emit('update:modelValue', initialValue.value);
    };

    // 获取表单值
    const getValue = () => {
      return {
        name: props.prop || attrs.name,
        value: currentValue.value.replace(/\s/g, ''),
        originalValue: currentValue.value
      };
    };

    onMounted(() => {
      initialValue.value = currentValue.value;
    });

    // 向form组件提供form-item组件信息
    const labelFor = computed(
      () => props.labelFor || `input-${String(Date.now()).slice(-4)}${Math.round(Math.random() * 10000)}`
    );
    const field: Field = {
      props,
      labelFor,
      validate,
      reset,
      getValue,
      currentValue
    };
    const isField = computed(() => props.prop !== '' || typeof props.modelValue != 'undefined');
    onMounted(() => isField.value && form.add(field));
    onUnmounted(() => isField.value && form.remove(field));

    // 向子组件提供form-item组件信息
    provide('form-item', field);

    return {
      classes,
      computedProps,
      labelFor,
      validateMessage
    };
  }
});

export default withInstall(FormItem);
</script>
