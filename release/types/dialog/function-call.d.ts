import type { DialogProps } from './types';
declare type DialogOptions = Partial<DialogProps>;
export declare const $dialog: (options: DialogOptions, components: any[]) => {
    remove: () => boolean;
    vm: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
    app: import("vue").App<Element>;
};
export {};
