import type { Component, App, Plugin } from 'vue';
// import { camelize } from '../utils';

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

// type SFCWithInstall<T> = T & Plugin;

/**
 * 在组件上添加全局注册方法和实例方法的高阶函数
 * @param component 要添加方法的组件
 * @param instanceMethods 要添加到组件实例上的方法
 * @returns
 */
export const withInstall = <T extends Component, K extends object>(
  component: T,
  instanceMethods?: K
): T & K & Plugin => {
  const comp = component as T & K & Plugin;
  comp.install = (app: App) => {
    const { name } = comp;
    if (name) app.component(name, comp);
    for (const key in instanceMethods) {
      app.config.globalProperties[key] = instanceMethods[key];
    }
  };
  // 返回添加方法后的组件对象
  return Object.assign(comp, instanceMethods);
};

// export const withInstall222 = <T>(comp: T) => {
//   (comp as SFCWithInstall<T>).install = (app: App) => {
//     const { name } = comp as any;
//     if (name) {
//       app.component(camelize(`-${name}`), comp as Component);
//     }
//   };
//   return comp as SFCWithInstall<T>;
// };
