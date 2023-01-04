import type { App } from 'vue';
import Dialog from './dialog';
import FlexFixed from './flex-fixed';
import Overlay from './overlay';
import Popup from './popup';

import './dialog/style/index.less';
import './flex-fixed/style/index.less';
import './overlay/style/index.less';
import './popup/style/index.less';

export * from './dialog';
export * from './flex-fixed';
export * from './overlay';
export * from './popup';

const install = (app: App): void => {
  const components = [Dialog, FlexFixed, Overlay, Popup];
  components.forEach((component) => {
    app.use(component);
  });
};

const version = '0.0.0';

export { install, version, Dialog, FlexFixed, Overlay, Popup };
export default { install, version };
