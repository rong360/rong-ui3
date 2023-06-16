<template>
  <form :class="classes.root">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive, ref, provide, watch } from 'vue';
import { createNamespace, withInstall, makeObjectProp, makeBooleanProp } from '../utils';
import type { Field } from '../form-item/type';
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
  expose: ['validate', 'reset', 'getValue', 'getJsonValue', 'getSerializeValue'],
  emits: ['complete'],
  setup(props, { emit }) {
    const classes = reactive({
      root: computed(() => bem())
    });

    // form组件内部的form-item组件需要调用form组件的方法，所以需要通过provide提供一个form对象
    const fields = ref<Field[]>([]);
    const add = (field: Field) => {
      fields.value.push(field);
    };
    const remove = (field: Field) => {
      fields.value.splice(fields.value.indexOf(field), 1);
    };
    provide('form', {
      add,
      remove,
      props
    });

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

    const reset = () => {
      fields.value.forEach((field) => {
        field.reset();
      });
    };

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

    return {
      classes,
      validate,
      reset,
      getValue,
      getJsonValue,
      getSerializeValue
    };
  }
});

export type FormInstance = InstanceType<typeof Form>;

export default withInstall(Form);
</script>
