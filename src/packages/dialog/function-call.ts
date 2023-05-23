import { render, createVNode, type VNode } from 'vue';
import Dialog, { type DialogProps } from './index.vue';

type ShowDialogRet = {
  remove: () => void;
  vNode: VNode;
};

export interface ShowDialogOtions extends Partial<DialogProps> {
  onCancel?: (this: ShowDialogRet) => void;
  onConfirm?: (this: ShowDialogRet) => void;
  onClickOverlay?: (this: ShowDialogRet) => void;
  onClickCloseIcon?: (this: ShowDialogRet) => void;
}

export const showDialog = (options: ShowDialogOtions, children?: unknown): ShowDialogRet => {
  const { onCancel, onConfirm, onClickOverlay, onClickCloseIcon, ...restOptions } = options;
  const vNode = createVNode(
    Dialog,
    {
      show: true,
      from$dialog: true,
      onCancel: () => onCancel && onCancel.call(ret),
      onConfirm: () => onConfirm && onConfirm.call(ret),
      onClickOverlay: () => onClickOverlay && onClickOverlay.call(ret),
      onClickCloseIcon: () => onClickCloseIcon && onClickCloseIcon.call(ret),
      ...restOptions
    },
    children
  );
  const remove = () => ((vNode?.component?.proxy as any).isDialogShow = false);
  const ret: ShowDialogRet = { remove, vNode };

  render(vNode, document.body);

  return ret;
};
