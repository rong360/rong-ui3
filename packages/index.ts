import type { App } from 'vue';
import Button from './button';
import Dialog from './dialog';
import FlexFixed from './flex-fixed';
import Icon from './icon';
import Overlay from './overlay';
import Popup from './popup';

import './button/style/index.less';
import './dialog/style/index.less';
import './flex-fixed/style/index.less';
import './icon/style/index.less';
import './overlay/style/index.less';
import './popup/style/index.less';

export * from './button';
export * from './dialog';
export * from './flex-fixed';
export * from './icon';
export * from './overlay';
export * from './popup';

const install = (app: App): void => {
  const components = [Button, Dialog, FlexFixed, Icon, Overlay, Popup];
  components.forEach((component) => {
    app.use(component);
  });
};
declare module 'vue' {
  interface GlobalComponents {
    RButton: typeof Button;
RDialog: typeof Dialog;
RFlexFixed: typeof FlexFixed;
RIcon: typeof Icon;
ROverlay: typeof Overlay;
RPopup: typeof Popup;

  }
}
const version = '0.0.1';

export { install, version, Button, Dialog, FlexFixed, Icon, Overlay, Popup };
export default { install, version };
