<template>
  <h2>使用插槽</h2>
  <r-nav-bar>
    <template #left> back </template>
    title
    <template #right> button </template>
    <template #bottom>
      <div class="tips" style="background-color: lightyellow; font-size: 12px; padding: 5px 15px">
        this is tips info.
      </div>
    </template>
  </r-nav-bar>
</template>
