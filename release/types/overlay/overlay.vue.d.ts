import type { CSSProperties } from 'vue';
export declare const overlayProps: {
    show: BooleanConstructor;
    className: StringConstructor;
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
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
};
declare const _sfc_main: import("vue").DefineComponent<{
    show: BooleanConstructor;
    className: StringConstructor;
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
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
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    onClick: (e: MouseEvent) => void;
    style: import("vue").ComputedRef<{
        transitionDuration: string;
        zIndex: string | number;
    } & CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:show" | "click")[], "update:show" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    className: StringConstructor;
    customStyle: {
        type: import("vue").PropType<CSSProperties>;
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
    "onUpdate:show"?: (...args: any[]) => any;
    onClick?: (...args: any[]) => any;
}, {
    show: boolean;
    customStyle: CSSProperties;
    zIndex: string | number;
    animate: boolean;
    duration: number;
    transition: string;
    closeOnClickOverlay: boolean;
}>;
export default _sfc_main;
