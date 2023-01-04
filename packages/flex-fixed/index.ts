import { withInstall } from '../utils';
import _FlexFixed from './flex-fixed.vue';

export const FlexFixed = withInstall(_FlexFixed);
export default FlexFixed;

declare module 'vue' {
  export interface GlobalComponents {
    RFlexfixed: typeof FlexFixed;
  }
}
