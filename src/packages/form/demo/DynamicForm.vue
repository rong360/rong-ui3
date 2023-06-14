<template>
  <h2>动态表单</h2>
  <r-form ref="formRef" required>
    <r-form-item
      v-for="item in formData"
      :key="item.name"
      :title="item.title"
      :prop="item.name"
      :rules="item.rules"
      v-model="item.value"
    >
      <r-input
        v-model="item.value"
        placeholder="请输入"
        :type="item.type"
        :format-trigger="item.formatTrigger"
        :formatter="item.formatter"
        :max-length="item.maxLength"
      ></r-input>
    </r-form-item>
    <div class="button-group">
      <r-button size="small" @click="addField">Add</r-button>
      <r-button size="small" @click="removeField">Remove</r-button>
      <r-button type="primary" size="small" @click="doSubmit">Submit</r-button>
      <r-button size="small" @click="doReset">Reset</r-button>
    </div>
  </r-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const formData: Record<string, any>[] = reactive([
  {
    type: 'text',
    componentType: 'input',
    title: '姓名',
    name: 'name',
    value: 'zyx'
  },
  {
    type: 'password',
    componentType: 'input',
    title: '密码',
    name: 'password',
    value: ''
  },
  {
    type: 'digit',
    componentType: 'input',
    title: '年龄',
    name: 'age',
    value: ''
  },
  {
    type: 'email',
    componentType: 'input',
    title: '邮箱',
    name: 'mail',
    value: 'zyx',
    rules: [
      { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
      { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
    ]
  }
]);

const addField = () => {
  formData.push({
    type: 'tel',
    componentType: 'input',
    title: '手机',
    name: 'phone',
    value: '',
    maxLength: 13,
    formatTrigger: 'onInput',
    formatter: (value: string) => {
      return value.replace(/(^\d{3})/g, '$1 ').replace(/(\d{4})/g, '$1 ');
    }
  });
};

const removeField = () => {
  formData.splice(formData.length - 1);
};

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
