import { UseFormRegister, ValidationRule, FieldErrors } from 'react-hook-form';

export type FormData = {
  [key: string]: string;
};

export type FormInputProps = {
  textarea: boolean;
  label: string;
  inputName: string;
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
  placeholder: string;
  required: boolean;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
};

export type CheckBoxProps = {
  register: UseFormRegister<FormData>;
};
