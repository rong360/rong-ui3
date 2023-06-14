<template>
  <h2>配合表单使用</h2>
  <r-form>
    <r-form-item title="用户名" prop="username" title-align="right">
      <r-input v-model="state.username" placeholder="请输入用户名" />
    </r-form-item>
    <r-form-item title="密码" prop="password" title-align="right" :border="false">
      <r-input v-model="state.password" placeholder="请输入密码" />
    </r-form-item>
  </r-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  username: '',
  password: ''
});
</script>
