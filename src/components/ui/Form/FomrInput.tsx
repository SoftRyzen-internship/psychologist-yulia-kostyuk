import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputProps } from './types';

export const FormInput: React.FC<FormInputProps> = ({
  label,
  inputName,
  placeholder,
  required,
  register,
  pattern,
  minLength,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="font-montserrat text-sm">
        {label}
      </label>
      <input
        id={inputName}
        placeholder={placeholder}
        {...register(inputName, { required, pattern, minLength })}
      />
    </div>
  );
};
