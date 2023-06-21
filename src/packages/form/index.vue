<template>
  <form :class="classes.root">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive, ref, provide, watch, onMounted } from 'vue';
import { createNamespace, withInstall, makeObjectProp, makeBooleanProp } from '../utils';
import { formItemProps } from '../form-item/index.vue';
import { inputProps } from '../input/index.vue';

const { name, bem } = createNamespace('form');

export const formProps = {
  ...formItemProps,
  ...inputProps,
  model: makeObjectProp(),
  rules: makeObjectProp(),
  showErrorMessage: makeBooleanProp(true)
};

export type FormProps = ExtractPropTypes<typeof formProps>;

const Form = defineComponent({
  name,
  props: formProps,
  expose: ['validate', 'reset', 'getValue', 'getJsonValue', 'getSerializeValue', 'scrollToField'],
  emits: ['complete'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem())
    });

    // 表单项
    type Field = Record<string, any>;
    const fields = ref<Field[]>([]);
    const add = (field: Field) => fields.value.push(field);
    const remove = (field: Field) => fields.value.splice(fields.value.indexOf(field), 1);
    provide('form', {
      add,
      remove,
      props
    });

    // 表单校验
    const validate = (customProp = '') => {
      return new Promise((resolve) => {
        if (customProp) {
          const field = fields.value.find((field) => field.props.prop === customProp);
          if (field) {
            const res = field.validate();
            resolve(res);
          } else {
            resolve({ valid: false, errors: ['prop not found'] });
            console.error(`prop: ${customProp} not found`);
          }
          return;
        }

        const validFields = fields.value.map((field) => field.validate());
        Promise.all(validFields).then((res) => {
          const valid = res.every((item) => item.valid);
          resolve({ valid, results: res });
        });
      });
    };

    // 表单重置
    const reset = () => {
      fields.value.forEach((field) => {
        field.reset();
      });
    };

    // 获取表单值
    const getValue = () => fields.value.map((field) => field.getValue());
    const getJsonValue = () => Object.assign({}, ...getValue().map((obj) => ({ [obj.name]: obj.value })));
    const getSerializeValue = () =>
      getValue()
        .map((obj) => obj.name + '=' + obj.value)
        .join('&');

    const isCompleted = computed(() => fields.value.every((field) => field.isCompleted));
    watch(isCompleted, (val) => {
      emit('complete', val);
    });

    // 滚动到指定表单项
    // eslint-disable-next-line no-undef
    const scrollToField = (name: string, options?: boolean | ScrollIntoViewOptions) => {
      if (name) {
        fields.value.find((field) => field.props.prop === name)?.scrollIntoView(options);
        return;
      }

      for (let i = 0; i < fields.value.length; i++) {
        let field = fields.value[i];
        if (field.validateState === 'error') {
          field.scrollIntoView(options);
          return;
        }
      }
    };

    return {
      classes,
      validate,
      reset,
      getValue,
      getJsonValue,
      getSerializeValue,
      scrollToField
    };
  }
});

export type FormInstance = InstanceType<typeof Form>;

export default withInstall(Form);
</script>
