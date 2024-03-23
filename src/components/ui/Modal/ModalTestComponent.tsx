'use client';
import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';

export function ModalTestComponent() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="outline-dashed">
      <button onClick={onClickOpenModal} type="button">
        MODAL BUTTON
      </button>
      {isOpen && <Modal onClose={onClickCloseModal}></Modal>}
    </div>
  );
}
