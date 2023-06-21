<template>
  <div :class="classes.root">
    <Toolbar title="标题"></Toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { withInstall, makeStringProp } from '../utils';
import { name, bem } from './utils';
import Toolbar from './Toolbar.vue';

export const pickerProps = {
  toolbarPosition: makeStringProp<'top' | 'bottom'>('top')
};

const Picker = defineComponent({
  name,
  props: pickerProps,
  components: {
    Toolbar
  },
  setup(props) {
    const classes = reactive({
      root: computed(() => bem())
    });

    return {
      classes
    };
  }
});

export default withInstall(Picker);
</script>
