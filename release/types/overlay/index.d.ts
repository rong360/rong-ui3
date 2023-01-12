export declare const Overlay: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            show: boolean;
            customStyle: import("vue").CSSProperties;
            zIndex: string | number;
            animate: boolean;
            duration: number;
            transition: string;
            closeOnClickOverlay: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            show: BooleanConstructor;
            className: StringConstructor;
            customStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            animate: {
                type: BooleanConstructor;
                default: true;
            };
            duration: {
                type: import("vue").PropType<number>;
                default: number;
            };
            transition: {
                type: import("vue").PropType<string>;
                default: string;
            };
            closeOnClickOverlay: {
                type: BooleanConstructor;
                default: true;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:show"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "show" | "customStyle" | "zIndex" | "animate" | "duration" | "transition" | "closeOnClickOverlay">;
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
        $emit: (event: "click" | "update:show", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            show: BooleanConstructor;
            className: StringConstructor;
            customStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            animate: {
                type: BooleanConstructor;
                default: true;
            };
            duration: {
                type: import("vue").PropType<number>;
                default: number;
            };
            transition: {
                type: import("vue").PropType<string>;
                default: string;
            };
            closeOnClickOverlay: {
                type: BooleanConstructor;
                default: true;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            "onUpdate:show"?: (...args: any[]) => any;
        }, {
            bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
            onClick: (e: MouseEvent) => void;
            style: import("vue").ComputedRef<{
                transitionDuration: string;
                zIndex: string | number;
            } & import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:show")[], string, {
            show: boolean;
            customStyle: import("vue").CSSProperties;
            zIndex: string | number;
            animate: boolean;
            duration: number;
            transition: string;
            closeOnClickOverlay: boolean;
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
        className: StringConstructor;
        customStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: () => {};
        };
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        animate: {
            type: BooleanConstructor;
            default: true;
        };
        duration: {
            type: import("vue").PropType<number>;
            default: number;
        };
        transition: {
            type: import("vue").PropType<string>;
            default: string;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: true;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
        "onUpdate:show"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
        onClick: (e: MouseEvent) => void;
        style: import("vue").ComputedRef<{
            transitionDuration: string;
            zIndex: string | number;
        } & import("vue").CSSProperties>;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    className: StringConstructor;
    customStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    animate: {
        type: BooleanConstructor;
        default: true;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    transition: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    "onUpdate:show"?: (...args: any[]) => any;
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    onClick: (e: MouseEvent) => void;
    style: import("vue").ComputedRef<{
        transitionDuration: string;
        zIndex: string | number;
    } & import("vue").CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:show")[], "click" | "update:show", {
    show: boolean;
    customStyle: import("vue").CSSProperties;
    zIndex: string | number;
    animate: boolean;
    duration: number;
    transition: string;
    closeOnClickOverlay: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default Overlay;
declare module 'vue' {
    interface GlobalComponents {
        ROverlay: typeof Overlay;
    }
}
