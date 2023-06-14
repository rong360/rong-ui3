<template>
  <h2>基础用法二</h2>
  <r-form ref="formRef">
    <r-form-item title="姓名" prop="name" :rules="ruleValidate.name" v-model="formValidate.name">
      <r-input v-model="formValidate.name"></r-input>
    </r-form-item>
    <r-form-item title="密码" prop="password" v-model="formValidate.password">
      <r-input v-model="formValidate.password" type="password"></r-input>
    </r-form-item>
    <r-form-item title="邮箱" prop="mail" :rules="ruleValidate.mail" v-model="formValidate.mail">
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
const ruleValidate = reactive({
  name: [
    { required: true, message: 'The name cannot be empty', rigger: 'blur' },
    { min: 3, message: '姓名不能少于三位' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
  ]
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
