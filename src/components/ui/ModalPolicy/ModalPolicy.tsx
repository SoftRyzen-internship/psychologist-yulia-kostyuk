'use client';

import React, { useEffect, useState } from 'react';

import { classnames } from '@/utils/classnames';

import { Modal } from '@/components/ui/Modal';
import { Conditions } from '@/components/common/Conditions';

import { ModalPolicyProps } from './types';

export const ModalPolicy: React.FC<ModalPolicyProps> = ({
  nameBtn,
  variant,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const onClickOpenModal = () => {
    setIsOpen(true);
  };

  const onClickCloseModal = () => {
    setIsOpen(false);
  };

  const btnClasses = classnames(
    'block cursor-pointer font-montserrat font-normal not-italic transition',
    {
      'ml-5 mr-auto mb-6 sm:inline-block sm:ml-[45px] sm:relative sm:top-[-16px] md:static md:ml-5 text-[12px] leading-4 tracking-[0.2px] text-accent hover:text-hover md:block':
        variant === 'form',
      'text-text smOnly:mb-3 hover:text-accent': variant === 'footer',
    },
  );

  return (
    <>
      <button type="button" onClick={onClickOpenModal} className={btnClasses}>
        {nameBtn}
      </button>
      {isOpen && (
        <Modal
          onClose={onClickCloseModal}
          className="top-[32px] h-[576px] px-6 py-12 md:h-[650px] md:w-[704px] md:p-12 xl:top-[80px] xl:h-[680px] xl:w-[1216px] xl:p-16"
        >
          <Conditions />
        </Modal>
      )}
    </>
  );
};
