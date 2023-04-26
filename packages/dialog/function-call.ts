import { render, h } from 'vue';
import Dialog, { type DialogProps } from './index.vue';

export type $Dialog = (props: Partial<DialogProps>) => { remove: () => void };

export const $dialog: $Dialog = (props) => {
  props = Object.assign(
    {
      show: true
    },
    props
  );
  const instance = h(Dialog, { ...props, from$dialog: true }) as any;
  render(instance, document.body);

  const remove = () => (instance.component.proxy.isDialogShow = false);

  return {
    remove
  };
};

declare module 'vue' {
  // 使 TypeScript 更好地支持 this.$dialog方式调用
  interface ComponentCustomProperties {
    $dialog: $Dialog;
  }
}
