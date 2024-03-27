import React from 'react';
import { classnames } from '@/utils/classnames';
import { CheckBoxProps } from './types';
import contacts from '@/data/contacts.json';

export const CheckBox: React.FC<CheckBoxProps> = ({ register, errors }) => {
  const handleAgreementClick = () => {
    console.log('agreement');
  };

  return (
    <div className="mb-6 flex items-start gap-[9px]">
      <input
        type="checkbox"
        id="agreement"
        aria-label={contacts.checkBox.agreeDeclaration}
        {...register('checked', {
          required: true,
        })}
        className={classnames(
          'relative top-[2px] cursor-pointer appearance-none border-[1px] border-[#91897F] bg-mainBcg p-1.5 checked:border-accent checked:bg-accent',
          errors?.checked && 'border-error',
        )}
      />
      <label
        htmlFor="agreement"
        className="font-montserrat text-[12px] font-normal not-italic leading-4 tracking-[0.2px] text-text"
        style={{ color: errors?.checked ? '#CB3D3D' : '#292929' }}
      >
        {contacts.checkBox.agreeDeclaration}
        <button
          type="button"
          onClick={handleAgreementClick}
          className="block cursor-pointer font-montserrat text-[12px] font-normal not-italic leading-4 tracking-[0.2px] text-accent transition hover:text-hover"
        >
          {contacts.checkBox.conditionsLink}
        </button>
      </label>
      {/* {errors?.checked && <p>error</p>} */}
    </div>
  );
};
