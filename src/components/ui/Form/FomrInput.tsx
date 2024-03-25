import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputProps } from './types';

export const FormInput: React.FC<FormInputProps> = ({
  textarea,
  label,
  inputName,
  placeholder,
  required,
  register,
  pattern,
  minLength,
}) => {
  return (
    <div className="flex flex-col pb-8 last:pb-3 md:last:pb-4">
      <label
        htmlFor={label}
        className="pb-2 font-montserrat text-sm xl:text-base"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={inputName}
          placeholder={placeholder}
          {...register(inputName, { required, pattern, minLength })}
          className="h-24 bg-cardBcg px-4 py-3 xl:text-base"
        />
      ) : (
        <input
          id={inputName}
          placeholder={placeholder}
          {...register(inputName, { required, pattern, minLength })}
          className="bg-cardBcg px-4 py-3 xl:text-base"
        />
      )}
    </div>
  );
};
