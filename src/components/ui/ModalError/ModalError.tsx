import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import { Notification } from '@/components/ui/Notification';

export const ModalError = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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

  const onClickCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal
          onClose={onClickCloseModal}
          className="top-1/4 px-6 py-8 md:w-[540px] md:p-12 xl:w-[572px] xl:p-16"
        >
          <Notification type="error" />
        </Modal>
      )}
    </>
  );
};
