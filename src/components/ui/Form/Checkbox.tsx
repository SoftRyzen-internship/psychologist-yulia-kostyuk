import React from 'react';
import { CheckBoxProps } from './types';
import contacts from '@/data/contacts.json';

export const CheckBox: React.FC<CheckBoxProps> = ({ register }) => {
  const handleAgreementClick = () => {
    console.log('agreement');
  };
  return (
    <div className="lg:pt-[10px] relative pb-6">
      <input
        type="checkbox"
        id="agreement"
        aria-label={contacts.checkBox.agreeDeclaration}
        {...register('checked', {
          required: true,
        })}
        className="bg-red-100 p-1 accent-[#D6D0C5]"
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
    </div>
  );
};
