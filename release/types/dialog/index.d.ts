export { $dialog } from './function-call';
export type { DialogProps, DialogProps as DialogOptions } from './types';
export declare const Dialog: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            show: boolean;
            zIndex: string | number;
            animate: boolean;
            duration: number;
            closeOnClickOverlay: boolean;
            overlay: boolean;
            overlayStyle: import("vue").CSSProperties;
            position: import("../popup").PopupPosition;
            round: boolean;
            popupStyle: import("vue").CSSProperties;
            removeDialogOnHashChange: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            message: (ObjectConstructor | StringConstructor | FunctionConstructor)[];
            className: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            removeDialogOnHashChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            show: BooleanConstructor;
            overlay: {
                type: BooleanConstructor;
                default: true;
            };
            overlayClass: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            overlayTransition: StringConstructor;
            closeOnClickOverlay: {
                type: BooleanConstructor;
                default: true;
            };
            position: {
                type: import("vue").PropType<import("../popup").PopupPosition>;
                default: import("../popup").PopupPosition;
            };
            round: BooleanConstructor;
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            popupClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            teleport: (StringConstructor | {
                new (): Element;
                prototype: Element;
            })[];
            animate: {
                type: BooleanConstructor;
                default: true;
            };
            duration: {
                type: import("vue").PropType<number>;
                default: number;
            };
            transition: StringConstructor;
        }>> & {
            "onUpdate:show"?: (...args: any[]) => any;
            onClickOverlay?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "show" | "zIndex" | "animate" | "duration" | "closeOnClickOverlay" | "overlay" | "overlayStyle" | "position" | "round" | "popupStyle" | "removeDialogOnHashChange">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:show" | "clickOverlay", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            message: (ObjectConstructor | StringConstructor | FunctionConstructor)[];
            className: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            removeDialogOnHashChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            show: BooleanConstructor;
            overlay: {
                type: BooleanConstructor;
                default: true;
            };
            overlayClass: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            overlayTransition: StringConstructor;
            closeOnClickOverlay: {
                type: BooleanConstructor;
                default: true;
            };
            position: {
                type: import("vue").PropType<import("../popup").PopupPosition>;
                default: import("../popup").PopupPosition;
            };
            round: BooleanConstructor;
            popupStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            popupClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            teleport: (StringConstructor | {
                new (): Element;
                prototype: Element;
            })[];
            animate: {
                type: BooleanConstructor;
                default: true;
            };
            duration: {
                type: import("vue").PropType<number>;
                default: number;
            };
            transition: StringConstructor;
        }>> & {
            "onUpdate:show"?: (...args: any[]) => any;
            onClickOverlay?: (...args: any[]) => any;
        }, {
            bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
            showDialog: import("vue").Ref<boolean>;
            clickOverlay: (e: MouseEvent) => void;
            PopupClosed: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:show" | "clickOverlay")[], string, {
            show: boolean;
            zIndex: string | number;
            animate: boolean;
            duration: number;
            closeOnClickOverlay: boolean;
            overlay: boolean;
            overlayStyle: import("vue").CSSProperties;
            position: import("../popup").PopupPosition;
            round: boolean;
            popupStyle: import("vue").CSSProperties;
            removeDialogOnHashChange: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        message: (ObjectConstructor | StringConstructor | FunctionConstructor)[];
        className: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        removeDialogOnHashChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        show: BooleanConstructor;
        overlay: {
            type: BooleanConstructor;
            default: true;
        };
        overlayClass: StringConstructor;
        overlayStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        overlayTransition: StringConstructor;
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: true;
        };
        position: {
            type: import("vue").PropType<import("../popup").PopupPosition>;
            default: import("../popup").PopupPosition;
        };
        round: BooleanConstructor;
        popupStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        popupClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        teleport: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        animate: {
            type: BooleanConstructor;
            default: true;
        };
        duration: {
            type: import("vue").PropType<number>;
            default: number;
        };
        transition: StringConstructor;
    }>> & {
        "onUpdate:show"?: (...args: any[]) => any;
        onClickOverlay?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
        showDialog: import("vue").Ref<boolean>;
        clickOverlay: (e: MouseEvent) => void;
        PopupClosed: () => void;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    message: (ObjectConstructor | StringConstructor | FunctionConstructor)[];
    className: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    removeDialogOnHashChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    overlayTransition: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: import("vue").PropType<import("../popup").PopupPosition>;
        default: import("../popup").PopupPosition;
    };
    round: BooleanConstructor;
    popupStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    popupClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    teleport: (StringConstructor | {
        new (): Element;
        prototype: Element;
    })[];
    animate: {
        type: BooleanConstructor;
        default: true;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    transition: StringConstructor;
}>> & {
    "onUpdate:show"?: (...args: any[]) => any;
    onClickOverlay?: (...args: any[]) => any;
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    showDialog: import("vue").Ref<boolean>;
    clickOverlay: (e: MouseEvent) => void;
    PopupClosed: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:show" | "clickOverlay")[], "update:show" | "clickOverlay", {
    show: boolean;
    zIndex: string | number;
    animate: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    overlayStyle: import("vue").CSSProperties;
    position: import("../popup").PopupPosition;
    round: boolean;
    popupStyle: import("vue").CSSProperties;
    removeDialogOnHashChange: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Dialog;
declare module 'vue' {
    interface GlobalComponents {
        RDialog: typeof Dialog;
    }
}
