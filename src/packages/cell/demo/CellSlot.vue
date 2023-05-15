<template>
  <demo-item title="插槽">
    <r-cell title="单元格" :border="false">
      <template #left-icon>
        <div style="height: 40px; width: 40px; border-radius: 50%; background: rgb(229, 229, 229)"></div>
      </template>
      标题
      <template #title-desc> <strong>副标题描述</strong></template>
      <template #right-icon>
        <r-icon name="loading" />
      </template>
    </r-cell>
  </demo-item>
</template>
