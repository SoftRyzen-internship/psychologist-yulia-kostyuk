'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { FormInput } from './FomrInput';
import { Button } from '../Button';
import { CheckBox } from './Checkbox';
import common from '@/data/common.json';
import contacts from '@/data/contacts.json';
import { FormData } from './types';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();
  console.log(errors);

  useFormPersist('FormData', {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
  };

  return (
    <form
      className=" flex flex-col px-5 py-10 md:px-8 md:py-12 xl:w-[592px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {contacts.inputs.map(input => (
        <div key={input.label}>
          <FormInput
            textarea={input.textarea}
            required={input.required}
            inputName={input.inputName}
            label={input.label}
            placeholder={input.placeholder}
            register={register}
            errors={errors}
            pattern={new RegExp(input.pattern)}
          />
        </div>
      ))}
      <CheckBox register={register} />
      <Button
        tag="button"
        accent={true}
        className="w-full md:w-[185px] smOnly:mx-auto"
      >
        {common.buttonsText.v1}
      </Button>
    </form>
  );
};
