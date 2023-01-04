import { withInstall } from '../utils';
import _Dialog from './dialog.vue';

export { $dialog } from './function-call';

export type { DialogProps, DialogProps as DialogOptions } from './types';

export const Dialog = withInstall(_Dialog);
export default Dialog;

declare module 'vue' {
  export interface GlobalComponents {
    RDialog: typeof Dialog;
  }
}
