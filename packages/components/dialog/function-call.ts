import { createApp } from "vue";
import Dialog from "./dialog.vue";
import type { DialogProps } from "./types";

type DialogOptions = Partial<DialogProps>;

export const $dialog = (options: DialogOptions, components: any[]) => {
  options = Object.assign(
    {
      show: true,
      round: true,
    },
    options
  );
  // Append DOM
  const frag = document.createDocumentFragment() as unknown as Element;
  const app = createApp(Dialog, options);
  app.config.globalProperties.from$dialog = true;
  components.forEach((component) => app.use(component));
  const vm = app.mount(frag);
  document.body.append(frag);

  // Remove
  type VM = typeof vm & { showDialog: boolean };
  const remove = () => ((vm as VM).showDialog = false);

  return {
    remove,
    vm,
    app,
  };
};
