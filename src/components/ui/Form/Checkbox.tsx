import React from 'react';
import { classnames } from '@/utils/classnames';
import { CheckBoxProps } from './types';
import contacts from '@/data/contacts.json';

export const CheckBox: React.FC<CheckBoxProps> = ({ register, errors }) => {
  const handleAgreementClick = () => {
    console.log('agreement');
  };

  return (
    <div className="lg:pt-[10px] flex items-start pb-6">
      <input
        type="checkbox"
        id="agreement"
        aria-label={contacts.checkBox.agreeDeclaration}
        {...register('checked', {
          required: true,
        })}
        className={classnames(
          'relative top-[3px] appearance-none border-2 border-[#91897F] bg-mainBcg p-1.5 checked:bg-accent',
          errors?.checked && 'border-error',
        )}
      />
      <label
        htmlFor="agreement"
        className="ml-[9px] text-xs tracking-[0.2px] text-text"
      >
        {contacts.checkBox.agreeDeclaration}
        <button
          type="button"
          onClick={handleAgreementClick}
          className="text-accent"
        >
          {contacts.checkBox.conditionsLink}
        </button>
      </label>
      {/* {errors?.checked && <p>error</p>} */}
    </div>
  );
};
