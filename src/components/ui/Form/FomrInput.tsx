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
    <div className="flex flex-col pb-8 last:pb-3 md:last:pb-4">
      <label
        htmlFor={label}
        className={classnames(
          'pb-2 font-montserrat text-sm xl:text-base',
          isRequired?.value && "after:ml-1 after:content-['*']",
        )}
      >
        {label}
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
          className="h-24 bg-cardBcg px-4 py-3 xl:text-base"
        />
      ) : (
        <input
          {...register(name, {
            ...validation,
            required: isRequired,
            minLength: {
              value: validation?.minLength ? validation?.minLength?.value : 13,
              message: validation?.pattern ? validation?.pattern?.message : '',
            },
            pattern: {
              value: validation?.pattern
                ? new RegExp(validation.pattern.value)
                : new RegExp(''),
              message: validation?.pattern ? validation?.pattern?.message : '',
            },
          })}
          className={classnames(
            'mb-1 bg-cardBcg px-4 py-3 xl:text-base',
            isError && 'text-error',
          )}
        />
      )}
      {isError && (
        <div className="text-right text-error">
          <span
            id={`errorName${name}`}
            className="font-montserrat text-xs leading-6 tracking-[0.2px]"
          >
            {isError.message}
          </span>
        </div>
      )}
    </div>
  );
};
