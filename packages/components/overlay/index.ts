import { withInstall } from '../../utils';
import _Overlay from './overlay.vue';

export const Overlay = withInstall(_Overlay);
export default Overlay;

declare module 'vue' {
  export interface GlobalComponents {
    ROverlay: typeof Overlay;
  }
}
