<template>
  <h2>动态表单</h2>
  <r-form ref="formRef" required clearable @complete="onComplete">
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
      <r-button type="primary" size="small" :disabled="!isCompleted" @click="doSubmit">Submit</r-button>
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
    value: '',
    rules: [
      { required: true, message: 'name cannot be empty' },
      { validator: (val: string) => !/\d+/.test(val), message: '姓名中不能有数字' }
    ]
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
    value: '',
    rules: [
      { required: true, message: '请填写年龄' },
      { pattern: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' },
      { validator: (val: string) => /^[^0]/.test(val), message: '不能以 0 开头' }
    ]
  },
  {
    type: 'email',
    componentType: 'input',
    title: '邮箱',
    name: 'mail',
    value: '',
    rules: [
      { required: true, message: 'Mailbox cannot be empty' },
      { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/, message: 'Incorrect email format' }
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
const isCompleted = ref(false);

const doSubmit = () => {
  formRef.value.validate().then((res: any) => {
    if (res.valid) {
      console.log('getValue:', formRef.value.getValue());
      console.log('getJsonValue', formRef.value.getJsonValue());
      console.log('getSerializeValue', formRef.value.getSerializeValue());
    } else {
      console.log('error submit!!', res);
    }
  });
};

const doReset = () => {
  formRef.value.reset();
};

const onComplete = (val: boolean) => {
  isCompleted.value = val;
};
</script>
