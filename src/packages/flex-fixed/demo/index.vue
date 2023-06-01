<template>
  <r-flex-fixed @scroll="scroll" @scroll-debounce="scrollDebounce">
    <template #header>
      <nav-bar>
        FlexFixed
        <template #bottom>
          <div class="tips">
            <div class="col">
              <h3>@scroll</h3>
              <p>scrollTop: {{ scrollInfo.scrollTop }}</p>
              <p>maxScrollTop: {{ scrollInfo.maxScrollTop }}</p>
              <p>direction: {{ scrollInfo.direction }}</p>
              <p>status: {{ scrollInfo.status }}</p>
            </div>
            <div class="col">
              <h3>@scroll-debounce</h3>
              <p>scrollTop: {{ scrollDebounceInfo.scrollTop }}</p>
              <p>maxScrollTop: {{ scrollDebounceInfo.maxScrollTop }}</p>
              <p>direction: {{ scrollDebounceInfo.direction }}</p>
              <p>status: {{ scrollDebounceInfo.status }}</p>
            </div>
          </div>
        </template>
      </nav-bar>
    </template>
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
    <p>21</p>
    <p>22</p>
    <p>23</p>
    <p>24</p>
    <p>25</p>
    <p>26</p>
    <p>27</p>
    <p>28</p>
    <p>29</p>
    <p>30</p>
    <p>31</p>
    <p>32</p>
    <p>33</p>
    <p>34</p>
    <p>35</p>
    <p>36</p>
    <p>37</p>
    <p>38</p>
    <template #footer>
      <r-button type="primary" block shape="square">提交</r-button>
    </template>
  </r-flex-fixed>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const scrollInfo = reactive({
  scrollTop: 0,
  maxScrollTop: 0,
  direction: '',
  status: ''
});
const scroll = ({ scrollTop, maxScrollTop, direction }: any) => {
  scrollInfo.status = '滚动中...';
  if (maxScrollTop - scrollTop < 10) {
    scrollInfo.status = '滚动底啦~';
  } else if (scrollTop <= 0) {
    scrollInfo.status = '滚动顶啦~';
  }
  scrollInfo.scrollTop = scrollTop;
  scrollInfo.maxScrollTop = maxScrollTop;
  scrollInfo.direction = direction;
};

const scrollDebounceInfo = reactive({
  scrollTop: 0,
  maxScrollTop: 0,
  direction: '',
  status: ''
});
const scrollDebounce = ({ scrollTop, maxScrollTop, direction }: any) => {
  scrollDebounceInfo.status = '滚动中...';
  if (maxScrollTop - scrollTop < 10) {
    scrollDebounceInfo.status = '滚动底啦~';
  } else if (scrollTop <= 0) {
    scrollDebounceInfo.status = '滚动顶啦~';
  }
  scrollDebounceInfo.scrollTop = scrollTop;
  scrollDebounceInfo.maxScrollTop = maxScrollTop;
  scrollDebounceInfo.direction = direction;
};
</script>

<style lang="less" scoped>
.tips {
  padding: 5px 15px;
  font-size: 12px;
  background-color: lightyellow;
  display: flex;
  .col {
    flex: 1;
  }
}
</style>
