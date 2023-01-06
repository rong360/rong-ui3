import type { CSSProperties, ExtractPropTypes } from 'vue';
import type { PopupPosition } from './types';
export declare const popupProps: {
    show: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    overlayTransition: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: import("vue").PropType<PopupPosition>;
        default: PopupPosition;
    };
    round: BooleanConstructor;
    popupStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    popupClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
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
};
export declare type PopupProps = ExtractPropTypes<typeof popupProps>;
declare const _sfc_main: import("vue").DefineComponent<{
    show: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    overlayTransition: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: import("vue").PropType<PopupPosition>;
        default: PopupPosition;
    };
    round: BooleanConstructor;
    popupStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    popupClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
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
    } & CSSProperties>;
    transitionName: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickOverlay" | "update:show" | "opened" | "closed" | "open" | "close")[], "clickOverlay" | "update:show" | "opened" | "closed" | "open" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    show: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    overlayClass: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    overlayTransition: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    position: {
        type: import("vue").PropType<PopupPosition>;
        default: PopupPosition;
    };
    round: BooleanConstructor;
    popupStyle: {
        type: import("vue").PropType<CSSProperties>;
        default: () => {};
    };
    popupClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
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
    onOpened?: (...args: any[]) => any;
    onClosed?: (...args: any[]) => any;
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
}, {
    show: boolean;
    zIndex: string | number;
    animate: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    overlayStyle: CSSProperties;
    position: PopupPosition;
    round: boolean;
    popupStyle: CSSProperties;
}>;
export default _sfc_main;
