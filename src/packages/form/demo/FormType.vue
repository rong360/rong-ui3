<template>
  <h2>表单类型</h2>
  <r-form :model="formValidate" :rules="ruleValidate" ref="formRef" @complete="onComplete">
    <r-form-item title="姓名" prop="name">
      <r-input v-model="formValidate.name" placeholder="请输入姓名"></r-input>
    </r-form-item>
    <r-form-item title="年龄" prop="age">
      <r-input v-model="formValidate.age" type="digit" placeholder="请输入年龄"></r-input>
    </r-form-item>
    <r-form-item title="密码" prop="password">
      <r-input v-model="formValidate.password" type="password" placeholder="请输入密码，非必填项"></r-input>
    </r-form-item>
    <r-form-item title="邮箱" prop="mail">
      <r-input v-model="formValidate.mail" type="email" placeholder="请输入邮箱，异步校验"></r-input>
    </r-form-item>
    <r-form-item title="银行卡" prop="bankCard">
      <r-input
        v-model="formValidate.bankCard"
        type="digit"
        placeholder="请输入银行卡"
        max-length="19"
        :formatter="(value: string) => value.replace(/(\d{4})(?=\d)/g, '$1 ')"
      ></r-input>
    </r-form-item>
    <r-form-item title="复选框" prop="checked">
      <r-checkbox v-model="formValidate.checked">复选框</r-checkbox>
    </r-form-item>
    <r-form-item title="复选框组" prop="groupChecked">
      <r-checkbox-group v-model="formValidate.groupChecked" direction="horizontal">
        <r-checkbox name="1">复选框 1</r-checkbox>
        <r-checkbox name="2">复选框 2</r-checkbox>
      </r-checkbox-group>
    </r-form-item>
    <r-form-item title="选择器" prop="city">
      <r-select v-model="formValidate.city" :columns="columns" placeholder="点击选择城市"></r-select>
    </r-form-item>
    <r-form-item title="地区选择" prop="area">
      <r-select
        v-model="formValidate.area"
        :columns="areaList"
        text-separator="/"
        value-separator="_"
        placeholder="点击选择省市区"
      ></r-select>
    </r-form-item>
    <r-form-item :border="false" class="button-group">
      <r-button type="primary" size="small" :disabled="!isCompleted" @click="doSubmit">Submit</r-button>
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
  mail: '',
  bankCard: '',
  checked: false,
  groupChecked: [],
  city: '',
  area: ''
});

const asyncValidator = (val: string) => {
  return new Promise((resolve) => {
    // 模拟异步验证中...'
    setTimeout(() => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      resolve(regEmail.test(val));
    }, 1000);
  });
};

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
    { validator: asyncValidator, message: 'Incorrect email format' }
  ],
  bankCard: [
    { required: true, message: 'Bank card cannot be empty' },
    { validator: (val: string) => val.replace(/\s/g, '').length === 16, message: '银行卡号格式不正确' }
  ],
  checked: [{ required: true, message: '请选择复选框' }],
  groupChecked: [
    { required: true, message: '请选择复选框组' },
    { validator: (val: []) => val.length > 0, message: '复选框组最少选择一项' }
  ],
  city: [{ required: true, message: '请选择城市' }],
  area: [{ required: true, message: '请选择省市区' }]
});

const formRef = ref();
const isCompleted = ref(false);

const columns = ref([
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
]);

const areaList = ref([
  {
    text: '浙江',
    value: 'Zhejiang',
    children: [
      {
        text: '杭州',
        value: 'Hangzhou',
        children: [
          { text: '西湖区', value: 'Xihu', disabled: true },
          { text: '余杭区', value: 'Yuhang' }
        ]
      },
      {
        text: '温州',
        value: 'Wenzhou',
        children: [
          { text: '鹿城区', value: 'Lucheng' },
          { text: '瓯海区', value: 'Ouhai' }
        ]
      }
    ]
  },
  {
    text: '福建',
    value: 'Fujian',
    children: [
      {
        text: '福州',
        value: 'Fuzhou',
        children: [
          { text: '鼓楼区', value: 'Gulou' },
          { text: '台江区', value: 'Taijiang' }
        ]
      },
      {
        text: '厦门',
        value: 'Xiamen',
        children: [
          { text: '思明区', value: 'Siming' },
          { text: '海沧区', value: 'Haicang' }
        ]
      }
    ]
  }
]);

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
