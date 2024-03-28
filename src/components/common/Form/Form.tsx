'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { FormInput } from '../../ui/FormInput/FomrInput';
import { Button } from '../../ui/Button';
import { CheckBox } from '../../ui/CheckBox/Checkbox';
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
      className="flex flex-col xl:w-[592px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {contacts.inputs.map(item => (
        <FormInput
          key={item.name.label}
          textarea={item.name.textarea}
          config={item.name}
          register={register}
          errors={errors}
        />
      ))}
      <CheckBox register={register} errors={errors} />
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
