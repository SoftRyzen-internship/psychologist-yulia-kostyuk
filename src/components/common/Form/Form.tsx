'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormInput } from '../../ui/FormInput/FomrInput';
import { Button } from '../../ui/Button';
import { CheckBox } from '../../ui/CheckBox/Checkbox';
import { Loader } from '@/components/ui/Loader';

import { FormData } from './types';

import common from '@/data/common.json';
import contacts from '@/data/contacts.json';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);

  useFormPersist('FormData', {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    try {
      setIsLoading(true);
      console.log(data);
      alert('ваші дані відправлено');
      reset();
    } catch {
      alert('ваші дані НЕ відправлено');
    } finally {
      setIsLoading(false);
    }
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
        className="w-full px-12 md:w-[185px] smOnly:mx-auto"
      >
        {!isLoading ? common.buttonsText.v3 : <Loader />}
      </Button>
    </form>
  );
};
