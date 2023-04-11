<template>
  <dl class="demo__item">
    <dt>插槽</dt>
    <dd>
      <r-button type="primary">
        <template #prepend><r-icon name="loading"></r-icon></template>
        加载中...
      </r-button>
      <r-button type="primary">
        加载中...
        <template #append><r-icon name="loading"></r-icon></template>
      </r-button>
    </dd>
  </dl>
</template>
