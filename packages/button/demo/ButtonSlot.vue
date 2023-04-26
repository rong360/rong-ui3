<template>
  <demo-item title="插槽">
    <r-button type="primary">
      <template #prepend><r-icon name="loading"></r-icon></template>
      加载中...
    </r-button>
    <r-button type="primary">
      加载中...
      <template #append><r-icon name="loading"></r-icon></template>
    </r-button>
  </demo-item>
</template>
