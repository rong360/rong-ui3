<template>
  <h2>插槽</h2>
  <r-cell :border="false">
    <template #left-icon>
      <div style="height: 40px; width: 40px; border-radius: 50%; background: rgb(229, 229, 229)"></div>
    </template>
    <template #title>title</template>
    <template #title-desc> <strong>title desc</strong></template>
    <template #value>content</template>
    <template #right-icon>
      <r-icon name="loading" />
    </template>
  </r-cell>
</template>
