'use client';

import { useState } from 'react'; //BurgerMenu emulation
import Image from 'next/image'; //BurgerMenu emulation
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
        <Image
          src="/icons/burger-menu.svg"
          alt="menu open button"
          priority={true}
          width={20}
          height={20}
        />
      </button>
      {isOpen && <BurgerMenu isOpen={isOpen} onClose={handleClose} />}
    </>
  );
}
