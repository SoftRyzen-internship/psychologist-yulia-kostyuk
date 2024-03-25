'use client';

import { Hero } from '@/sections/Hero';
import { Button } from '@/components/ui/Button';
import { Socials } from '@/components/ui/Socials';
import { Logo } from '@/components/ui/Logo';
import { Values } from '@/sections/Values';
import { Services } from '@/sections/Services';
import { Questions } from '@/sections/Questions';

import common from '@/data/common.json';

import {
  ModalTestComponent,
  ModalTestERRORComponent,
  ModalTestSUCCESSComponent,
  ModalTestCONDITIONSComponents,
} from '@/components/ui/Modal';
// import { Modal } from '@/components/ui/Modal';

export default function Home() {
  const onLogoClick = () => {
    console.log('click logo');
  };

  return (
    <>
      <Hero />
      <Values />
      <Services />
      <Questions />
      <Button tag="a" accent={true} className="font-semibold">
        {common.buttonsText.v1}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v2}
      </Button>
      <Button tag="a" accent={false} className="font-normal">
        {common.buttonsText.v1}
      </Button>
      <Logo path="footer" onClick={onLogoClick} className="ml-7" />
      <Socials className="mt-5" />
      <ModalTestComponent />
      {/* <BurgerMenuEmulator /> */}
      <Logo path="footer" onClick={onLogoClick} className="ml-7" />
      <Socials className="mt-5" />
      <ModalTestERRORComponent />
      <ModalTestSUCCESSComponent />
      <ModalTestCONDITIONSComponents />
    </>
  );
}
