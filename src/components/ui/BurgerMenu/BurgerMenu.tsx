'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Logo } from '../Logo';
import { IBurgerMenuProps } from './types';
import menuItems from '../../../data/header.json';

export default function BurgerMenu({ isOpen, onClose }: IBurgerMenuProps) {
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
        <div className="mx-auto h-full w-full bg-mainBcg pb-12 pl-5 pr-[25px] pt-[22px] md:pl-8">
          <div className="mb-[52px] flex justify-between">
            <Logo path="header" onClick={onClose} />
            <button
              aria-label="menu button close"
              onClick={onClose}
              className="duration-250 transform transition hover:scale-110"
            >
              <Image
                src="/icons/close-icon.svg"
                alt="menu open button"
                priority={true}
                width={14}
                height={14}
              />
            </button>
          </div>
          <nav className="mb-[340px] ml-3 md:mb-[696px] md:ml-0">
            <ul>
              {menuItems.map(({ id, text }) => (
                <li key={id} className="mb-6 last:mb-0">
                  {text}
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-center md:text-left">Socials</div>
        </div>
      </div>
    </>
  );
}
