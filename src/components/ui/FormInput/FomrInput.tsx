import React from 'react';
import { classnames } from '@/utils/classnames';
import { FormInputProps } from './types';

export const FormInput: React.FC<FormInputProps> = ({
  textarea,
  config,
  errors,
  register,
}) => {
  const { name, label, placeholder, validation } = config;
  const isRequired = validation?.required;
  const isError = errors?.[name];

  return (
    <>
      <label
        htmlFor={name}
        className="text mb-2 font-montserrat font-normal not-italic text-text"
      >
        {label} {isRequired?.value && '*'}
      </label>
      {textarea ? (
        <textarea
          id={name}
          placeholder={placeholder}
          {...register(name, {
            ...validation,
            required: isRequired,
            pattern: {
              value: validation?.pattern
                ? new RegExp(validation.pattern.value)
                : new RegExp(''),
              message: validation?.pattern ? validation?.pattern?.message : '',
            },
          })}
          className="text mb-3 h-24 resize-none bg-cardBcg px-4 py-3 font-montserrat font-normal not-italic text-text outline-none placeholder:opacity-[0.4] md:mb-4"
        />
      ) : (
        <input
          aria-required="true"
          aria-invalid={isError ? 'true' : 'false'}
          aria-describedby={isError ? 'errorName' : undefined}
          id={name}
          {...register(name, {
            ...validation,
            required: isRequired,
            minLength: {
              value: validation?.minLength ? validation?.minLength?.value : 13,
              message: validation?.minLength
                ? validation?.minLength?.message
                : '',
            },
            maxLength: {
              value: validation?.maxLength ? validation?.maxLength?.value : 13,
              message: validation?.maxLength
                ? validation?.maxLength?.message
                : '',
            },
            pattern: {
              value: validation?.pattern
                ? new RegExp(validation.pattern.value)
                : new RegExp(''),
              message: validation?.pattern ? validation?.pattern?.message : '',
            },
          })}
          placeholder={placeholder}
          className={classnames(
            'text bg-cardBcg px-4 py-3 font-montserrat font-normal not-italic outline-none placeholder:opacity-[0.4]',
            isError ? 'text-error' : 'text-text',
            isError ? 'mb-0' : 'mb-8',
          )}
        />
      )}
      {isError && (
        <span
          id={`errorName${name}`}
          className="mb-2 text-right font-montserrat text-xs leading-6 tracking-[0.2px] text-error"
        >
          {isError.message}
        </span>
      )}
    </>
  );
};
