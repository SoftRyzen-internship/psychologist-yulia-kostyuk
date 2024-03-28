'use client';
import { useEffect, useRef } from 'react';
import { Logo } from '../Logo';
import { Socials } from '../Socials';
import { Navbar } from '../Navbar';
import CloseIcon from '@/../public/icons/close-icon.svg';
import { IBurgerMenuProps } from './types';
import useFocusTrap from '@/utils/useFocusTrap';
import common from '@/data/common.json';

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full overscroll-none bg-backdrop backdrop-blur-xl xl:hidden">
      <div className="mx-auto flex h-lvh w-full flex-col  bg-mainBcg">
        <div className="flex justify-between px-5 py-[22px] md:px-8 md:py-6">
          <Logo path="header" onClick={onClose} />
          <button
            onClick={onClose}
            aria-label={common.layout['aria-label'].btnClose}
            className="duration-250 transform transition hover:scale-110"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <div className="flex h-full flex-col justify-between px-8 py-10 md:py-[60px]">
          <nav className="mb-auto self-start">
            <Navbar variant="mobile-menu" onClick={handleLinkClick} />
          </nav>
          <div className="self-center md:self-start">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};
