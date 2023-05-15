<template>
  <demo-item title="嵌套内容">
    <r-button type="primary" @click="show = true">嵌套内容</r-button>
    <r-overlay v-model:show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="scroll-area" style="width: 120px; height: 120px; background-color: #fff; overflow-y: scroll">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
        </div>
      </div>
    </r-overlay>
  </demo-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
