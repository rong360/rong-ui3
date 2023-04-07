import { withInstall } from '../utils';
import Dialog from './index.vue';
import { $dialog, type $Dialog } from './function-call';

declare module 'vue' {
  // 使 TypeScript 更好地支持 this.$dialog方式调用
  interface ComponentCustomProperties {
    $dialog: $Dialog;
  }
}

export { dialogProps } from './index.vue';

export default withInstall(Dialog, { $dialog });
