<template>
  <h2>非空校验、必填*号、清除按钮、单个表单项验证</h2>
  <r-form ref="formRef" required show-star title-align="right" clearable>
    <r-form-item title="姓名" prop="name" v-model="formValidate.name">
      <r-input v-model="formValidate.name" placeholder="请输入姓名，blur事件校验" @blur="onBlur('name')"></r-input>
    </r-form-item>
    <r-form-item title="年龄" prop="age" v-model="formValidate.age" :required="false">
      <r-input v-model="formValidate.age" type="digit" placeholder="请输入年龄，非必填项"></r-input>
    </r-form-item>
    <r-form-item title="密码" prop="password" v-model="formValidate.password">
      <r-input
        v-model="formValidate.password"
        type="password"
        placeholder="请输入密码，不显示清除按钮"
        :clearable="false"
        @blur="onBlur('password')"
      ></r-input>
    </r-form-item>
    <r-form-item title="邮箱" prop="mail" v-model="formValidate.mail">
      <r-input
        v-model="formValidate.mail"
        type="email"
        placeholder="请输入邮箱，blur事件校验"
        @blur="onBlur('mail')"
      ></r-input>
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
  name: '',
  age: '',
  password: '',
  mail: ''
});

const formRef = ref();

const doSubmit = () => {
  formRef.value.validate().then((res: any) => {
    if (res.valid) {
      console.log('getValue:', formRef.value.getValue());
      console.log('getJsonValue', formRef.value.getJsonValue());
      console.log('getSerializeValue', formRef.value.getSerializeValue());
    } else {
      console.log('error submit!!', res);
      return false;
    }
  });
};

const doReset = () => {
  formRef.value.reset();
};

const onBlur = (name: string) => {
  formRef.value.validate(name).then((res: any) => {
    console.log('validateField', res);
  });
};
</script>
