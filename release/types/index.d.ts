import type { App } from 'vue';
import Dialog from './dialog';
import FlexFixed from './flex-fixed';
import Overlay from './overlay';
import Popup from './popup';

export { Dialog, FlexFixed, Overlay, Popup };

declare namespace _default {
  export { install };
  export { version };
}
export function install(app: App): void;
export const version: '0.0.1';
export default _default;
