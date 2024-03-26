import { UseFormRegister, ValidationRule, FieldErrors } from 'react-hook-form';

export type FormData = {
  [key: string]: string;
};

export type FormInputProps = {
  config: FormInputsConfig;
  textarea: boolean;
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
};

export type FormInputsConfig = {
  name: string;
  label: string;
  placeholder?: string;
  validation?: validationInput;
};

export type validationInput = {
  required?: validationRequired;
  pattern?: validationPattern;
  minLength?: validationLength; //--
};

export type validationRequired = {
  value: boolean;
  message: string;
};

export type validationPattern = {
  value: string;
  message: string;
};

export type validationLength = {
  value: number;
  message: string;
};

export type CheckBoxProps = {
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
};
