<template>
  <r-cell
    ref="formItemRef"
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
import {
  createNamespace,
  withInstall,
  makeStringProp,
  makeBooleanProp,
  RenderText,
  objectAssign,
  isPromise
} from '../utils';
import Cell, { cellProps } from '../cell/index.vue';
import type { FormItemRule } from './type';

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
  expose: [],
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const form = inject('form') as any;

    const computedProps = computed(() => objectAssign({}, form && form.props, props));

    const classes = reactive({
      root: computed(() => bem()),
      title: computed(() => bem('title', { star: computedProps.value.showStar && isRequired.value && isField.value })),
      value: computed(() => bem('value', { [computedProps.value.valueAlign]: true, error: !!validateMessage.value })),
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
      let rules = [].concat(selfRules || formRules || []) as FormItemRule[];
      if (computedProps.value.required && rules.length === 0) {
        rules = [{ required: true, message: (props.title || props.prop) + '不能为空' }];
      }
      return rules;
    });
    const isRequired = computed(() => {
      let rules = fieldRules.value;
      let isRequired = false;
      if (props.required != false && rules && rules.length) {
        for (let i = 0; i < rules.length; i++) {
          if (rules[i].required) {
            isRequired = true;
            break;
          }
        }
      }
      return isRequired;
    });

    const asyncValidator = (value: any = '', rules: FormItemRule[] = []) => {
      return new Promise((resolve, reject) => {
        const passed = { valid: true, errors: '' };
        for (let i = 0; i < rules.length; i++) {
          const rule = rules[i];
          const { validator, ...ruleWithoutValidator } = rule;
          const { required, pattern, message } = ruleWithoutValidator;
          const failed = { valid: false, errors: message };
          if (required && !value && value !== 0) {
            resolve(failed);
            return;
          }
          if (pattern && !pattern.test(value)) {
            resolve(failed);
            return;
          }
          if (validator && typeof validator === 'function') {
            const result = validator(value, ruleWithoutValidator);
            if (isPromise(result)) {
              (result as Promise<any>)
                .then((res: any) => {
                  if (!res) {
                    resolve(failed);
                  } else {
                    resolve(passed);
                  }
                })
                .catch((err) => {
                  reject(err);
                });
            } else {
              resolve(result ? passed : failed);
            }
            return;
          }
        }
        resolve(passed);
      });
    };

    const validate = () => {
      return new Promise((resolve, reject) => {
        try {
          const rules = fieldRules.value;
          const res = { valid: true, errors: '', prop: props.prop, title: props.title };
          if (!rules || rules.length === 0 || props.required === false) {
            res.valid = true;
            res.errors = '';
            resolve(res);
            return;
          }

          asyncValidator(currentValue.value, rules).then((result: any) => {
            validateMessage.value = result.valid ? '' : result.errors;
            res.valid = result.valid;
            res.errors = result.errors;
            resolve(res);
          });
        } catch (error) {
          reject(error);
        }
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
        rawValue: currentValue.value
      };
    };

    onMounted(() => {
      initialValue.value = currentValue.value;
    });

    // 表单项是否完成， 常用于提交按钮是否可用
    const isCompleted = computed(() => (isRequired.value ? currentValue.value !== '' : true));

    // 滚动到当前表单项
    const formItemRef = ref();
    // eslint-disable-next-line no-undef
    const scrollIntoView = (options: boolean | ScrollIntoViewOptions) => {
      formItemRef.value.$el.scrollIntoView(options);
    };

    const labelFor = computed(
      () => props.labelFor || `input-${String(Date.now()).slice(-4)}${Math.round(Math.random() * 10000)}`
    );

    // 向form组件提供form-item组件信息
    const field = {
      props,
      labelFor,
      validate,
      reset,
      getValue,
      currentValue,
      isCompleted,
      scrollIntoView,
      validateMessage
    };
    const isField = computed(() => props.title !== '');
    onMounted(() => isField.value && form.add(field));
    onUnmounted(() => isField.value && form.remove(field));

    // 向子组件提供form-item组件信息
    provide('form-item', field);

    return {
      classes,
      computedProps,
      labelFor,
      validateMessage,
      isCompleted,
      formItemRef
    };
  }
});

export default withInstall(FormItem);
</script>
