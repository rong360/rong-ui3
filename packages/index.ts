import type { App } from 'vue';
import Button from './button/index.vue';
import Cell from './cell/index.vue';
import CellGroup from './cell-group/index.vue';
import Overlay from './overlay/index.vue';
import Popup from './popup/index.vue';
import Icon from './icon/index.vue';
import FlexFixed from './flex-fixed/index.vue';
import Divider from './divider/index.vue';
import Dialog from './dialog/index.vue';

import './button/style/index.less';
import './cell/style/index.less';
import './cell-group/style/index.less';
import './overlay/style/index.less';
import './popup/style/index.less';
import './icon/style/index.less';
import './flex-fixed/style/index.less';
import './divider/style/index.less';
import './dialog/style/index.less';

export * from './button/index.vue';
export * from './cell/index.vue';
export * from './cell-group/index.vue';
export * from './overlay/index.vue';
export * from './popup/index.vue';
export * from './icon/index.vue';
export * from './flex-fixed/index.vue';
export * from './divider/index.vue';
export * from './dialog/index.vue';

const install = (app: App): void => {
  const components = [Button, Cell, CellGroup, Overlay, Popup, Icon, FlexFixed, Divider, Dialog];
  components.forEach((component) => {
    app.use(component);
  });
};
declare module 'vue' {
  interface GlobalComponents {
    RButton: typeof Button;
RCell: typeof Cell;
RCellGroup: typeof CellGroup;
ROverlay: typeof Overlay;
RPopup: typeof Popup;
RIcon: typeof Icon;
RFlexFixed: typeof FlexFixed;
RDivider: typeof Divider;
RDialog: typeof Dialog;

  }
}
const version = '0.0.1';

export { install, version, Button, Cell, CellGroup, Overlay, Popup, Icon, FlexFixed, Divider, Dialog };
export default { install, version };
