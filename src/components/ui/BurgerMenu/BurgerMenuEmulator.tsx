'use client';

import { useState } from 'react'; //BurgerMenu emulation
import { BurgerMenuIcon } from '@/../public/icons';
import BurgerMenu from './BurgerMenu';

export default function BurgerMenuEmulator() {
  const [isOpen, setIsOpen] = useState(false); //BurgerMenu emulation

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }; //BurgerMenu emulation

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }; //BurgerMenu emulation

  return (
    <>
      <button type="button" onClick={handleOpen}>
        <BurgerMenuIcon />
      </button>
      {isOpen && <BurgerMenu onClose={handleClose} />}
    </>
  );
}
