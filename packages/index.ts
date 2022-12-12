import type { App } from 'vue';
import Dialog from './components/dialog';
import FlexFixed from './components/flex-fixed';
import Overlay from './components/overlay';
import Popup from './components/popup';

import './components/dialog/style/index.less';
import './components/flex-fixed/style/index.less';
import './components/overlay/style/index.less';
import './components/popup/style/index.less';

export * from './components/dialog';
export * from './components/flex-fixed';
export * from './components/overlay';
export * from './components/popup';

const install = (app: App): void => {
  const components = [Dialog, FlexFixed, Overlay, Popup];
  components.forEach((component) => {
    app.use(component);
  });
};

const version = '0.0.0';

export { install, version, Dialog, FlexFixed, Overlay, Popup };
export default { install, version };
