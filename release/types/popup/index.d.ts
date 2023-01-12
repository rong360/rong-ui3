import _Popup from './popup.vue';
export declare const Popup: {
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
            position: import("./types").PopupPosition;
            round: boolean;
            popupStyle: import("vue").CSSProperties;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("./types").PopupPosition>;
                default: import("./types").PopupPosition;
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
            onClose?: (...args: any[]) => any;
            onClickOverlay?: (...args: any[]) => any;
            onOpened?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "show" | "zIndex" | "animate" | "duration" | "closeOnClickOverlay" | "overlay" | "overlayStyle" | "position" | "round" | "popupStyle">;
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
        $emit: (event: "close" | "update:show" | "clickOverlay" | "opened" | "closed" | "open", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
                type: import("vue").PropType<import("./types").PopupPosition>;
                default: import("./types").PopupPosition;
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
            onClose?: (...args: any[]) => any;
            onClickOverlay?: (...args: any[]) => any;
            onOpened?: (...args: any[]) => any;
            onClosed?: (...args: any[]) => any;
            onOpen?: (...args: any[]) => any;
        }, {
            bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
            showPopup: import("vue").Ref<boolean>;
            beforeEnter: () => void;
            afterEnter: () => void;
            beforeLeave: () => void;
            afterLeave: () => void;
            clickOverlay: (e: MouseEvent) => void;
            style: import("vue").ComputedRef<{
                [x: string]: string | number;
                zIndex: string | number;
            } & import("vue").CSSProperties>;
            transitionName: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:show" | "clickOverlay" | "opened" | "closed" | "open")[], string, {
            show: boolean;
            zIndex: string | number;
            animate: boolean;
            duration: number;
            closeOnClickOverlay: boolean;
            overlay: boolean;
            overlayStyle: import("vue").CSSProperties;
            position: import("./types").PopupPosition;
            round: boolean;
            popupStyle: import("vue").CSSProperties;
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
            type: import("vue").PropType<import("./types").PopupPosition>;
            default: import("./types").PopupPosition;
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
        onClose?: (...args: any[]) => any;
        onClickOverlay?: (...args: any[]) => any;
        onOpened?: (...args: any[]) => any;
        onClosed?: (...args: any[]) => any;
        onOpen?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
        showPopup: import("vue").Ref<boolean>;
        beforeEnter: () => void;
        afterEnter: () => void;
        beforeLeave: () => void;
        afterLeave: () => void;
        clickOverlay: (e: MouseEvent) => void;
        style: import("vue").ComputedRef<{
            [x: string]: string | number;
            zIndex: string | number;
        } & import("vue").CSSProperties>;
        transitionName: import("vue").ComputedRef<string>;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./types").PopupPosition>;
        default: import("./types").PopupPosition;
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
    onClose?: (...args: any[]) => any;
    onClickOverlay?: (...args: any[]) => any;
    onOpened?: (...args: any[]) => any;
    onClosed?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    showPopup: import("vue").Ref<boolean>;
    beforeEnter: () => void;
    afterEnter: () => void;
    beforeLeave: () => void;
    afterLeave: () => void;
    clickOverlay: (e: MouseEvent) => void;
    style: import("vue").ComputedRef<{
        [x: string]: string | number;
        zIndex: string | number;
    } & import("vue").CSSProperties>;
    transitionName: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:show" | "clickOverlay" | "opened" | "closed" | "open")[], "close" | "update:show" | "clickOverlay" | "opened" | "closed" | "open", {
    show: boolean;
    zIndex: string | number;
    animate: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    overlayStyle: import("vue").CSSProperties;
    position: import("./types").PopupPosition;
    round: boolean;
    popupStyle: import("vue").CSSProperties;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Popup;
export { popupProps } from './popup.vue';
export type { PopupProps } from './popup.vue';
export type { PopupPosition } from './types';
declare module 'vue' {
    interface GlobalComponents {
        RPopup: typeof _Popup;
    }
}
