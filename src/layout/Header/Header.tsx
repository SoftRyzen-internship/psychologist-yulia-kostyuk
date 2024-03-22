'use client';
import { useState } from 'react';
import { BurgerMenu } from '@/components/ui/BurgerMenu';
import { BurgerMenuIcon } from '@/../public/icons';
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

  const onLogoClick = () => {
    console.log('click logo');
  };

  return (
    <header className="w-full">
      <div className="container">
        <div className="relative flex items-end gap-24 pt-3.5">
          <Logo path="header" onClick={onLogoClick} />
          <Navbar variant="header" />
          <button
            type="button"
            className="ml-auto block xl:hidden"
            aria-label={common.layout['aria-label'].burger}
            onClick={handleOpen}
          >
            <BurgerMenuIcon />
          </button>
          {isOpen && <BurgerMenu onClose={handleClose} />}
        </div>
      </div>
    </header>
  );
};
