import React from 'react';
import { classnames } from '@/utils/classnames';
import { CheckBoxProps } from './types';
import contacts from '@/data/contacts.json';
import { ModalPolicy } from '../ModalPolicy';

export const CheckBox: React.FC<CheckBoxProps> = ({ register, errors }) => {
  return (
    <>
      <label
        className={classnames(
          'flex cursor-pointer items-start gap-[9px] font-montserrat text-[12px] font-normal not-italic leading-4 tracking-[0.2px] md:gap-2',
          errors?.checked ? 'text-error' : 'text-text',
        )}
      >
        <input
          type={contacts.checkBox.type}
          aria-label={contacts.checkBox.agreeDeclaration}
          {...register(contacts.checkBox.inputName, {
            required: true,
          })}
          className={classnames(
            'relative top-[2px] appearance-none border-[1px] bg-mainBcg p-1.5 checked:border-accent checked:bg-accent',
            errors?.checked ? 'border-error' : 'border-borderCheckbox',
          )}
        />
        {contacts.checkBox.agreeDeclaration}
      </label>
      <ModalPolicy nameBtn={contacts.checkBox.conditionsLink} variant="form" />
    </>
  );
};
