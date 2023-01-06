export declare const FlexFixed: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            hideFooterOnKeyboardShow: boolean;
            useFixed: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            hideFooterOnKeyboardShow: {
                type: BooleanConstructor;
            };
            useFixed: {
                type: BooleanConstructor;
            };
        }>> & {
            onScroll?: (...args: any[]) => any;
            "onScroll-debounce"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "hideFooterOnKeyboardShow" | "useFixed">;
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
        $emit: (event: "scroll" | "scroll-debounce", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            hideFooterOnKeyboardShow: {
                type: BooleanConstructor;
            };
            useFixed: {
                type: BooleanConstructor;
            };
        }>> & {
            onScroll?: (...args: any[]) => any;
            "onScroll-debounce"?: (...args: any[]) => any;
        }, {
            bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
            onScroll: (e: Event) => void;
            touchstartMain: (e: Event) => void;
            showFooter: import("vue").Ref<boolean>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "scroll-debounce")[], string, {
            hideFooterOnKeyboardShow: boolean;
            useFixed: boolean;
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
        hideFooterOnKeyboardShow: {
            type: BooleanConstructor;
        };
        useFixed: {
            type: BooleanConstructor;
        };
    }>> & {
        onScroll?: (...args: any[]) => any;
        "onScroll-debounce"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
        onScroll: (e: Event) => void;
        touchstartMain: (e: Event) => void;
        showFooter: import("vue").Ref<boolean>;
    }> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    hideFooterOnKeyboardShow: {
        type: BooleanConstructor;
    };
    useFixed: {
        type: BooleanConstructor;
    };
}>> & {
    onScroll?: (...args: any[]) => any;
    "onScroll-debounce"?: (...args: any[]) => any;
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    onScroll: (e: Event) => void;
    touchstartMain: (e: Event) => void;
    showFooter: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "scroll-debounce")[], "scroll" | "scroll-debounce", {
    hideFooterOnKeyboardShow: boolean;
    useFixed: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin;
export default FlexFixed;
declare module 'vue' {
    interface GlobalComponents {
        RFlexfixed: typeof FlexFixed;
    }
}
