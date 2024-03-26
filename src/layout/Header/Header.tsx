'use client';
import { useState } from 'react';
import { BurgerMenu } from '@/components/ui/BurgerMenu';
import BurgerMenuIcon from '@/../public/icons/burger-menu.svg';
import { Navbar } from '@/components/ui/Navbar';
import { Logo } from '@/components/ui/Logo';
import common from '@/data/common.json';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="w-full">
      <div className="container flex items-center pb-5 pt-5 md:mt-6 md:pb-6 xl:gap-[100px] notXL:justify-between">
        <Logo path="header" onClick={handleClose} />
        <Navbar variant="header" className="smOnly:hidden mdOnly:hidden" />
        <button
          type="button"
          className="block xl:hidden"
          aria-label={common.layout['aria-label'].burger}
          onClick={handleOpen}
        >
          <BurgerMenuIcon width={32} height={32} />
        </button>
        {isOpen && <BurgerMenu onClose={handleClose} />}
      </div>
    </header>
  );
};
