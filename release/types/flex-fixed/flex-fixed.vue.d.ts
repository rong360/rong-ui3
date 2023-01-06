declare const _sfc_main: import("vue").DefineComponent<{
    hideFooterOnKeyboardShow: {
        type: BooleanConstructor;
    };
    useFixed: {
        type: BooleanConstructor;
    };
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    onScroll: (e: Event) => void;
    touchstartMain: (e: Event) => void;
    showFooter: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "scroll-debounce")[], "scroll" | "scroll-debounce", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    hideFooterOnKeyboardShow: boolean;
    useFixed: boolean;
}>;
export default _sfc_main;
