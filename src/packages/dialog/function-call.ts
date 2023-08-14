import { render, createVNode, type VNode } from 'vue';
import Dialog, { type DialogProps } from './index.vue';
import { createUnqueId } from '../utils';

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
  const dialogId = createUnqueId('dialog');
  const vNode = createVNode(
    Dialog,
    {
      show: true,
      from$dialog: true,
      dialogId,
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

  const dialog = document.createElement('div');
  dialog.setAttribute('id', dialogId);
  document.body.appendChild(dialog);
  render(vNode, dialog);

  return ret;
};

export const showCustomDialog = (options: ShowDialogOtions, children?: unknown): ShowDialogRet => {
  options.showCancelButton = false;
  options.showConfirmButton = false;
  options.popupStyle = Object.assign({ backgroundColor: 'initial' }, options.popupStyle);
  options.contentStyle = Object.assign({ padding: 0 }, options.contentStyle);
  const dialog = showDialog(options, children);
  return dialog;
};
