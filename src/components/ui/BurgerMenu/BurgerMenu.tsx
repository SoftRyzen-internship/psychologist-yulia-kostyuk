'use client';
import { useEffect } from 'react';
import { Logo } from '../Logo';
import { Socials } from '../Socials';
import { Navbar } from '../Navbar';
import { CloseIcon } from '@/../public/icons';
import { IBurgerMenuProps } from './types';

export default function BurgerMenu({ onClose }: IBurgerMenuProps) {
  useEffect(() => {
    const close = (e: { keyCode: number }) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  return (
    <>
      <div className="bg-backdrop and fixed bottom-0 right-0 z-10 h-full w-full overscroll-none backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex h-lvh w-full flex-col bg-mainBcg">
          <div className="mb-[52px] flex justify-between px-5 py-[22px] md:pl-8">
            <Logo path="header" onClick={onClose} />
            <button
              aria-label="menu button close"
              onClick={onClose}
              className="duration-250 transform transition hover:scale-110"
            >
              <CloseIcon width={14} height={14} />
            </button>
          </div>
          <nav className="mb-auto  ml-3 self-start md:ml-0">
            <Navbar variant="mobile-menu" />
          </nav>
          <div className="self-center md:self-start">
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
