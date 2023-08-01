import{d as l,o as d,c as s,a as e,b as n,u,Y as a,g as i,e as r}from"./plugin-vueexport-helper.js";const m=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-form :model="formValidate" :rules="ruleValidate" ref="formRef" @complete="onComplete">
    <r-form-item title="\u59D3\u540D" prop="name">
      <r-input v-model="formValidate.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></r-input>
    </r-form-item>
    <r-form-item title="\u5E74\u9F84" prop="age">
      <r-input v-model="formValidate.age" type="digit" placeholder="\u8BF7\u8F93\u5165\u5E74\u9F84"></r-input>
    </r-form-item>
    <r-form-item title="\u5BC6\u7801" prop="password">
      <r-input v-model="formValidate.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"></r-input>
    </r-form-item>
    <r-form-item title="\u90AE\u7BB1" prop="mail">
      <r-input v-model="formValidate.mail" type="email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"></r-input>
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
  mail: ''
});

const asyncValidator = (val: string) => {
  return new Promise((resolve) => {
    // \u6A21\u62DF\u5F02\u6B65\u9A8C\u8BC1\u4E2D...'
    setTimeout(() => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      resolve(regEmail.test(val));
    }, 1000);
  });
};

const ruleValidate = reactive({
  name: [
    { required: true, message: 'name cannot be empty' },
    { validator: (val: string) => !/\\d+/.test(val), message: '\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57' }
  ],
  age: [
    { required: true, message: '\u8BF7\u586B\u5199\u5E74\u9F84' },
    { pattern: /^(\\d{1,2}|1\\d{2}|200)$/, message: '\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4' },
    { validator: (val: string) => /^[^0]/.test(val), message: '\u4E0D\u80FD\u4EE5 0 \u5F00\u5934' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty' },
    { validator: asyncValidator, message: 'Incorrect email format' }
  ]
});

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
<\/script>
`,c=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5\u4E8C</h2>
  <r-form ref="formRef" @complete="onComplete">
    <r-form-item title="\u59D3\u540D" prop="name" :rules="ruleValidate.name" v-model="formValidate.name">
      <r-input v-model="formValidate.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></r-input>
    </r-form-item>
    <r-form-item title="\u5E74\u9F84" prop="age" :rules="ruleValidate.age" v-model="formValidate.age">
      <r-input v-model="formValidate.age" type="digit" placeholder="\u8BF7\u8F93\u5165\u5E74\u9F84"></r-input>
    </r-form-item>
    <r-form-item title="\u5BC6\u7801" prop="password" v-model="formValidate.password">
      <r-input v-model="formValidate.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"></r-input>
    </r-form-item>
    <r-form-item title="\u90AE\u7BB1" prop="mail" :rules="ruleValidate.mail" v-model="formValidate.mail">
      <r-input v-model="formValidate.mail" type="email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"></r-input>
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
  mail: ''
});

const asyncValidator = (val: string) => {
  return new Promise((resolve) => {
    // \u6A21\u62DF\u5F02\u6B65\u9A8C\u8BC1\u4E2D...'
    setTimeout(() => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      resolve(regEmail.test(val));
    }, 1000);
  });
};

const ruleValidate = reactive({
  name: [
    { required: true, message: 'name cannot be empty' },
    { validator: (val: string) => !/\\d+/.test(val), message: '\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57' }
  ],
  age: [
    { required: true, message: '\u8BF7\u586B\u5199\u5E74\u9F84' },
    { pattern: /^(\\d{1,2}|1\\d{2}|200)$/, message: '\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4' },
    { validator: (val: string) => /^[^0]/.test(val), message: '\u4E0D\u80FD\u4EE5 0 \u5F00\u5934' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty' },
    { validator: asyncValidator, message: 'Incorrect email format' }
  ]
});

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
<\/script>
`,p=`<template>
  <h2>\u975E\u7A7A\u6821\u9A8C\u3001\u5FC5\u586B*\u53F7\u3001\u6E05\u9664\u6309\u94AE\u3001\u5355\u4E2A\u8868\u5355\u9879\u9A8C\u8BC1</h2>
  <r-form ref="formRef" required show-star title-align="right" clearable>
    <r-form-item title="\u59D3\u540D" prop="name" v-model="formValidate.name">
      <r-input v-model="formValidate.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D\uFF0Cblur\u4E8B\u4EF6\u6821\u9A8C" @blur="onBlur('name')"></r-input>
    </r-form-item>
    <r-form-item title="\u5E74\u9F84" prop="age" v-model="formValidate.age" :required="false">
      <r-input v-model="formValidate.age" type="digit" placeholder="\u8BF7\u8F93\u5165\u5E74\u9F84\uFF0C\u975E\u5FC5\u586B\u9879"></r-input>
    </r-form-item>
    <r-form-item title="\u5BC6\u7801" prop="password" v-model="formValidate.password">
      <r-input
        v-model="formValidate.password"
        type="password"
        placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE"
        :clearable="false"
        @blur="onBlur('password')"
      ></r-input>
    </r-form-item>
    <r-form-item title="\u90AE\u7BB1" prop="mail" v-model="formValidate.mail">
      <r-input
        v-model="formValidate.mail"
        type="email"
        placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0Cblur\u4E8B\u4EF6\u6821\u9A8C"
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
<\/script>
`,f=`<template>
  <h2>\u52A8\u6001\u8868\u5355</h2>
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
        placeholder="\u8BF7\u8F93\u5165"
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
import { ref, reactive, createVNode } from 'vue';

const formData: Record<string, any>[] = reactive([
  {
    type: 'text',
    componentType: 'input',
    title: '\u59D3\u540D',
    name: 'name',
    value: '',
    rules: [
      { required: true, message: 'name cannot be empty' },
      { validator: (val: string) => !/\\d+/.test(val), message: '\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57' }
    ]
  },
  {
    type: 'password',
    componentType: 'input',
    title: createVNode('span', { style: { color: 'red' } }, '\u5BC6\u7801'),
    name: 'password',
    value: ''
  },
  {
    type: 'digit',
    componentType: 'input',
    title: '\u5E74\u9F84',
    name: 'age',
    value: '',
    rules: [
      { required: true, message: '\u8BF7\u586B\u5199\u5E74\u9F84' },
      { pattern: /^(\\d{1,2}|1\\d{2}|200)$/, message: '\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4' },
      { validator: (val: string) => /^[^0]/.test(val), message: '\u4E0D\u80FD\u4EE5 0 \u5F00\u5934' }
    ]
  },
  {
    type: 'email',
    componentType: 'input',
    title: '\u90AE\u7BB1',
    name: 'mail',
    value: '',
    rules: [
      { required: true, message: 'Mailbox cannot be empty' },
      { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/, message: 'Incorrect email format' }
    ]
  }
]);

const addField = () => {
  formData.push({
    type: 'tel',
    componentType: 'input',
    title: '\u624B\u673A',
    name: 'phone',
    value: '',
    maxLength: 13,
    formatTrigger: 'onInput',
    formatter: (value: string) => {
      return value.replace(/(^\\d{3})/g, '$1 ').replace(/(\\d{4})/g, '$1 ');
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
<\/script>
`,g=`<template>
  <h2>\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879</h2>
  <r-form ref="formRef">
    <r-form-item title="\u59D3\u540D" prop="name" :rules="ruleValidate.name" v-model="formValidate.name">
      <r-input v-model="formValidate.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></r-input>
    </r-form-item>
    <r-form-item title="\u5E74\u9F84" prop="age" :rules="ruleValidate.age" v-model="formValidate.age">
      <r-input v-model="formValidate.age" type="digit" placeholder="\u8BF7\u8F93\u5165\u5E74\u9F84"></r-input>
    </r-form-item>
    <r-form-item title="\u5BC6\u7801" prop="password" v-model="formValidate.password">
      <r-input v-model="formValidate.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"></r-input>
    </r-form-item>
    <r-form-item title="\u90AE\u7BB1" prop="mail" :rules="ruleValidate.mail" v-model="formValidate.mail">
      <r-input v-model="formValidate.mail" type="email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"></r-input>
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
    { validator: (val: string) => !/\\d+/.test(val), message: '\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57' }
  ],
  age: [
    { required: true, message: '\u8BF7\u586B\u5199\u5E74\u9F84' },
    { pattern: /^(\\d{1,2}|1\\d{2}|200)$/, message: '\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4' },
    { validator: (val: string) => /^[^0]/.test(val), message: '\u4E0D\u80FD\u4EE5 0 \u5F00\u5934' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty' },
    { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/, message: 'Incorrect email format' }
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
<\/script>
`,v=`<template>
  <h2>\u8868\u5355\u7C7B\u578B</h2>
  <r-form :model="formValidate" :rules="ruleValidate" ref="formRef" @complete="onComplete">
    <r-form-item title="\u59D3\u540D" prop="name">
      <r-input v-model="formValidate.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></r-input>
    </r-form-item>
    <r-form-item title="\u5E74\u9F84" prop="age">
      <r-input v-model="formValidate.age" type="digit" placeholder="\u8BF7\u8F93\u5165\u5E74\u9F84"></r-input>
    </r-form-item>
    <r-form-item title="\u5BC6\u7801" prop="password">
      <r-input v-model="formValidate.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"></r-input>
    </r-form-item>
    <r-form-item title="\u90AE\u7BB1" prop="mail">
      <r-input v-model="formValidate.mail" type="email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"></r-input>
    </r-form-item>
    <r-form-item title="\u94F6\u884C\u5361" prop="bankCard">
      <r-input
        v-model="formValidate.bankCard"
        type="digit"
        placeholder="\u8BF7\u8F93\u5165\u94F6\u884C\u5361"
        max-length="19"
        :formatter="(value: string) => value.replace(/(\\d{4})(?=\\d)/g, '$1 ')"
      ></r-input>
    </r-form-item>
    <r-form-item title="\u590D\u9009\u6846" prop="checked">
      <r-checkbox v-model="formValidate.checked">\u590D\u9009\u6846</r-checkbox>
    </r-form-item>
    <r-form-item title="\u590D\u9009\u6846\u7EC4" prop="groupChecked">
      <r-checkbox-group v-model="formValidate.groupChecked" direction="horizontal">
        <r-checkbox name="1">\u590D\u9009\u6846 1</r-checkbox>
        <r-checkbox name="2">\u590D\u9009\u6846 2</r-checkbox>
      </r-checkbox-group>
    </r-form-item>
    <r-form-item title="\u5355\u9009\u6846" prop="radio">
      <r-radio-group v-model="formValidate.radio" direction="horizontal">
        <r-radio name="a">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b">\u5355\u9009\u6846 B</r-radio>
      </r-radio-group>
    </r-form-item>
    <r-form-item title="\u9009\u62E9\u5668" prop="city">
      <r-select v-model="formValidate.city" :columns="columns" placeholder="\u70B9\u51FB\u9009\u62E9\u57CE\u5E02"></r-select>
    </r-form-item>
    <r-form-item title="\u5730\u533A\u9009\u62E9" prop="area">
      <r-select
        v-model="formValidate.area"
        :columns="areaList"
        text-separator="/"
        value-separator="_"
        placeholder="\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"
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
  radio: '',
  city: '',
  area: ''
});

const asyncValidator = (val: string) => {
  return new Promise((resolve) => {
    // \u6A21\u62DF\u5F02\u6B65\u9A8C\u8BC1\u4E2D...'
    setTimeout(() => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      resolve(regEmail.test(val));
    }, 1000);
  });
};

const ruleValidate = reactive({
  name: [
    { required: true, message: 'name cannot be empty' },
    { validator: (val: string) => !/\\d+/.test(val), message: '\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57' }
  ],
  age: [
    { required: true, message: '\u8BF7\u586B\u5199\u5E74\u9F84' },
    { pattern: /^(\\d{1,2}|1\\d{2}|200)$/, message: '\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4' },
    { validator: (val: string) => /^[^0]/.test(val), message: '\u4E0D\u80FD\u4EE5 0 \u5F00\u5934' }
  ],
  mail: [
    { required: true, message: 'Mailbox cannot be empty' },
    { validator: asyncValidator, message: 'Incorrect email format' }
  ],
  bankCard: [
    { required: true, message: 'Bank card cannot be empty' },
    { validator: (val: string) => val.replace(/\\s/g, '').length === 16, message: '\u94F6\u884C\u5361\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E' }
  ],
  checked: [{ required: true, message: '\u8BF7\u9009\u62E9\u590D\u9009\u6846' }],
  groupChecked: [
    { required: true, message: '\u8BF7\u9009\u62E9\u590D\u9009\u6846\u7EC4' },
    { validator: (val: []) => val.length > 0, message: '\u590D\u9009\u6846\u7EC4\u6700\u5C11\u9009\u62E9\u4E00\u9879' }
  ],
  radio: [{ required: true, message: '\u8BF7\u9009\u62E9\u5355\u9009\u6846' }],
  city: [{ required: true, message: '\u8BF7\u9009\u62E9\u57CE\u5E02' }],
  area: [{ required: true, message: '\u8BF7\u9009\u62E9\u7701\u5E02\u533A' }]
});

const formRef = ref();
const isCompleted = ref(false);

const columns = ref([
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
]);

const areaList = ref([
  {
    text: '\u6D59\u6C5F',
    value: 'Zhejiang',
    children: [
      {
        text: '\u676D\u5DDE',
        value: 'Hangzhou',
        children: [
          { text: '\u897F\u6E56\u533A', value: 'Xihu', disabled: true },
          { text: '\u4F59\u676D\u533A', value: 'Yuhang' }
        ]
      },
      {
        text: '\u6E29\u5DDE',
        value: 'Wenzhou',
        children: [
          { text: '\u9E7F\u57CE\u533A', value: 'Lucheng' },
          { text: '\u74EF\u6D77\u533A', value: 'Ouhai' }
        ]
      }
    ]
  },
  {
    text: '\u798F\u5EFA',
    value: 'Fujian',
    children: [
      {
        text: '\u798F\u5DDE',
        value: 'Fuzhou',
        children: [
          { text: '\u9F13\u697C\u533A', value: 'Gulou' },
          { text: '\u53F0\u6C5F\u533A', value: 'Taijiang' }
        ]
      },
      {
        text: '\u53A6\u95E8',
        value: 'Xiamen',
        children: [
          { text: '\u601D\u660E\u533A', value: 'Siming' },
          { text: '\u6D77\u6CA7\u533A', value: 'Haicang' }
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
<\/script>
`,F={class:"markdown-body"},h=a(`<h1>Form \u8868\u5355</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u6570\u636E\u5F55\u5165\u3001\u6821\u9A8C\uFF0C\u652F\u6301\u8F93\u5165\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\u7C7B\u578B\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">FormItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Form</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FormItem</span>);
</code></pre></div>`,3),b={class:"card"},E=e("h3",null,"\u57FA\u7840\u7528\u6CD5",-1),C=e("p",null,"\u901A\u8FC7Form \u4F20\u9012\u9700\u8981\u6821\u9A8C\u7684\u503C\u548C\u89C4\u5219\u3002",-1),B={class:"card"},A=e("h3",null,"\u57FA\u7840\u7528\u6CD5\u4E8C",-1),V=e("p",null,"\u901A\u8FC7FormItem \u4F20\u9012\u9700\u8981\u6821\u9A8C\u7684\u503C\u548C\u89C4\u5219",-1),y={class:"card"},D=a('<h3>\u5F00\u542F\u975E\u7A7A\u6821\u9A8C\u3001\u5FC5\u586B*\u53F7\u3001\u6E05\u9664\u6309\u94AE\u3001\u5355\u4E2A\u8868\u5355\u9879\u9A8C\u8BC1</h3><p>Form \u8BBE\u7F6E<code class="">requied</code>\u53EF\u7ED9\u6240\u6709\u9879\u5F00\u542F\u975E\u7A7A\u6821\u9A8C\uFF0CFormItem \u8BBE\u7F6E <code class="">:required=false</code>\u53EF\u53D6\u6D88\u3002 Form \u8BBE\u7F6E<code class="">show-star</code>\u53EF\u7ED9\u6240\u6709\u9879\u663E\u793A\u5FC5\u586B\u7684<code class="">*</code>\u53F7\uFF0CFormItem \u8BBE\u7F6E <code class="">:required=false</code>\u53EF\u53D6\u6D88\u3002<br> Form \u8BBE\u7F6E<code class="">clearable</code>\u53EF\u7ED9\u6240\u6709\u9879\u663E\u793A\u6E05\u9664\u6309\u94AE\u3002FormItem \u8BBE\u7F6E <code class="">:clearable=false</code>\u53EF\u53D6\u6D88\u3002<br> Form \u8BBE\u7F6E<code class="">title-align</code> \u63A7\u5236\u6807\u9898\u5BF9\u9F50\u65B9\u5F0F\u3001<code class="">value-align</code> \u63A7\u5236\u53F3\u4FA7\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\u3002</p>',2),_={class:"card"},R=e("h3",null,"\u52A8\u6001\u8868\u5355",-1),x=e("p",null,[r("Form \u8BBE\u7F6E "),e("code",{class:""},"requied"),r(" \u53EF\u7ED9\u6240\u6709\u9879\u5F00\u542F\u975E\u7A7A\u6821\u9A8C")],-1),z={class:"card"},k=e("h3",null,"\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879",-1),w=e("p",null,[r("\u8C03\u7528Form\u7684 "),e("code",{class:""},"scrollToField(name: string, options?: boolean | ScrollIntoViewOptions)"),r(" \u65B9\u6CD5\uFF1A"),e("br"),r(" \u4E0D\u4F20\u53C2\u6570\u65F6\u9ED8\u8BA4\u6EDA\u52A8\u5230\u8868\u5355\u7B2C\u4E00\u4E2A\u9519\u8BEF\u9879\u3002 \u4F20name\u53C2\u6570\u65F6\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u3002")],-1),S={class:"card"},q=e("h3",null,"\u8868\u5355\u7C7B\u578B",-1),j=a(`<h2>API</h2><div class="card"><h3>Form Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td>object</td><td></td></tr><tr><td>rules</td><td>\u7EDF\u4E00\u914D\u7F6E\u6BCF\u4E2A <code class="">FormItem</code> \u7684 <code class="">rules</code></td><td>FormItemRule []</td><td><code class="">[]</code></td></tr><tr><td>title-align</td><td>\u6807\u9898\u5BF9\u9F50 \u53EF\u9009\u503C\u4E3A <code class="">left</code> <code class="">center</code> <code class="">right</code></td><td>String</td><td>-</td></tr><tr><td>value-align</td><td>\u5185\u5BB9\u5BF9\u9F50 \u53EF\u9009\u503C\u4E3A <code class="">left</code> <code class="">center</code> <code class="">right</code></td><td>String</td><td>-</td></tr><tr><td>clearable</td><td><code class="">input</code> \u5C55\u793A\u6E05\u9664 <code class="">Icon</code></td><td>boolean</td><td>true</td></tr><tr><td>required</td><td>\u6240\u6709\u8868\u5355\u9879\u5F00\u542F\u975E\u7A7A\u6821\u9A8C</td><td>boolean</td><td>-</td></tr><tr><td>show-star</td><td>\u663E\u793A\u5FC5\u586B<code class="">*</code>\u53F7</td><td>boolean</td><td>-</td></tr><tr><td>show-error-message</td><td>\u663E\u793A\u9519\u8BEF\u63D0\u793A</td><td>boolean</td><td>true</td></tr></tbody></table></div><div class="card"><h3>Form Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>complete</td><td>\u8FD4\u56DE\u6240\u6709\u5FC5\u586B\u8868\u5355\u9879\u662F\u5426\u8F93\u5165\u5B8C\u6BD5\uFF0C\u5E38\u7528\u4E8E\u6CA1\u8F93\u5165\u5B8C\u65F6\u6309\u94AE\u7F6E\u7070\uFF0C\u7981\u6B62\u63D0\u4EA4</td><td>val</td></tr></tbody></table></div><div class="card"><h3>FormItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u9700\u8981\u9A8C\u8BC1\u7684\u6570\u636E\uFF08Form\u4E0A\u7684<code class="">mode</code> <code class="">rules</code> \u548C FormItem\u4E0A\u7684v-model \u53EA\u80FD\u4E8C\u9009\u4E00\uFF09</td><td>FormItemRule []</td><td>[]</td></tr><tr><td>title</td><td>\u8F93\u5165\u6846\u5DE6\u4FA7\u6587\u672C</td><td>string | VNode</td><td>-</td></tr><tr><td>rules</td><td>\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219</td><td>FormItemRule []</td><td>[]</td></tr><tr><td>prop</td><td>\u8868\u5355\u57DF <code class="">v-model</code> \u5B57\u6BB5\uFF0C \u5728\u4F7F\u7528\u8868\u5355\u6821\u9A8C\u529F\u80FD\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F <em>\u5FC5\u586B</em> \u7684</td><td>string</td><td>-</td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B\u5B57\u6BB5</td><td>boolean</td><td>-</td></tr><tr><td>title-align</td><td>\u8868\u5355\u9879 <code class="">title</code> \u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>value-align</td><td>\u53F3\u4FA7\u63D2\u69FD\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">center</code> <code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>center</td><td>\u5782\u76F4\u5C45\u4E2D</td><td>boolean</td><td>false</td></tr><tr><td>show-star</td><td>\u663E\u793A\u5FC5\u586B <code class="">*</code> \u53F7</td><td>boolean</td><td>-</td></tr><tr><td>show-error-message</td><td>\u662F\u5426\u5728\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u5728\u8F93\u5165\u6846\u4E0B\u65B9\u5C55\u793A\u9519\u8BEF\u63D0\u793A</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>label-for</td><td>\u6307\u5B9A\u539F\u751F\u7684 label \u6807\u7B7E\u7684 for \u5C5E\u6027\uFF0C\u914D\u5408\u63A7\u4EF6\u7684 element-id \u5C5E\u6027\uFF0C\u53EF\u4EE5\u70B9\u51FB label \u65F6\u805A\u7126\u63A7\u4EF6\u3002</td><td>string</td><td>-</td></tr></tbody></table></div><div class="card"><h3>FormItemRule \u6570\u636E\u7ED3\u6784</h3><p>\u4F7F\u7528 <code class="">FormItem</code> \u7684 <code class="">rules</code> \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u9009\u5C5E\u6027\u5982\u4E0B:</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>required</td><td>\u662F\u5426\u4E3A\u5FC5\u9009\u5B57\u6BB5</td><td>boolean</td></tr><tr><td>message</td><td>\u9519\u8BEF\u63D0\u793A\u6587\u6848</td><td>string</td></tr><tr><td>validator</td><td>\u901A\u8FC7\u51FD\u6570\u8FDB\u884C\u6821\u9A8C</td><td>(value:string, rule?:FormItemRule ) =&gt; boolean | Promise</td></tr><tr><td>pattern</td><td>\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u6821\u9A8C</td><td>RegExp</td></tr></tbody></table></div><div class="card"><h3>FormItem Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49 <code class="">title</code> \u533A\u57DF</td></tr></tbody></table><pre><code class="language-html">  \u63D2\u69FD\u4F7F\u7528\u65B9\u5F0F
  <span class="hljs-tag">&lt;<span class="hljs-name">r-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>&gt;</span>slot title<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">r-form-item</span>&gt;</span>
</code></pre></div><div class="card"><h3>Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>validate</td><td>\u9A8C\u8BC1\u8868\u5355\uFF0C\u652F\u6301\u4F20\u5165 name \u6765\u9A8C\u8BC1\u5355\u4E2A\u8868\u5355\u9879\uFF0C\u4E0D\u4F20\u5165 name \u65F6\uFF0C\u4F1A\u9A8C\u8BC1\u6240\u6709\u8868\u5355\u9879</td><td>name</td><td>Promise</td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u8868\u5355\u9879</td><td>-</td><td>-</td></tr><tr><td>getValue</td><td>\u83B7\u53D6\u6240\u6709\u8868\u5355\u9879\u5F53\u524D\u7684\u503C</td><td>-</td><td><code class="">[{name: &#39;age&#39;, value: &#39;&#39;, rawValue: &#39;&#39;}]</code> value\u548CrawValue\u7684\u533A\u522B\u662Fvalue\u503C\u6E05\u7A7A\u4E86\u6240\u6709\u7A7A\u683C</td></tr><tr><td>getJsonValue</td><td>\u83B7\u53D6\u6240\u6709\u8868\u5355\u9879\u5F53\u524D\u7684\u503C</td><td>-</td><td><code class="">{name: &#39;&#39;, age: &#39;&#39;} </code></td></tr><tr><td>getSerializeValue</td><td>\u83B7\u53D6\u6240\u6709\u8868\u5355\u9879\u5F53\u524D\u7684\u503C</td><td>-</td><td><code class="">name=xx&amp;age=18</code></td></tr><tr><td>scrollToField</td><td>\u4E0D\u4F20\u53C2\u6570\u65F6\u9ED8\u8BA4\u6EDA\u52A8\u5230\u8868\u5355\u7B2C\u4E00\u4E2A\u9519\u8BEF\u9879\u3002 \u4F20name\u53C2\u6570\u65F6\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879\u3002</td><td>(name: string, options?: boolean | ScrollIntoViewOptions)</td><td>-</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-form-item-title-width</td><td>90px</td></tr><tr><td>--r-form-item-title-padding-right</td><td>10px</td></tr><tr><td>--r-form-item-required-color</td><td>#f5222d</td></tr><tr><td>--r-form-item-required-margin-right</td><td>2px</td></tr><tr><td>--r-form-item-error-message-color</td><td>#f5222d</td></tr><tr><td>--r-form-item-error-message-font-size</td><td>12px</td></tr><tr><td>--r-form-item-error-message-line-height</td><td>1.5</td></tr></tbody></table></div>`,8),$={},N="",P=l({__name:"README",setup(I,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(T,Z)=>{const t=i("hljs-block");return d(),s("div",F,[h,e("div",b,[E,C,e("p",null,[n(t,{code:u(m)},null,8,["code"])])]),e("div",B,[A,V,e("p",null,[n(t,{code:u(c)},null,8,["code"])])]),e("div",y,[D,e("p",null,[n(t,{code:u(p)},null,8,["code"])])]),e("div",_,[R,x,e("p",null,[n(t,{code:u(f)},null,8,["code"])])]),e("div",z,[k,w,e("p",null,[n(t,{code:u(g)},null,8,["code"])])]),e("div",S,[q,e("p",null,[n(t,{code:u(v)},null,8,["code"])])]),j])}}});export{P as default,N as excerpt,$ as frontmatter};
