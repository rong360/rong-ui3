import { withInstall } from '../../utils';
import _Popup from './popup.vue';

export const Popup = withInstall(_Popup);
export default Popup;
export { popupProps } from './popup.vue';
export type { PopupProps } from './popup.vue';
export type { PopupPosition } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    RPopup: typeof _Popup;
  }
}
