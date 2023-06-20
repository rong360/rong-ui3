export interface FormItemRuleWithoutValidator {
  pattern?: RegExp;
  message: string;
  required?: boolean;
  [key: string]: any;
}

export interface FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (value: any, rules: FormItemRuleWithoutValidator) => boolean | Promise<boolean>;
}
