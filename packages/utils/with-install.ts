import type { Component, App, Plugin } from 'vue';
import { camelize } from '../utils';

// type WithInstall<T> = T & {
//   install(app: App): void;
// };

// export function withInstall<T extends Component>(options: T) {
//   (options as Record<string, unknown>).install = (app: App) => {
//     const { name } = options;
//     if (name) {
//       // app.component(name, options);
//       app.component(camelize(`-${name}`), options);
//     }
//   };
//   return options as WithInstall<T>;
// }

/*
type InstallOptions = Component & {
  install(app: App): void;
};

export function withInstall<T extends Component>(options: InstallOptions) {
  const install = (app: App) => {
    const { name } = options;
    if (name) {
      app.component(camelize(`-${name}`), options);
    }
  };
  options.install = install;

  // if (typeof window !== 'undefined' && window.Vue) {
  //   install(window.Vue);
  // }

  return options;
}
*/

// type SFCWithInstall<T> = T & Plugin;

// export const withInstall = <T>(comp: T) => {
//   (comp as SFCWithInstall<T>).install = (app: App) => {
//     const { name } = comp as any;
//     if (name) {
//       app.component(camelize(`-${name}`), comp as Component);
//     }
//   };
//   return comp as SFCWithInstall<T>;
// };

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const { name } = comp as any;
    if (name) {
      app.component(camelize(`-${name}`), comp as Component);
    }
  };
  return comp as SFCWithInstall<T>;
};
