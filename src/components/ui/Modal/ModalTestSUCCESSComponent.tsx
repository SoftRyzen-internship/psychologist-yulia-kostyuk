'use client';
import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Notification } from '@/components/ui/Notification';

export function ModalTestSUCCESSComponent() {
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
        onClick={onClickOpenModal}
        type="button"
        className="block text-accent"
      >
        MODAL SUCCESS BUTTON
      </button>
      {isOpen && (
        <Modal
          onClose={onClickCloseModal}
          className="top-1/4 px-6 py-8 md:w-[540px] md:p-12 xl:w-[572px] xl:p-16"
        >
          <Notification type="success" />
        </Modal>
      )}
    </>
  );
}
