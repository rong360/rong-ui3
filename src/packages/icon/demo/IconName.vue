<template>
  <h2>Icon 名称</h2>
  <ul class="icons">
    <li><r-icon name="close" /><div class="text">close</div></li>
    <li><r-icon name="close-circle" /><div class="text">close-circle</div></li>
    <li><r-icon name="close-mask" /><div class="text">close-mask</div></li>
    <li><r-icon name="loading" /><div class="text">loading</div></li>
    <li><r-icon name="arrow-up" /><div class="text">arrow-up</div></li>
    <li><r-icon name="arrow-down" /><div class="text">arrow-down</div></li>
    <li><r-icon name="arrow-left" /><div class="text">arrow-left</div></li>
    <li><r-icon name="arrow-right" /><div class="text">arrow-right</div></li>
    <li><r-icon name="question-circle" /><div class="text">question-circle</div></li>
    <li><r-icon name="check-circle" /><div class="text">check-circle</div></li>
    <li><r-icon name="check-active-circle" /><div class="text">check-active-circle</div></li>
    <li><r-icon name="check-disabled-circle" /><div class="text">check-disabled-circle</div></li>
    <li><r-icon name="check-square" /><div class="text">check-square</div></li>
    <li><r-icon name="check-active-square" /><div class="text">check-active-square</div></li>
    <li><r-icon name="radio-circle" /><div class="text">radio-circle</div></li>
    <li><r-icon name="radio-active-circle" /><div class="text">radio-active-circle</div></li>
    <li><r-icon name="success" /><div class="text">success</div></li>
    <li><r-icon name="fail" /><div class="text">fail</div></li>
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
