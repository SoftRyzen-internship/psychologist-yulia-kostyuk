'use client';
import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import common from '@/data/common.json';

import { useState } from 'react'; //BurgerMenu emulation
import Image from 'next/image'; //BurgerMenu emulation
import { BurgerMenu } from '@/components/ui/BurgerMenu/BurgerMenu'; //BurgerMenu emulation

export default function Home() {
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
      <Hero />
      <Button tag="a" accent={true} className="font-semibold">
        {common.buttonsText.v1}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v2}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v1}
      </Button>
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
