import type { App } from 'vue';
// import Dialog from "./dialog";
export * from './dialog';
export * from './flex-fixed';

declare namespace _default {
  export { install };
  export { version };
}
export function install(app: App): void;
export const version: number;
// export const Dialog: typeof Dialog;
export default _default;
