<template>
  <form :class="classes.root">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, type ExtractPropTypes, computed, reactive, ref, provide } from 'vue';
import { createNamespace, withInstall, makeObjectProp, makeBooleanProp } from '../utils';
import type { Field } from '../form-item/type';
import { formItemProps } from '../form-item/index.vue';
import { inputProps } from '../input/index.vue'

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
  setup(props) {
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

    const validate = (callback: (valid: boolean, errors?: string[]) => void) => {
      return new Promise((resolve) => {
        let valid = true;
        let count = 0;
        let err: string[] = [];
        fields.value.forEach((field) => {
          field.validate('', (errors) => {
            if (errors) {
              valid = false;
              err.push(errors);
            }
            if (++count === fields.value.length) {
              callback(valid, err);
              resolve(valid);
            }
          });
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

    const isCompleted = computed(() => fields.value.every((field) => field.currentValue !== ''));

    return {
      classes,
      validate,
      reset,
      getValue,
      getJsonValue,
      getSerializeValue,
      fields,
      isCompleted
    };
  }
});

export type FormInstance = InstanceType<typeof Form>;

export default withInstall(Form);
</script>
