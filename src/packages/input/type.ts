export interface HTMLInput extends HTMLInputElement {
  isLocked?: boolean;
}

export type InputFormatTrigger = 'onInput' | 'onBlur'; // onInput: 在输入时执行格式化 ; onBlur: 在失焦时执行格式化
