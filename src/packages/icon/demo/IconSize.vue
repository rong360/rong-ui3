<template>
  <h2>Icon 大小 和 颜色</h2>
  <ul class="icons">
    <li><r-icon name="close" size="24px" /><div class="text">close</div></li>
    <li><r-icon name="close-circle" style="font-size: 24px" /><div class="text">close-circle</div></li>
    <li><r-icon name="arrow-up" color="lightseagreen" /><div class="text">arrow-up</div></li>
    <li><r-icon name="arrow-down" style="color: lightseagreen" /><div class="text">arrow-down</div></li>
  </ul>
</template>

<style lang="less" scoped>
.icons {
  display: flex;
  flex-wrap: wrap;
  li {
    flex-basis: 25%;
    text-align: center;
    box-sizing: border-box;
    padding: 10px 0;
    .text {
      font-size: 12px;
    }
  }
}
</style>
