<template>
  <nav-bar>Input</nav-bar>
  <form class="demo demo-input">
    <Base />
    <CustomType />
    <Clearable />
    <Formatter />
    <Readonly />
    <InputAlign />
    <Event />
    <Method />
    <Slots />
    <Form></Form>
  </form>
</template>

<script lang="ts" setup>
import Base from './Base.vue';
import CustomType from './CustomType.vue';
import Clearable from './Clearable.vue';
import Formatter from './Formatter.vue';
import Readonly from './Readonly.vue';
import InputAlign from './InputAlign.vue';
import Event from './Event.vue';
import Method from './Method.vue';
import Slots from './Slots.vue';
import Form from './Form.vue';
</script>

<style lang="less">
.demo-input {
  > .r-input {
    padding: 0 10px;
    background-color: #fff;
    margin-bottom: 10px;
  }
}
</style>
