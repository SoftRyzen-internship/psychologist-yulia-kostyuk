'use client';

import React, { useEffect, useState } from 'react';

import { Modal } from '@/components/ui/Modal';
import { Conditions } from '@/components/common/Conditions';

export const ModalPolicy = () => {
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
  return (
    <>
      <button
        type="button"
        onClick={onClickOpenModal}
        className="text block text-start font-montserrat transition hover:text-accent smOnly:mb-3"
      >
        Політика конфіденційності
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
