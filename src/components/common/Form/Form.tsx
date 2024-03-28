'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { FormInput } from '../../ui/FormInput/FomrInput';
import { Button } from '../../ui/Button';
import { CheckBox } from '../../ui/CheckBox/Checkbox';
import { ModalError } from '@/components/ui/ModalError';
import { ModalSuccess } from '@/components/ui/ModalSuccess';
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

  useFormPersist('FormData', {
    watch,
    setValue,
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    try {
      setIsLoading(true);
      setShowSuccessModal(true);
      reset();
    } catch {
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
      {showSuccessModal && <ModalSuccess />}
      {showErrorModal && <ModalError />}
    </>
  );
};
