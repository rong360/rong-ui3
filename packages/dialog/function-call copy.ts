import { createApp, render, h } from 'vue';
import Dialog from './dialog.vue';
import type { DialogProps } from './types';

export const $dialog = (props: Partial<DialogProps>) => {
  props = Object.assign(
    {
      show: true,
      round: true
    },
    props
  );
  const instance = h(Dialog, { ...props, from$dialog: true }) as any;
  render(instance, document.body);

  const remove = () => (instance.component.proxy.showDialog = false);

  return {
    remove
  };
};

export const $dialog3 = (options: Partial<DialogProps>) => {
  options = Object.assign(
    {
      show: true,
      round: true
    },
    options
  );
  // Append DOM
  const frag = document.createDocumentFragment() as unknown as Element;
  const app = createApp(Dialog, options);
  app.config.globalProperties.from$dialog = true;
  const vm = app.mount(frag);
  document.body.append(frag);

  // Remove
  type VM = typeof vm & { showDialog: boolean };
  const remove = () => ((vm as VM).showDialog = false);

  return {
    remove,
    vm,
    app
  };
};
