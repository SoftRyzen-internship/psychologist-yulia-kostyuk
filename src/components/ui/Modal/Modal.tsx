import React, { useEffect, useCallback } from 'react';
import { classnames } from '@/utils/classnames';
import { Notification } from '../Notification';
import { CloseIcon } from '@/../public/icons';
import { ModalProps } from './types';

export function Modal({ type, onClose, children }: ModalProps) {
  useEffect(() => {
    const close = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  const OnBackDropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div
        onClick={OnBackDropClick}
        className="bg-backdrop and fixed bottom-0 right-0 z-10 h-full w-full overflow-auto  overscroll-none backdrop-blur-xl"
      >
        <div className="relative top-1/4 mx-auto flex w-[320px] flex-col bg-[#E6E1D5]  px-6 py-8 md:w-[540px] md:p-12 xl:w-[572px] xl:p-16">
          <button
            aria-label="menu button close"
            onClick={onClose}
            className="duration-250 absolute right-[21px] top-[21px] transform transition hover:scale-110"
          >
            <CloseIcon width={14} height={14} />
          </button>
          {type !== 'conditions' && <Notification type={type} />}
          {children}
        </div>
      </div>
    </>
  );
}
