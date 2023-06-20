<template>
  <h2>滚动到指定表单项</h2>
  <r-form ref="formRef">
    <r-form-item title="姓名" prop="name" :rules="ruleValidate.name" v-model="formValidate.name">
      <r-input v-model="formValidate.name" placeholder="请输入姓名"></r-input>
    </r-form-item>
    <r-form-item title="年龄" prop="age" :rules="ruleValidate.age" v-model="formValidate.age">
      <r-input v-model="formValidate.age" type="digit" placeholder="请输入年龄"></r-input>
    </r-form-item>
    <r-form-item title="密码" prop="password" v-model="formValidate.password">
      <r-input v-model="formValidate.password" type="password" placeholder="请输入密码，非必填项"></r-input>
    </r-form-item>
    <r-form-item title="邮箱" prop="mail" :rules="ruleValidate.mail" v-model="formValidate.mail">
      <r-input v-model="formValidate.mail" type="email" placeholder="请输入邮箱，异步校验"></r-input>
    </r-form-item>
    <r-form-item :border="false" class="button-group">
      <r-button type="primary" size="small" style="line-height: 1; padding: 0 8px" @click="doSubmit">
        <p>Submit</p>
        <p>scroll to first error</p>
      </r-button>
      <r-button size="small" style="line-height: 1; padding: 0 8px" @click="scrollToField('age')">
        <p>Submit</p>
        <p>scroll to age</p>
      </r-button>
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

const ruleValidate = reactive({
  name: [
    { required: true, message: 'name cannot be empty' },
    { validator: (val: string) => !/\d+/.test(val), message: '姓名中不能有数字' }
  ],
  age: [
    { required: true, message: '请填写年龄' },
    { pattern: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' },
    { validator: (val: string) => /^[^0]/.test(val), message: '不能以 0 开头' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty' },
    { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/, message: 'Incorrect email format' }
  ]
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
      formRef.value.scrollToField();
    }
  });
};

const scrollToField = (name: string) => {
  formRef.value.scrollToField(name);
};
</script>
