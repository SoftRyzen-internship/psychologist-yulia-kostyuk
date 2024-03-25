// import Image from 'next/image';
import React from 'react';
import { CheckBoxProps } from './types';
import contacts from '@/data/contacts.json';

export const CheckBox: React.FC<CheckBoxProps> = ({ register }) => {
  const handleAgreementClick = () => {
    console.log('agreement');
  };
  return (
    <div className="lg:pt-[10px] relative">
      <input
        type="checkbox"
        id="agreement"
        aria-label="Policy agreement checkbox"
        {...register('checked', {
          required: true,
        })}
      />
      <label htmlFor="agreement" className="">
        {/* <Image
          src="/icons/unchecked.svg"
          alt="Empty checkbox icon"
          width={24}
          height={24}
          className="policy-checkbox policy-checkbox-empty"
        /> */}
        {/* <Image
          src="/icons/checked.svg"
          alt="Filled checkbox icon"
          width={24}
          height={24}
          className="policy-checkbox policy-checkbox-filled"
        /> */}
        {contacts.checkBox.agreeDeclaration}
        <button type="button" onClick={handleAgreementClick}>
          {contacts.checkBox.conditionsLink}
        </button>
      </label>
    </div>
  );
};
