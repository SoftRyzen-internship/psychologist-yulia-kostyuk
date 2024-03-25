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
      className="flex flex-col px-5 py-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {contacts.inputs.map(input => (
        <div key={input.label}>
          <FormInput
            inputName={input.inputName}
            label={input.label}
            placeholder={input.placeholder}
            register={register}
            errors={errors}
            pattern={new RegExp(input.pattern)}
            required={false}
            minLength={10}
          />
        </div>
      ))}

      <textarea
        placeholder={contacts.textArea.placeholder}
        // register={register}
      />
      <Button tag="button" accent={true}>
        {common.buttonsText.v1}
      </Button>
      <CheckBox register={register} />
    </form>
  );
};
