<template>
  <h2>自定义类型</h2>
  <r-input v-model="state.text" placeholder="请输入文本" max-length="6" />
  <r-input v-model="state.password" type="password" placeholder="请输入密码" />
  <r-input
    v-model="state.number"
    type="number"
    decimal="2"
    pad-zero
    placeholder="请输入数字（支持小数、精度控制、自动补0）"
  />
  <r-input v-model="state.digit" type="digit" placeholder="请输入整数" />
  <r-input v-model="state.tel" type="tel" placeholder="请输入手机号" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  password: '',
  number: '',
  digit: '',
  tel: ''
});
</script>
