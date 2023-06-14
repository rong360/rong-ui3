
import type { App } from 'vue';

import Button from './button/index.vue';
import Cell from './cell/index.vue';
import CellGroup from './cell-group/index.vue';
import Overlay from './overlay/index.vue';
import Popup from './popup/index.vue';
import Icon from './icon/index.vue';
import NavBar from './nav-bar/index.vue';
import FlexFixed from './flex-fixed/index.vue';
import Divider from './divider/index.vue';
import Dialog from './dialog/index.vue';
import Form from './form/index.vue';
import FormItem from './form-item/index.vue';
import Input from './input/index.vue';

export * from './button/index.vue';
export * from './cell/index.vue';
export * from './cell-group/index.vue';
export * from './overlay/index.vue';
export * from './popup/index.vue';
export * from './icon/index.vue';
export * from './nav-bar/index.vue';
export * from './flex-fixed/index.vue';
export * from './divider/index.vue';
export * from './dialog/index.vue';
export * from './form/index.vue';
export * from './form-item/index.vue';
export * from './input/index.vue';

const install = (app: App): void => {
  const components = [Button, Cell, CellGroup, Overlay, Popup, Icon, NavBar, FlexFixed, Divider, Dialog, Form, FormItem, Input];
  components.forEach((component) => {
    app.use(component);
  });
};
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    RButton: typeof Button;
RCell: typeof Cell;
RCellGroup: typeof CellGroup;
ROverlay: typeof Overlay;
RPopup: typeof Popup;
RIcon: typeof Icon;
RNavBar: typeof NavBar;
RFlexFixed: typeof FlexFixed;
RDivider: typeof Divider;
RDialog: typeof Dialog;
RForm: typeof Form;
RFormItem: typeof FormItem;
RInput: typeof Input;

  }
}
const version = '0.0.1';

export { install, version, Button, Cell, CellGroup, Overlay, Popup, Icon, NavBar, FlexFixed, Divider, Dialog, Form, FormItem, Input };
export default { install, version };
