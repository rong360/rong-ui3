export declare const dialogProps: {
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
};
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {
    bem: (el?: string | (Record<string, boolean> | (string | Record<string, boolean>)[]), mods?: Record<string, boolean> | (string | Record<string, boolean>)[]) => string;
    showDialog: import("vue").Ref<boolean>;
    clickOverlay: (e: MouseEvent) => void;
    PopupClosed: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:show" | "clickOverlay")[], "update:show" | "clickOverlay", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>;
export default _sfc_main;
