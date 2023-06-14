<template>
  <h2>开启非空校验、必填*号、清除按钮</h2>
  <r-form ref="formRef" required show-star title-align="right" clearable>
    <r-form-item title="姓名" prop="name" v-model="formValidate.name">
      <r-input v-model="formValidate.name"></r-input>
    </r-form-item>
    <r-form-item title="密码" prop="password" v-model="formValidate.password">
      <r-input v-model="formValidate.password" type="password"></r-input>
    </r-form-item>
    <r-form-item title="邮箱" prop="mail" v-model="formValidate.mail">
      <r-input v-model="formValidate.mail" type="email"></r-input>
    </r-form-item>
    <r-form-item :border="false" class="button-group">
      <r-button type="primary" size="small" @click="doSubmit">Submit</r-button>
      <r-button size="small" @click="doReset">Reset</r-button>
    </r-form-item>
  </r-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const formValidate = reactive({
  name: 'zyx',
  password: '',
  mail: 'zyx'
});

const formRef = ref();

const doSubmit = () => {
  formRef.value.validate((valid: boolean, errors: string[]) => {
    if (valid) {
      console.log('getValue:', formRef.value.getValue());
      console.log('getJsonValue', formRef.value.getJsonValue());
      console.log('getSerializeValue', formRef.value.getSerializeValue());
    } else {
      console.log('error submit!!', errors);
      return false;
    }
  });
};
const doReset = () => {
  formRef.value.reset();
};
</script>
