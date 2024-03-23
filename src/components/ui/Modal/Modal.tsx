import React, { useEffect } from 'react';
import { classnames } from '@/utils/classnames';

import { CloseIcon } from '@/../public/icons';
import { ModalProps } from './types';

import data from '@/data/common.json';

export function Modal({ onClose, children, className }: ModalProps) {
  const { ariaLabel } = data.modal;

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  const OnBackDropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const modalClasses = classnames(
    'relative mx-auto flex flex-col w-[320px] bg-mainBcg shadow-md',
    className,
  );

  return (
    <div
      onClick={OnBackDropClick}
      className="bg-backdrop fixed bottom-0 right-0 z-10 h-full w-full overscroll-none backdrop-blur-2xl"
    >
      <div className={modalClasses}>
        <button
          type="button"
          aria-label={ariaLabel}
          onClick={onClose}
          className="duration-250 absolute right-[21px] top-[21px] transform transition hover:scale-110"
        >
          <CloseIcon width={14} height={14} />
        </button>
        {children}
      </div>
    </div>
  );
}
